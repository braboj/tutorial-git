import type { CollectionEntry } from "astro:content";

export interface PageInfo {
  slug: string;
  title: string;
  id: string;
  section: string;
}

export interface SectionInfo {
  title: string;
  path: string;
  pages: { slug: string; title: string; href: string }[];
}

/** Build the full page list from content collection entries. */
export function buildPages(entries: CollectionEntry<"docs">[]): PageInfo[] {
  const sorted = [...entries].sort((a, b) => a.data.order - b.data.order);

  return sorted.map((entry) => ({
    slug: entry.data.section,
    title: entry.data.title,
    id: entry.id,
    section: entry.data.section,
  }));
}

/** Build section navigation info for the sidebar/tabs. */
export function buildSections(entries: CollectionEntry<"docs">[]): SectionInfo[] {
  const pages = buildPages(entries);

  return pages.map((page) => ({
    title: page.title,
    path: `/${page.section}`,
    pages: [{ slug: page.slug, title: page.title, href: `/${page.slug}/` }],
  }));
}
