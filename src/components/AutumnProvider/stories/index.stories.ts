import type { Meta } from "@storybook/react";
import { AutumnProvider } from "autumn-ui";
import Default from "./Default.stories";
// @ts-expect-error - required for ts
import DefaultSource from "./Default.stories?raw";
const meta = {
  title: "组件/AutumnProvider",
  component: AutumnProvider,
} satisfies Meta<typeof AutumnProvider>;

export default meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

export { Default };
