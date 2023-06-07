import { Block } from "payload/types";

const Intro: Block = {
  slug: 'intro',
  labels: {
    singular: 'Intro Block',
    plural: 'Intro Blocks',
  },
  fields: [
    {
      name: 'paragraph',
      type: 'textarea',
      localized: true,
      required: true
    }
  ]
}

export default Intro