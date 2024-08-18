/**
 * 根据theme,创建css规则
 *
 *
 *
 *
 */

import { PartialTheme, Theme } from "../../tokens";

export function createCSSRuleFromTheme(
  selector: string,
  theme: Theme | PartialTheme | undefined
): string {
  if (theme) {
    const cssVarAsString = (
      Object.keys(theme) as (keyof typeof theme)[]
    ).reduce((cssVarRule, cssVar) => {
      return `${cssVarRule}--${cssVar}: ${theme[cssVar]}; `;
    }, "");

    return `${selector} {${cssVarAsString}}`;
  }

  return `${selector} {}`;
}
