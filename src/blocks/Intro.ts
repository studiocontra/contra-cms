import { Block } from "payload/types";

const Intro: Block = {
  slug: 'intro',
  labels: {
    singular: 'Intro',
    plural: 'Intro Blocks',
  },
  fields: [
    {
      name: 'intro',
      label: 'Intro',
      type: 'richText',
      localized: true,
      required: true,
      admin: {
        elements: [
          'link',
        ]
      }
    }
  ]
}

export default Intro