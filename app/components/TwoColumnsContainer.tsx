import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const TwoColumnsContainer = ({ blok }) => {
  console.log(blok);
  return (
    <div
      {...storyblokEditable(blok)}
      className="grid grid-cols-1 md:grid-cols-2"
    >
      {blok.body.map((blok) => (
        <div key={blok._uid} className="">
          <StoryblokComponent blok={blok} />
        </div>
      ))}
    </div>
  );
};

export default TwoColumnsContainer;
