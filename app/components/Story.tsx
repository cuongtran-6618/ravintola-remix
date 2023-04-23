import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import SectionHeader from "./SectionHeader";
import type { TypeLinkContainer } from "~/types";
import MDEditor from "@uiw/react-md-editor";

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
      className="container mx-auto text-xl mb-36 lg:text-xl lg:max-w-4xl"
    >
      <SectionHeader title={blok.title} />
      <div className="mobile-block leading-8 text-center">
        <MDEditor value={blok.content} />
      </div>
      {blok.links_container.map((blok) => (
        <div key={blok._uid}>
          <StoryblokComponent blok={blok} />
        </div>
      ))}
    </section>
  );
};
export default Story;
