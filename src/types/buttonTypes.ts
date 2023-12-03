export enum ButtonSize {
  XL = "XL",
  L = "L",
  M = "M",
  S = "S",
}

export interface ButtonProps {
  size: ButtonSize;
  primary?: boolean;
  children: React.ReactNode;
  margin?: string;
  onClick?: (e: Event) => void;
  disabled?: boolean;
}
