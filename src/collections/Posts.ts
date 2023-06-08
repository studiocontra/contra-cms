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
      admin: {
        position: "sidebar",
        readOnly: true
      },
      hooks: {
        beforeValidate: [
          ({ req: { payload }, data }) => {
              if (payload) {
                  return formatSlug(data.title)
              }
          },
      ],
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