import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import SectionHeader from "./SectionHeader";
import type { TypeLinkContainer } from "~/types";
import type { TypeStory } from "~/types";
import Markdoc from "@markdoc/markdoc";
import Markdown from "./Markdown";

const Story = ({ blok }: TypeStory) => {
  let styleClass = "container mx-auto text-xl mb-36 lg:text-xl lg:max-w-4xl ";
  styleClass += blok.styleClass;

  return (
    <section
      {...storyblokEditable(blok)}
      key={blok._uid}
      className={styleClass}
    >
      <SectionHeader title={blok.title} />
      <Markdown markdown={blok.content} />
      {blok.links_container.map((blok) => (
        <div key={blok._uid}>
          <StoryblokComponent blok={blok} />
        </div>
      ))}
    </section>
  );
};
export default Story;
