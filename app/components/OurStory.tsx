import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const OurStory = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default OurStory;
