import { CollectionConfig } from "payload/types";
import Projects from "../blocks/Projects";
import Awards from '../blocks/Awards'
import Members from "../blocks/Members";
import Partners from "../blocks/Partners";

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
        Awards,
        Members,
        Partners
      ]
    },
  ]
}

export default Pages