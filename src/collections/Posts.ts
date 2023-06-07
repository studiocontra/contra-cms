import { CollectionConfig } from "payload/types";

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: [
      'title',
      'publishDate',
      'status'
    ]
  },

}