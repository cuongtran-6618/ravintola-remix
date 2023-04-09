import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import SectionHeader from "./SectionHeader";
import { TypeLinkContainer } from "~/types";

interface Blok {
  blok: {
    _uid: string;
    title: string;
    content: string;
    links_container: Array<TypeLinkContainer>;
  };
}

const Story = ({ blok }: Blok) => {
  return (
    <section
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="container mx-auto text-xl lg:text-2xl lg:max-w-4xl"
    >
      <SectionHeader title={blok.title} />
      <div className="mobile-block leading-10">{blok.content}</div>
      {blok.links_container.map((blok) => (
        <div key={blok._uid}>
          <StoryblokComponent blok={blok} />
        </div>
      ))}
    </section>
  );
};
export default Story;
