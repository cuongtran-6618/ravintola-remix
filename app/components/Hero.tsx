import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import LinkContainer from "./LinkContainer";
import { TypeLinkContainer } from "~/types";

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
  //console.log(blok);
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
          <div className="hero-container-content text-white mx-auto flex flex-col justify-center items-center">
            <span className="text-xl lg:text-2xl mobile-block text-center">
              {blok.title}
            </span>
            {blok.links_container.map((blok) => (
              <div key={blok._uid}>
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
