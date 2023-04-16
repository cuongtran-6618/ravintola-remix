import type { ISbStoriesParams, StoryblokClient } from "@storyblok/js";
import { storyblokInit, apiPlugin } from "@storyblok/js";
import { json } from "@remix-run/node";
import Page from "~/components/Page";
import Feature from "~/components/Feature";
import Teaser from "~/components/Teaser";
import Grid from "~/components/Grid";

let storyblokInstance: StoryblokClient = null;

const initStoryblok = () => {
  const { storyblokApi } = storyblokInit({
    accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
    use: [apiPlugin],
    components: {
      page: Page,
      teaser: Teaser,
      grid: Grid,
      feature: Feature,
    },
  });

  storyblokInstance = storyblokApi;
};

const getStory = async (slug: string, isDraft: boolean = true) => {
  let sbParams: ISbStoriesParams = {
    version: isDraft ? "draft" : "published",
  };
  console.log(slug);

  let { data } = await storyblokInstance.get(`cdn/stories/${slug}`, sbParams);

  return json(data?.story);
};

export default { initStoryblok, getStory };
