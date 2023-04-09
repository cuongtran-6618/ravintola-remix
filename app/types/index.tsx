export type TypeLinkAsButton = {
  id: string;
  url: string;
  linktype: string;
  fieldtype: string;
  cached_url: string;
};

export enum styleButton {
  PrimaryButton = "primary-btn",
  SecondaryButton = "secondary-btn",
}

export type TypeLinkContainer = {
  link: TypeLinkAsButton;
  title: string;
  style: styleButton;
};
