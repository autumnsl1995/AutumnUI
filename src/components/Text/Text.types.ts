export type TextProps = React.HTMLAttributes<HTMLSpanElement> & {
  /***
   * @default start
   */

  align?: "start" | "center" | "end" | "justify";
  /**
   * @default false
   */
  block?: boolean;
  /**
   * @default base
   */
  font?: "base" | "monospace" | "numeric";
  /**
   * @default false
   */
  italic?: boolean;
  /**
   * @default 300
   */
  size?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;
  /**
   * @default false
   */
  strikethrough?: boolean;

  /**
   *
   * @default false
   */
  truncate?: boolean;

  /**
   * @default regular
   */
  weight?: "regular" | "medium" | "semibold" | "bold";

  /**
   * @default true
   */
  wrap?: boolean;
  /**
   * @default false
   */
  underline?: boolean;
};
export type TextPresetProps = Omit<TextProps, "font" | "size" | "weight">;
