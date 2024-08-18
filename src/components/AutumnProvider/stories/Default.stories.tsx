import { makeStyles } from "@griffel/react";
import { AutumnProvider, tokens, webLightTheme } from "autumn-ui";

const useStyles = makeStyles({
  provider: {
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
  text: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandBackground2,
    fontSize: "20px",
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
});

const Default = () => {
  const styles = useStyles();
  return (
    <>
      <div>
        <AutumnProvider
          className={styles.provider}
          theme={webLightTheme}
        >
          <div className={styles.text}>web Light Theme</div>
        </AutumnProvider>
      </div>
    </>
  );
};

export default Default;
