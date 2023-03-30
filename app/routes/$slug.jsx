import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";

export const loader = async ({ params }) => {
  const slug = params.slug ?? "home";

  let sbParams = {
    version: "draft",
  };

  let { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, sbParams);

  return json(data?.story);
};

export default function Menu() {
  let story = useLoaderData();

  story = useStoryblokState(story);
  console.log("from page slug", story.content);
  console.log("-------------------------");
  return <StoryblokComponent blok={story.content} />;
}
