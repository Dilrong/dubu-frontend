export type TextCardProps = {
  width?: number;
  height?: number;
  img: string;
  title: string;
  body: string;
  buttonLabel: string;
  onClick?: () => void;
};
