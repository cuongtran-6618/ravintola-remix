import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const List = ({ blok }) => {
  return (
    <ul
      {...storyblokEditable(blok)}
      className="mx-auto container grid grid-cols-1 justify-self-auto justify-items-center justify-evenly items-center md:grid-cols-3 gap-4 list-container"
    >
      {blok.columns.map((blok) => (
        <li key={blok._uid}>
          <StoryblokComponent blok={blok} />
        </li>
      ))}
    </ul>
  );
};

export default List;
