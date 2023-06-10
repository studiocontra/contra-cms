import { buildConfig } from 'payload/config';
import path from 'path';

// import Examples from './collections/Examples';
import Users from './collections/Users';
import Media from './collections/Media';
import Updates from './collections/Updates';
import Team from './collections/Team';
import Projects from './collections/Projects';
import Categories from './collections/Categories';
import Awards from './collections/Awards';
import Pages from './collections/Pages';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL, process.env.PAYLOAD_PUBLIC_SITE_URL],
  csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL, process.env.PAYLOAD_PUBLIC_SITE_URL],
  admin: {
    user: Users.slug,
  },

  collections: [
    Users,
    Media,
    Updates,
    Projects,
    Categories,
    Awards,
    Pages,
    Team
  ],

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },

  localization: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
    fallback: false
  },

  graphQL: {
    disable: true,
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  telemetry: false
})
