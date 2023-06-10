import { CollectionConfig } from "payload/types";
import Projects from "../blocks/Projects";
import Awards from '../blocks/Awards'
import Members from "../blocks/Members";
import Partners from "../blocks/Partners";
import Services from "../blocks/Services";
import HeadlineContent from "../blocks/HeadlineContent";
import Content from "../blocks/Content";
import List from "../blocks/List";

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
      label: 'Title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'intro',
      label: 'Intro',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      name: 'Layout',
      type: 'blocks',
      blocks: [
        HeadlineContent,
        Content,
        List,
        Projects,
        Awards,
        Members,
        Partners,
        Services,
      ]
    },
  ]
}

export default Pages