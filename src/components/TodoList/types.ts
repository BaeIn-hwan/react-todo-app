import { TItem } from "../TodoItem/types";

export interface IPropsTodoList {
  list: TItem[];
  onCompleted: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  onDelete: (id: string) => void;
}
