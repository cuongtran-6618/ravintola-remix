import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { TypeMeals } from "~/types";

const Meals = ({ blok }: TypeMeals) => {
  return (
    <main
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="container text-center mx-auto"
    >
      <div className="mx-auto my-32 text-2xl md:text-4xl">
        <h1>
          <strong>{blok.title}</strong>
        </h1>
      </div>
      <div className="mx-auto my-4 color-black-truffle">{blok.description}</div>
      {blok.ingradients.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Meals;
