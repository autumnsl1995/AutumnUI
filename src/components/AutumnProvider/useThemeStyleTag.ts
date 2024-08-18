import React from "react";
import { createCSSRuleFromTheme } from "./createCSSRuleFromTheme";
import { AutumnProviderProps } from "autumn-ui";

const createStyleTag = (
  target: Document | undefined,
  elementAttributes: Record<string, string>
) => {
  if (!target) {
    return undefined;
  }

  const tag = target.createElement("style");
  Object.keys(elementAttributes).forEach((attrName) => {
    tag.setAttribute(attrName, elementAttributes[attrName]);
  });
  target.head.appendChild(tag);

  return tag;
};

const insertSheet = (tag: HTMLStyleElement, rule: string) => {
  const sheet = tag.sheet;
  if (sheet) {
    if (sheet.cssRules.length > 0) {
      sheet.deleteRule(0);
    }
    sheet.insertRule(rule);
  }
};

export const useThemeStyleTag = ({ theme }: Partial<AutumnProviderProps>) => {
  const id = React.useId(); // 生成的id有冒号
  const goodId = React.useMemo(() => {
    return id.replace(/:/g, ""); // 去除冒号
  }, [id]);
  // 生成唯一类名 css规则
  const themeClassName = "autumn-ui-AutumnPrvider" + goodId;
  // 根据theme 生成css规则
  const rule = React.useMemo(
    () => createCSSRuleFromTheme(`.${themeClassName}`, theme),
    [themeClassName, theme]
  );
  // 生成style标签
  const styleTag = React.useRef<HTMLStyleElement | null | undefined>(null);
  React.useLayoutEffect(() => {
    styleTag.current = createStyleTag(document, { id: themeClassName });
    if (styleTag.current) {
      insertSheet(styleTag.current, rule);
    }
    return () => {
      styleTag.current?.remove();
    };
  }, [themeClassName, rule]);
  return { themeClassName };
};
