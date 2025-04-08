import { config } from "@keystone-next/keystone/schema";
import { createAuth } from "@keystone-next/auth";
import { statelessSessions } from "@keystone-next/keystone/session";
import { lists } from "./schema";

const databaseURL =
  process.env.DATABASE_URL || "mongodb://localhost/sick-fits-keystone";

const sessionConfig = statelessSessions({
  secret: process.env.COOKIE_SECRET || "a-very-secure-secret",
});

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

export default withAuth(
  config({
    db: {
      adapter: "mongoose",
      url: databaseURL,
    },
    lists,
    session: sessionConfig,
    ui: {
      isAccessAllowed: ({ session }: { session?: { data?: any } }) =>
        !!session?.data,
    },
  })
);
