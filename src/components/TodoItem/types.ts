export type TItem = {
  id: string;
  content: string;
  date: string;
  completed: boolean;
};

export interface IPropsTodoItem {
  item: TItem;
  onCompleted: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  onDelete: (id: string) => void;
}
