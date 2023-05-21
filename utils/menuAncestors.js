export const computeMenuAncestors = (menu) => {
  const ancestors = {};

  const walkMenu = (node, parents) => {
    if (node.children) {
      node.children.forEach((child) => {
        ancestors[child.id] = parents;
        walkMenu(child, [...parents, child.id]);
      });
    }
  };

  walkMenu(menu, []);

  return ancestors;
};
