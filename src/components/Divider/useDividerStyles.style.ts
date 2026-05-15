import { shorthands, makeStyles } from "@griffel/react";
import { tokens } from "autumn-ui";

const contentSpacing = "12px";
const insetSpacing = "12px";
const maxStartEndLength = "8px";
const minStartEndLength = "8px";

export const dividerClassNames = {
  root: "autumn-ui-Divider",
  wrapper: "autumn-ui-Divider_wrapper",
};

export const useBaseStyles = makeStyles({
  base: {
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    position: "relative",

    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase200,
    textAlign: "center",
    "::before": {
      boxSizing: "border-box",
      display: "flex",
      flexGrow: 1,
    },
    "::after": {
      boxSizing: "border-box",
      display: "flex",
      flexGrow: 1,
    },
  },
  childless: {
    "::before": {
      marginBottom: 0,
      marginRight: 0,
    },
    "::after": {
      marginLeft: 0,
      marginTop: 0,
    },
  },
  start: {
    "::after": {
      content: "''",
    },
  },
  center: {
    "::before": {
      content: "''",
    },
    "::after": {
      content: "''",
    },
  },
  end: {
    "::before": {
      content: "''",
    },
  },
  brand: {
    color: tokens.colorBrandForeground1,
    "::before": {
      ...shorthands.borderColor(tokens.colorBrandStroke1),
    },
    "::after": {
      ...shorthands.borderColor(tokens.colorBrandStroke1),
    },
  },
  default: {
    color: tokens.colorBrandForeground2,
    "::before": {
      ...shorthands.borderColor(tokens.colorBrandStroke2),
    },
    "::after": {
      ...shorthands.borderColor(tokens.colorBrandStroke2),
    },
  },
  subtle: {
    color: tokens.colorNeutralForeground3,
    "::before": {
      ...shorthands.borderColor(tokens.colorNeutralForeground3),
    },
    "::after": {
      ...shorthands.borderColor(tokens.colorNeutralForeground3),
    },
  },
  strong: {
    color: tokens.colorNeutralForeground1,
    "::before": {
      ...shorthands.borderColor(tokens.colorNeutralForeground1),
    },
    "::after": {
      ...shorthands.borderColor(tokens.colorNeutralForeground1),
    },
  },
});
// 横线
export const useHorizontalStyles = makeStyles({
  base: {
    width: "100%",
    "::before": {
      borderTopStyle: "solid",
      borderTopWidth: tokens.strokeWidthThin,
      minWidth: minStartEndLength,
    },
    "::after": {
      borderTopStyle: "solid",
      borderTopWidth: tokens.strokeWidthThin,
      minWidth: minStartEndLength,
    },
  },
  inset: {
    paddingLeft: insetSpacing,
    paddingRight: insetSpacing,
  },
  start: {
    "::before": {
      content: "''",
      marginRight: contentSpacing,
      maxWidth: maxStartEndLength,
    },
    "::after": {
      marginLeft: contentSpacing,
    },
  },
  center: {
    "::before": {
      marginRight: contentSpacing,
    },
    "::after": {
      marginLeft: contentSpacing,
    },
  },
  end: {
    "::after": {
      content: "''",
      marginLeft: contentSpacing,
      maxWidth: maxStartEndLength,
    },
    "::before": {
      marginRight: contentSpacing,
    },
  },
});
// 竖线
export const useVerticalStyles = makeStyles({
  base: {
    flexDirection: "column",
    minHeight: "20px",

    "::before": {
      borderRightStyle: "solid",
      borderRightWidth: tokens.strokeWidthThin,
      minHeight: minStartEndLength,
    },
    "::after": {
      borderRightStyle: "solid",
      borderRightWidth: tokens.strokeWidthThin,
      minHeight: minStartEndLength,
    },
  },
  inset: {
    marginTop: insetSpacing,
    marginBottom: insetSpacing,
  },
  withChildren: {
    minHeight: "84px",
  },
  start: {
    "::before": {
      content: '""',
      marginBottom: contentSpacing,
      maxHeight: maxStartEndLength,
    },
    "::after": {
      marginTop: contentSpacing,
    },
  },
  center: {
    "::before": {
      marginBottom: contentSpacing,
    },
    "::after": {
      marginTop: contentSpacing,
    },
  },
  end: {
    "::before": {
      marginBottom: contentSpacing,
    },
    "::after": {
      content: '""',
      marginTop: contentSpacing,
      maxHeight: maxStartEndLength,
    },
  },
});
