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
    adminThumbnail: ({ doc }) =>
    `https://raw.githubusercontent.com/studiocontra/contra-cms/master/media/${doc.filename}`,
    staticDir: path.resolve(__dirname, '../../media'),
    mimeTypes: ['image/gif', 'image/webp'],
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt text',
      localized: true,
      type: 'text',
      required: true
    }
  ],
}

export default Media