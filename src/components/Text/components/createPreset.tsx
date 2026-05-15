import { mergeClasses } from "@griffel/react";
import { Text, TextPresetProps } from "autumn-ui";

type Options = {
  displayName: string;
  useStyles: () => Record<"root", string>;
};

export function createPreset(
  options: Options
): React.FunctionComponent<TextPresetProps> {
  const { useStyles, displayName } = options;
  const className = `autumn-ui-${displayName}`;
  const Wrapper = (props: TextPresetProps) => {
    const styles = useStyles();
    const cls = mergeClasses(className, styles.root, className);

    return (
      <Text
        className={cls}
        {...props}
      />
    );
  };
  Wrapper.displayName = displayName;

  return Wrapper;
}
