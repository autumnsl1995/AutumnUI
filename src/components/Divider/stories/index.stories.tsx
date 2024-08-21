import type { Meta } from "@storybook/react";
import { Divider, AutumnProvider, tokens } from "autumn-ui";
import Default from "./Default.stories";
// @ts-expect-error - required for ts
import DefaultSource from "./Default.stories.tsx?raw";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};
export default {
  title: "组件/Divider",
  component: Divider,
  decorators: [
    (Story) => {
      return (
        <AutumnProvider>
          <div
            style={{
              padding: "48px 24px",
              backgroundColor: tokens.colorNeutralBackground2,
            }}
          >
            <Story />
          </div>
        </AutumnProvider>
      );
    },
  ],
} as Meta;

export { Default };
