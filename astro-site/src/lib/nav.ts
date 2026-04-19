import type { CollectionEntry } from "astro:content";

export interface PageInfo {
  slug: string;
  title: string;
  id: string;
  section: string;
  subsection?: string;
}

export interface SectionInfo {
  title: string;
  path: string;
  pages: { slug: string; title: string; href: string }[];
  subsections?: {
    title: string;
    slug: string;
    pages: { slug: string; title: string; href: string }[];
  }[];
}

/** Derive the URL slug from a content entry's frontmatter. */
function entryToSlug(entry: CollectionEntry<"docs">): string {
  const { section, subsection } = entry.data;
  if (section === "operations" && subsection) {
    return `operations/${subsection}`;
  }
  if (section === "test") {
    // test-questions → test/questions
    return entry.id.replace("-", "/");
  }
  return section;
}

/** Build the full page list from content collection entries. */
export function buildPages(entries: CollectionEntry<"docs">[]): PageInfo[] {
  const sorted = [...entries].sort((a, b) => {
    if (a.data.order !== b.data.order) return a.data.order - b.data.order;
    return (a.data.subsectionOrder ?? 0) - (b.data.subsectionOrder ?? 0);
  });

  return sorted.map((entry) => ({
    slug: entryToSlug(entry),
    title: entry.data.title,
    id: entry.id,
    section: entry.data.section,
    subsection: entry.data.subsection,
  }));
}

/** Build section navigation info for the sidebar/tabs. */
export function buildSections(entries: CollectionEntry<"docs">[]): SectionInfo[] {
  const pages = buildPages(entries);
  const sectionMap = new Map<string, SectionInfo>();

  for (const page of pages) {
    if (page.section === "operations") {
      let section = sectionMap.get("operations");
      if (!section) {
        section = {
          title: "Operations",
          path: "/operations",
          pages: [],
          subsections: [],
        };
        sectionMap.set("operations", section);
      }
      if (page.subsection) {
        section.subsections!.push({
          title: page.title,
          slug: page.subsection,
          pages: [{ slug: page.slug, title: page.title, href: `/${page.slug}/` }],
        });
      }
    } else if (page.section === "test") {
      let section = sectionMap.get("test");
      if (!section) {
        section = { title: "Test", path: "/test", pages: [] };
        sectionMap.set("test", section);
      }
      section.pages.push({ slug: page.slug, title: page.title, href: `/${page.slug}/` });
    } else {
      // Single-page sections: introduction, concepts, appendix
      if (!sectionMap.has(page.section)) {
        sectionMap.set(page.section, {
          title: page.title,
          path: `/${page.section}`,
          pages: [{ slug: page.slug, title: page.title, href: `/${page.slug}/` }],
        });
      }
    }
  }

  return Array.from(sectionMap.values());
}
