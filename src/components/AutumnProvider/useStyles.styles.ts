import { makeStyles, mergeClasses } from "@griffel/react";
import { AutumnProviderProps, tokens } from "autumn-ui";
import { useThemeStyleTag } from "./useThemeStyleTag";

const autumnProviderClassNames = {
  root: "autumn-ui-AutumnProvider",
};

const useBaseStyles = makeStyles({
  root: {
    color: tokens.colorNeutralBackground1,
    backgroundColor: tokens.colorNeutralBackground1,
    textAlign: "left",
  },
});

export const useStyles = ({
  className,
  theme,
}: Partial<AutumnProviderProps>) => {
  const baseStyles = useBaseStyles();
  const { themeClassName } = useThemeStyleTag({ theme });

  return mergeClasses(
    autumnProviderClassNames.root,
    themeClassName,
    baseStyles.root,
    className
  );
};
