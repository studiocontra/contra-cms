import { CollectionConfig } from "payload/types";
import path from 'path'

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true
  },
  admin: {
    useAsTitle: 'filename',
    group: 'Media'
  },
  upload: {
    adminThumbnail: 'thumbnail',
    staticDir: path.resolve(__dirname, '../../media'),
    mimeTypes: ['image/avif', 'image/gif'],
    imageSizes: [
      {
        name: 'mobile',
        width: 480,
        height: undefined,
      },
      {
        name: 'tablet',
        width: 768,
        height: undefined,
      },
      {
        name: 'netbook',
        width: 1024,
        height: undefined,
      },
      {
        name: 'desktop',
        width: 1440,
        height: undefined
      }
    ],
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt text',
      localized: true,
      type: 'text',
      required: true
    }
  ]
}

export default Media