const addContainerPlugin = () => {
    return (tree: { type: string; children: any[] }) => {
      if (tree.type === "root") {
        return {
          ...tree,
          children: [
            {
              type: "element",
              tagName: "div",
              properties: {
                className: "w-full md:pl-8 md:pt-0 pt-6 prose max-w-none",
              },
              children: tree.children,
            },
          ],
        };
      }
    };
  };