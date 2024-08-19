import { useEffect } from "react";
import { addDemoActionButton } from "../sandbox-factory";
import type { StoryContext } from "@storybook/react";

export const useExportToSandboxButton = (
  stotyFn: (context: StoryContext) => JSX.Element,
  context: StoryContext
) => {
  useEffect(() => {
    if (context.parameters.docs?.canvas?.sourceState === "none") {
      return;
    }
    if (context.viewMode === "docs") {
      addDemoActionButton(context);
    }
  }, [context]);

  return stotyFn(context);
};
