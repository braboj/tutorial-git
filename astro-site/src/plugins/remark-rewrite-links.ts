import { visit } from "unist-util-visit";
import type { Root, Link } from "mdast";

const CHAPTER_LINK = /^(\d{2}-)(.+)\.md(#.*)?$/;

export function remarkRewriteLinks() {
  return (tree: Root) => {
    visit(tree, "link", (node: Link) => {
      const match = node.url.match(CHAPTER_LINK);
      if (match) {
        node.url = `../${match[2]}/${match[3] || ""}`;
      }
    });
  };
}
