import React from "react";
import { ForwardRefComponent } from "autumn-ui";
import { mergeClasses } from "@griffel/react";
import {
  dividerClassNames,
  useBaseStyles,
  useHorizontalStyles,
  useVerticalStyles,
} from "./useDividerStyles";

/**
 * Divider组件
 */
export type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   *  分割线内内容的对齐方式
   * @default "center"
   */
  alignContent?: "start" | "center" | "end";

  /**
   * 默认外观
   * @default "default"
   */

  appearance?: "brand" | "default" | "strong" | "subtle";
  /** 在divider的开头和结尾添加padding
   * @default false
   */
  inset?: boolean;
  /**
   * 分割线水平(默认)或垂直
   *
   * @default false
   */
  vertical?: boolean;
};
/**
 *
 * 内容分割线
 */
export const Divider: ForwardRefComponent<DividerProps> = React.forwardRef(
  (
    {
      alignContent = "center",
      appearance = "default",
      inset = false,
      vertical = false,
      className,
      style,
      children,
    },
    ref
  ) => {
    const baseStyles = useBaseStyles();
    const horizontalStyles = useHorizontalStyles();
    const verticalStyles = useVerticalStyles();
    let hasChildren = children !== undefined && children !== null;
    if (!hasChildren && typeof children === "string") {
      hasChildren = children.trim() !== "";
    }
    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={mergeClasses(
          dividerClassNames.root,
          baseStyles.base,
          baseStyles[alignContent],
          baseStyles[appearance],
          // 横线
          !vertical && horizontalStyles.base,
          !vertical && inset && horizontalStyles.inset,
          !vertical && horizontalStyles[alignContent],
          // 竖线
          vertical && verticalStyles.base,
          vertical && inset && verticalStyles.inset,
          vertical && verticalStyles[alignContent],
          vertical && hasChildren && verticalStyles.withChildren,
          hasChildren === false && baseStyles.childless,
          className
        )}
        role="separator"
        aria-orientation={vertical ? "vertical" : "horizontal"}
        style={style}
      >
        {hasChildren && (
          <span className={dividerClassNames.wrapper}>{children}</span>
        )}
      </div>
    );
  }
);

Divider.displayName = "Divider";
