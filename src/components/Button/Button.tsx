import { ReactNode, useState } from "react";
import Alert from "../Alert";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "success";
}

const Button = ({ children, color }: Props) => {
  const [AlertShown, setAlert] = useState(false);
  return (
    <div>
      {AlertShown && (
        <Alert closeAlert={() => setAlert(false)}>
          <strong>Alert</strong>
        </Alert>
      )}
      <button
        type="button"
        className={[styles.btn, styles["btn-" + color]].join(" ")}
        onClick={() => setAlert(true)}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
