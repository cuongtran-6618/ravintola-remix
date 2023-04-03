import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

interface ILink {
  id: string;
  url: string;
  linktype: string;
  fieldtype: string;
  cached_url: string;
}

const LinkAsButton = ({ blok }: ILink) => {
  return (
    <a key={blok.id} src={blok.url} className="px-8 py-4 border">
      Link
    </a>
  );
};
export default LinkAsButton;
