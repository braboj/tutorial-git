import { visit } from "unist-util-visit";
import type { Root, Link } from "mdast";

const CHAPTER_LINK = /^(?:\.\.\/)?(\d{2}-)(.+)\.md(#.*)?$/;
const SUBDIR_FILE_LINK = /^([\w-]+)\/([\w-]+)\.md(#.*)?$/;
const SIBLING_LINK = /^([a-z][\w-]*)\.md(#.*)?$/;

export function remarkRewriteLinks() {
  return (tree: Root) => {
    visit(tree, "link", (node: Link) => {
      // Links from top-level to subdir: playbook/index.md → ../playbook/
      // Links from top-level to subdir page: playbook/undoing-changes.md → ../playbook/undoing-changes/
      const subdirMatch = node.url.match(SUBDIR_FILE_LINK);
      if (subdirMatch) {
        const slug = subdirMatch[2] === "index" ? "" : `${subdirMatch[2]}/`;
        node.url = `../${subdirMatch[1]}/${slug}${subdirMatch[3] || ""}`;
        return;
      }
      // Links to sibling files in same directory: slug.md → slug/
      const siblingMatch = node.url.match(SIBLING_LINK);
      if (siblingMatch) {
        node.url = `${siblingMatch[1]}/${siblingMatch[2] || ""}`;
        return;
      }
      // Links to numbered chapters: NN-slug.md or ../NN-slug.md → ../slug/
      const match = node.url.match(CHAPTER_LINK);
      if (match) {
        node.url = `../${match[2]}/${match[3] || ""}`;
      }
    });
  };
}
