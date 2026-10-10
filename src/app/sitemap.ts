import type { MetadataRoute } from "next";

const base = "https://www.pursemanufacturer.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["","/about-us","/blog","/contact-us","/looking-for-work","/reviews","/services"];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
