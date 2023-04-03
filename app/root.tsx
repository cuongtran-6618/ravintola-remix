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
import Feature from "./components/Feature";
import Grid from "./components/Grid";
import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Menu from "./components/Menu";
import Meals from "./components/Meals";
import Meal from "./components/Meal";
import Hero from "./components/Hero";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  menu: Menu,
  meals: Meals,
  meal: Meal,
  hero: Hero,
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

