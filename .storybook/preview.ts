import type { Preview } from "@storybook/react";
import { useExportToSandboxButton } from "../docs/sandbox/decorators/with-export-to-sandbox-button";
import { withAutumnProvider } from "../docs/src/withAutumnProvider";
import "../docs/sandbox/styles.css";
import { AutumnDocsPage } from "../docs/src/AutumnDocsPage.stories";
export const decorators = [withAutumnProvider, useExportToSandboxButton];

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // 代码编辑器
    exportToSandbox: {
      requiredDependencies: {
        react: "^18",
        "react-dom": "^18",
      },
    },
    docs: {
      toc: {
        title: "Contents",
      },
      page: AutumnDocsPage,
      canvas: {
        withToolbar: false,
      },
    },
  },
};

export default preview;
