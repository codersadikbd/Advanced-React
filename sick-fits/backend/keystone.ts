import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';

const databaseURL =
  process.env.databaseURL ||
  'mongodb+srv://sicksadik:Sadik@2000@sickclusersadik.yaxqrtu.mongodb.net/?retryWrites=true&w=majority&appName=SickCluserSadik';
export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
  },
  lists: createSchema({
    // Schema items go here
  }),
  ui: {
    isAccessAllowed: () => true,
  },
});
