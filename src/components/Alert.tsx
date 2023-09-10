import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  closeAlert: () => void;
}

const Alert = ({ children, closeAlert }: Props) => {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => closeAlert()}
      ></button>
    </div>
  );
};

export default Alert;
