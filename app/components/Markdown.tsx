import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Markdoc from "@markdoc/markdoc";

const Markdown = ({ markdown }: string) => {
  const content = Markdoc.renderers.html(
    Markdoc.transform(Markdoc.parse(markdown))
  );

  return (
    <div
      className="mobile-block leading-8"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default Markdown;
