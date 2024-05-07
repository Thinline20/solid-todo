import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
import { Lucia } from "lucia";

import { env } from "~/lib/env";
import { db } from "~/server/db";
import { sessions, users } from "~/server/db/schema";

export const lucia = new Lucia(new DrizzleSQLiteAdapter(db, sessions, users), {
  getUserAttributes: (attributes) => {
    return {
      username: attributes.username,
    };
  },
  sessionCookie: {
    attributes: {
      secure: env.NODE_ENV === "production",
    },
  },
});

declare module "lucia" {
  // eslint-disable-next-line no-unused-vars
  interface Register {
    DatabaseUserAttributes: DatabaseUserAttributes;
    Lucia: typeof lucia;
  }
}

type DatabaseUserAttributes = {
  username: string;
};
