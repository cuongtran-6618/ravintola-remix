import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

interface Blok {
  blok: {
    _uid: string;
    ingredient: string;
    chili_level: number;
    description: string;
    price: number;
    currency: string;
  };
}

const Meal = ({ blok }: Blok) => {
  return (
    <main {...storyblokEditable(blok)} key={blok._uid}>
      <div>{blok.ingredient}</div>
      <div>{blok.chili_level}</div>
      <div>{blok.description}</div>
      <div>{blok.price}</div>
      <div>{blok.currency}</div>
    </main>
  );
};
export default Meal;
