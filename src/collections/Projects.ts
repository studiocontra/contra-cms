import { CollectionConfig } from "payload/types";

import HeroProject from '../blocks/HeroProject'
import Media from '../blocks/Media'

import link from '../fields/link'

import formatSlug from "../hooks/formatSlug";

const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title'
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar'
      },
      hooks: {
        beforeValidate: [
          formatSlug('title')
        ]
      }
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar'
      }
    },
    {
      name: 'link',
      label: 'Project link',
      type: 'group',
      fields: [
        link
      ],
      admin: {
        position: 'sidebar'
      }
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true
    },
    {
      name: 'extract',
      type: 'textarea',
      label: 'Extracto',
      localized: true,
      required: true,
    },
    {
      name: 'width',
      label: 'Image width',
      type: 'select',
      options: [
        {
          label: 'Half',
          value: 'half',
        },
        {
          label: 'Full Width',
          value: 'full',
        },
      ],
      admin: {
        condition: (data, { featured }) => Boolean(featured),
      },
    },
    {
      name: 'preview',
      label: 'Preview image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (data, { featured }) => Boolean(featured),
      },
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      required: true,
    },
    {
      name: 'images',
      label: 'Slider',
      type: 'array',
      fields: [
        {
          name: 'image',
          label: 'Slide',
          type: 'upload',
          relationTo: 'media'
        }
      ],
      admin: {
        condition: (data, { featured }) => Boolean(!featured),
      },
    },
    {
      name: 'projectContent',
      type: 'group',
      label: 'Project Content',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [
            HeroProject,
            Media,
          ]
        }
      ],
      admin: {
        condition: (data, { featured }) => Boolean(featured),
      },
    },
  ]
}

export default Projects