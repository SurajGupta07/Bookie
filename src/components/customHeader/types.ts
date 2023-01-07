export type TActionItem = {
  component: JSX.Element;
  onClick: () => void;
};

export type TCustomerHeaderProps = {
  title: string;
  subTitle?: string;
  actionIcons?: TActionItem[];
};
