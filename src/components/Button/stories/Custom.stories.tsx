import { Button } from "autumn-ui";
import { makeStyles } from "@griffel/react";
const useClasses = makeStyles({
  root: {
    backgroundColor: "red",
    padding: "100px",
  },
});

export const Custom = () => {
  const styles = useClasses();
  return (
    <div className={styles.root}>
      <Button
        primary
        label="Custom Button"
      ></Button>
    </div>
  );
};
