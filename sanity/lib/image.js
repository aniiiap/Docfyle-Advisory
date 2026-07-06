import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./client";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "ta4n89y3",
  dataset: dataset || "production",
});

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto("format").fit("max").url();
};
