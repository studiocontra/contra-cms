import { CollectionConfig } from "payload/types";

import formatSlug from "../hooks/formatSlug";

import Intro from "../blocks/Intro"
import MediaUpdate from "../blocks/MediaUpdate";
import MediaHeadline from "../blocks/MediaHeadline";
import Content from "../blocks/Content";

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: [
      'title',
      'slug',
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
      localized: true,
      required: true
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        position: "sidebar"
      },
      hooks: {
        beforeValidate: [
          formatSlug('title')
        ]
      }
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 3,
      blocks: [
        MediaHeadline,
        Intro,
        MediaUpdate,
        Content
      ]
    },
    
  ]
}

export default Posts