import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const PageTitle = ({ blok }: Blok) => {
  return (
    <>
      <h1 className="mx-auto my-32 text-2xl md:text-4xl text-center">
        <strong>{blok.title}</strong>
      </h1>
    </>
  );
};
export default PageTitle;
