import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "t6inkajs",
  dataset: "production",
  useCdn: true,
});
