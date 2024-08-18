import { Theme, webLightTheme } from "autumn-ui";
import React from "react";
import { useStyles } from "./useStyles.styles";

/**
 * 传递theme主题  跨组件传递参数
 * @returns
 */

type ThemeContextValue = Theme | Partial<Theme> | undefined;
const ThemeContext = React.createContext<ThemeContextValue>(undefined);
//2. 创建provider
export type AutumnProviderProps = React.HTMLAttributes<
  React.ChildContextProvider<ThemeContextValue>
> & {
  theme?: ThemeContextValue;
};
export const AutumnProvider = ({
  className,
  theme = webLightTheme,
  children,
  ...rest
}: AutumnProviderProps) => {
  const cls = useStyles({ className, theme });
  return (
    <ThemeContext.Provider
      value={theme}
      {...rest}
    >
      <div className={cls}>{children}</div>
    </ThemeContext.Provider>
  );
};

// 3.根据theme创建cssrules
