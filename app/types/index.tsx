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

export type TypeImageAsset = {
  id: number;
  alt: string;
  name: string;
  title: string;
  filename: string;
  copyright: string;
  fieldtype: string;
};

export type TypeMeal = {
  _uid: string;
  ingredient: string;
  chili_level: Array<TypeImageAsset>;
  description: string;
  price: number;
  currency: string;
};

export type TypeMeals = {
  _uid: string;
  title: string;
  ingradients: Array<TypeMeal>;
  description: string;
};

export type TypeStory = {
  _uid: string;
  title: string;
  content: string;
  links_container: Array<TypeLinkContainer>;
  styleClass: string;
};
