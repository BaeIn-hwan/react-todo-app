export interface IPropsModal {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
}
