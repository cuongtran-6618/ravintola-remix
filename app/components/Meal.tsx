import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { TypeImageAsset } from "~/types";

interface Blok {
  blok: {
    _uid: string;
    ingredient: string;
    chili_level: Array<TypeImageAsset>;
    description: string;
    price: number;
    currency: string;
  };
}

const Meal = ({ blok }: Blok) => {
  return (
    <main {...storyblokEditable(blok)} key={blok._uid}>
      <div className="container text-center mx-auto mb-8">
        <div className="my-4 mx-auto flex flex-row justify-center gap-1">
          <strong>{blok.ingredient}</strong>
          {blok.chili_level.map((nestedBlok) => (
            <img
              src={nestedBlok.filename}
              alt={nestedBlok.alt}
              title={nestedBlok.title}
              width="16px"
            />
          ))}
        </div>
        <div className="my-4 mx-auto color-hiekka">{blok.description}</div>
        <div className="my-4 mx-auto">
          <strong>
            {blok.price} {blok.currency}
          </strong>
        </div>
      </div>
    </main>
  );
};

export default Meal;
