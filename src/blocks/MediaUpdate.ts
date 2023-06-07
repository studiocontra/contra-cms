import { Block } from "payload/types";

const MediaUpdate: Block = {
  slug: 'mediaUpdate',
  labels: {
    singular: 'Media Update Block',
    plural: 'Media Update Blocks'
  },
  fields: [
    {
      name: 'media',
      label: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
      },
    },
  ]
}

export default MediaUpdate