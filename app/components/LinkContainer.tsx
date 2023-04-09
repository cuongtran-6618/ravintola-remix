import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { TypeLinkAsButton, styleButton } from "~/types";

const LinkContainer = ({ blok }: TypeLinkAsButton) => {
  let style = "py-4 px-8 color-tumma-roosa bg-white max-w-[200px] my-8";
  if (
    blok !== undefined &&
    blok.hasOwnProperty("style") &&
    blok.style[0] === styleButton.SecondaryButton
  ) {
    style =
      "lg:mx-auto bg-none border-solid border-2 border-black my-8 py-4 px-8 lg:max-w-[400px]";
  }

  return (
    <div className="mx-auto text-center">
      <a
        {...storyblokEditable(blok)}
        key={blok.link.key}
        href={blok.link.href}
        alt={blok.title}
        className={style}
      >
        {blok.title}
      </a>
    </div>
  );
};

export default LinkContainer;
