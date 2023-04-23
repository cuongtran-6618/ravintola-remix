import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "~/styles/tailwind.css";
import Navigations from "./components/Navigations";
import Footer from "./components/Footer";
import SpaceBlock from "./components/SpaceBlock";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "./components/Page";
import Menu from "./components/Menu";
import Meals from "./components/Meals";
import Meal from "./components/Meal";
import Hero from "./components/Hero";
import Story from "./components/Story";
import LinkContainer from "./components/LinkContainer";
import TwoColumnsContainer from "./components/TwoColumnsContainer";
import ImageContainer from "./components/ImageContainer";
import DefaultPage from "./components/DefaultPage";
import List from "./components/List";
import PageTitle from "./components/PageTitle";

/**
 * key have to be the technical name of the block in storyblok
 */
const components = {
  page: Page,
  menu: Menu,
  meals: Meals,
  meal: Meal,
  hero: Hero,
  story: Story,
  link_container: LinkContainer,
  two_columns_container: TwoColumnsContainer,
  image_container: ImageContainer,
  default_page: DefaultPage,
  list: List,
  page_title: PageTitle,
};

storyblokInit({
  accessToken: "bqCnNc085m98VGlPuYaaFgtt",
  use: [apiPlugin],
  components,
});

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-vaalea-roosa">
        <Navigations />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <SpaceBlock />
        <Footer />
      </body>
    </html>
  );
}

