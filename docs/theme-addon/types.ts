import { THEME_ID } from "./constants";
import type { ThemeIds } from "./theme";
import { Args, StoryContext } from "@storybook/types";

export interface AutumnStoryContext extends StoryContext {
  globals: AutumnGlobals;
}

/**
 * Extends the storybook globals object to include fluent specific properties
 */
export interface AutumnGlobals extends Args {
  [THEME_ID]?: ThemeIds;
}
