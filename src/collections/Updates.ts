import { CollectionConfig } from "payload/types";

import formatSlug from "../hooks/formatSlug";

import Intro from "../blocks/Intro"
import MediaUpdate from "../blocks/MediaUpdate";
import MediaHeadline from "../blocks/MediaHeadline";
import Content from "../blocks/Content";

const Updates: CollectionConfig = {
  slug: 'updates',
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
      name: 'thumbnail',
      label: 'Thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [
        MediaHeadline,
        Intro,
        MediaUpdate,
        Content
      ]
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      localized: true,
      unique: true,
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
      name: 'status',
      type: 'select',
      required: true,
      options: [
        'draft',
        'publish'
      ],
      admin: {
        position: "sidebar"
      }
    },
    
  ]
}

export default Updates