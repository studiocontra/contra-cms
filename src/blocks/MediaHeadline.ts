import { Block } from "payload/types";

const MediaHeadline: Block = {
  slug: 'mediaHeadline',
  labels: {
    singular: 'Media Headline Block',
    plural: 'Media Headline Blocks'
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

export default MediaHeadline