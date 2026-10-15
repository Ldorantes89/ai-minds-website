import type { MetadataRoute } from "next";

const BASE = "https://ai-minds.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/agents", "/how-it-works", "/pricing", "/about", "/contact"];
  const now = new Date();
  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
