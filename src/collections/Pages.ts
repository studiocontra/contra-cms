import { CollectionConfig } from "payload/types";
import Projects from "../blocks/Projects";
import Awards from '../blocks/Awards'

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
    {
      name: 'Layout',
      type: 'blocks',
      blocks: [
        Projects,
        Awards
      ]
    },
  ]
}

export default Pages