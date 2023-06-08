import { CollectionConfig } from "payload/types";

const Platforms: CollectionConfig = {
  slug: 'platforms',
  admin: {
    useAsTitle: 'name',
    hidden: true
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text'
    }
  ]
}

export default Platforms