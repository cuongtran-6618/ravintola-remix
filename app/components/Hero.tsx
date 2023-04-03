import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import LinkAsButton from "./LinkAsButton";

interface IButton {
  id: string;
  url: string;
  linktype: string;
  fieldtype: string;
  cached_url: string;
}

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
    book_button: IButton;
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
          <div className="hero-container-content text-white mx-auto flex flex-col justify-center items-center">
            <span className="text-xl lg:text-2xl mobile-block text-center">
              {blok.title}
            </span>
            <LinkAsButton blok={blok.book_button} />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
