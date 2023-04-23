import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import type { TypeLinkContainer } from "~/types";

interface IBackgroundImage {
  id: string;
  alt: string;
  name: string;
  focus: string;
  title: string;
  filename: string;
}

interface Blok {
  blok: {
    _uid: string;
    title: string;
    content: string;
    links_container: Array<TypeLinkContainer>;
    background_image: IBackgroundImage;
  };
}

const Hero = ({ blok }: Blok) => {
  return (
    <>
      <section
        id="hero-container-wrapper"
        className="hero-container"
        {...storyblokEditable(blok)}
        key={blok._uid}
      >
        <div
          id="hero-container"
          className="min-h-[80vh] flex flex-col justify-center items-center"
        >
          <div className="hero-container-content text-white mx-auto flex flex-col justify-center items-center gap-8">
            <div className="text-xl lg:text-2xl mobile-block text-center">
              <span>{blok.title}</span>
            </div>
            {blok.links_container.map((blok) => (
              <div
                key={blok._uid}
                className=""
              >
                <StoryblokComponent blok={blok} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
