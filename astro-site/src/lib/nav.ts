import nav from "../data/nav.json";

export interface PageInfo {
  slug: string;
  title: string;
  contentId: string;
  section: string;
  sectionPath: string;
  subsection?: string;
}

export interface SectionInfo {
  tab: string;
  path: string;
  pages: { slug: string; title: string; href: string }[];
  subsections?: {
    title: string;
    slug: string;
    pages: { slug: string; title: string; href: string }[];
  }[];
}

export function getAllPages(): PageInfo[] {
  const pages: PageInfo[] = [];

  for (const section of nav.sections) {
    // Section index page
    if ("index" in section && section.index) {
      pages.push({
        slug: section.path.slice(1),
        title: section.tab,
        contentId: `${section.dir}/${section.index}`,
        section: section.tab,
        sectionPath: section.path,
      });
    }

    // Flat pages
    if ("pages" in section && section.pages) {
      for (const page of section.pages) {
        pages.push({
          slug: `${section.path.slice(1)}/${page.slug}`,
          title: page.title,
          contentId: `${section.dir}/${page.file}`,
          section: section.tab,
          sectionPath: section.path,
        });
      }
    }

    // Subsections (Operations)
    if ("subsections" in section && section.subsections) {
      for (const sub of section.subsections) {
        // Subsection index
        if (sub.index) {
          pages.push({
            slug: `${section.path.slice(1)}/${sub.slug}`,
            title: sub.title,
            contentId: `${section.dir}/${sub.dir}/${sub.index}`,
            section: section.tab,
            sectionPath: section.path,
            subsection: sub.title,
          });
        }

        // Subsection pages
        for (const page of sub.pages) {
          pages.push({
            slug: `${section.path.slice(1)}/${sub.slug}/${page.slug}`,
            title: page.title,
            contentId: `${section.dir}/${sub.dir}/${page.file}`,
            section: section.tab,
            sectionPath: section.path,
            subsection: sub.title,
          });
        }
      }
    }
  }

  return pages;
}

export function getSection(path: string): SectionInfo | undefined {
  for (const section of nav.sections) {
    if (section.path === path) {
      const result: SectionInfo = {
        tab: section.tab,
        path: section.path,
        pages: [],
      };

      if ("pages" in section && section.pages) {
        result.pages = section.pages.map((p) => ({
          slug: p.slug,
          title: p.title,
          href: `${section.path}/${p.slug}/`,
        }));
      }

      if ("subsections" in section && section.subsections) {
        result.subsections = section.subsections.map((sub) => ({
          title: sub.title,
          slug: sub.slug,
          pages: sub.pages.map((p) => ({
            slug: p.slug,
            title: p.title,
            href: `${section.path}/${sub.slug}/${p.slug}/`,
          })),
        }));
      }

      return result;
    }
  }
}
