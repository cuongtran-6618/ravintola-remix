import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const ImageContainer = ({ blok }: Blok) => {
  return (
    <div>
      <img
        {...storyblokEditable(blok)}
        key={blok.image._uid}
        title={blok.image.title}
        src={blok.image.filename}
        className="mx-auto"
      />
    </div>
  );
};
export default ImageContainer;
