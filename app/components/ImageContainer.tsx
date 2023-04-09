import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const ImageContainer = ({ blok }: Blok) => {
  console.log(blok);
  return (
    <>
      <img
        {...storyblokEditable(blok)}
        key={blok.image._uid}
        title={blok.image.title}
        src={blok.image.filename}
      />
    </>
  );
};
export default ImageContainer;
