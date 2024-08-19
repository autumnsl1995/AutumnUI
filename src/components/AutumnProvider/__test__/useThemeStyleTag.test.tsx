import type { Theme } from "autumn-ui";
import { renderHook } from "@testing-library/react";
import { useThemeStyleTag } from "../useThemeStyleTag";

describe("useThemeStyleTag", () => {
  const defaultTheme = {
    "css-variable-1": "1",
    "css-variable-2": "2",
  } as unknown as Theme;

  it("should render style tag", () => {
    const { result } = renderHook(() => {
      return useThemeStyleTag({ theme: defaultTheme });
    });
    expect(
      document.getElementById(result.current.themeClassName)
    ).not.toBeNull();
  });
  it("should remove style tag on unmount", () => {
    const { result, unmount } = renderHook(() => {
      return useThemeStyleTag({ theme: defaultTheme });
    });
    unmount();
    expect(document.getElementById(result.current.themeClassName)).toBeNull();
  });
});
