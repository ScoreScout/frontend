export enum ButtonSize {
  XL = "XL",
  L = "L",
  M = "M",
  S = "S",
}

export type ButtonProps = {
  size: ButtonSize;
  primary?: boolean;
  children: React.ReactNode;
  margin?: string;
};
