import React from "react";
import { AutumnProvider, webLightTheme } from "../../src";

export const withAutumnProvider = (Story) => {
  const theme = webLightTheme;
  return (
    <AutumnProvider>
      <div
        style={{
          padding: "48px 24px",
          backgroundColor: theme.colorNeutralBackground2,
        }}
      >
        <Story />
      </div>
    </AutumnProvider>
  );
};
