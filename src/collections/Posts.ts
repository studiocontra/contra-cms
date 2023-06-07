import { CollectionConfig } from "payload/types";
import Headline from "../blocks/Headline";
import Intro from "../blocks/Intro"

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
        Headline,
        Intro
      ]
    }
  ]
}

export default Posts