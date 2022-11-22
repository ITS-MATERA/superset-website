export type Link = {
  href?: string;
  label?: string;
  active?: boolean;
  divider?: boolean;
};

export type Section = {
  name: string;
  items: Link[];
};

export type MenuItem = Link & {
  items?: Link[];
  sections?: Section[];
};

export type Breadcrumb = {
  href?: string;
  label?: string;
};
