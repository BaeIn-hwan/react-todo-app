import { createPortal } from "react-dom";
import * as T from "./types";

export default function Portal(props: T.IPropsPortal) {
  const { open = false, children, element = document.body } = props;

  if (!open) return;

  return createPortal(children, element);
}
