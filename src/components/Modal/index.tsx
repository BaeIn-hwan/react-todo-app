import * as T from "./types";
import "./styled.scss";
import Portal from "../Portal";

export default function Modal(props: T.IPropsModal) {
  const { open, close, children } = props;

  return (
    <Portal open={open}>
      <div className="dim" onClick={close}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </Portal>
  );
}
