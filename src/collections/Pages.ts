import { CollectionConfig } from "payload/types";
import Projects from "../blocks/Projects";

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'Layout',
      type: 'blocks',
      blocks: [
        Projects
      ]
    },
  ]
}

export default Pages