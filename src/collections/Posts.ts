import { CollectionConfig } from "payload/types";
import Intro from "../blocks/Intro"
import MediaUpdate from "../blocks/MediaUpdate";
import MediaHeadline from "../blocks/MediaHeadline";

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
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [
        MediaHeadline,
        Intro,
        MediaUpdate
      ]
    }
  ]
}

export default Posts