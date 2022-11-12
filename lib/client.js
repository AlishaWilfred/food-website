import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "nyqomm9a",
  dataset: "production",
  apiVersion: "2022-10-11",
  useCdn: true,
  token:
    "skh48tfF3eELxe2GJF0GlYrDa1WP8jO27GXduY51ItUJGWB8bTEqdXgBVK470NpsAnXDeD9WyUHYIvZtmXph85kenPFqZEkEu7JqKuyOqoYEh8TJTqxH8MdVhYS7clb3Unkr4Z2hGRVLzKqIilZ5pvqNdmWHZ7hg0QXr9ifZUHKQnIn1H7D8",
});

const builder= ImageUrlBuilder(client)

export const urlFor=(source)=>builder.image(source)