import { createMiddleware } from "@solidjs/start/middleware";
import {} from "@solidjs/start/server";
import { verifyRequestOrigin } from "lucia";
import { appendHeader, getCookie, getHeader } from "vinxi/http";

import { lucia } from "./server/auth";

export default createMiddleware({
  onRequest: [
    async (event) => {
      if (event.request.method !== "GET") {
        const originHeader = getHeader(event.nativeEvent, "Origin");
        const hostHeader = getHeader(event.nativeEvent, "Host");

        if (
          !originHeader ||
          !hostHeader ||
          !verifyRequestOrigin(originHeader, [hostHeader])
        ) {
          return new Response("Unauthorized", { status: 403 });
        }
      }

      const sessionId = getCookie(event.nativeEvent, lucia.sessionCookieName);

      if (!sessionId) {
        event.locals.session = null;
        event.locals.user = null;
      }

      const { session, user } = await lucia.validateSession(sessionId);

      if (session?.fresh) {
        appendHeader(
          event.nativeEvent,
          "Set-Cookie",
          lucia.createSessionCookie(session.id).serialize(),
        );
      }

      if (!session) {
        appendHeader(
          event.nativeEvent,
          "Set-Cookie",
          lucia.createBlankSessionCookie().serialize(),
        );
      }

      event.locals.session = session;
      event.locals.user = user;
    },
  ],
});

declare module "@solidjs/start/server" {
  // eslint-disable-next-line no-unused-vars
  interface RequestEventLocals {
    session: import("lucia").Session | null;
    user: import("lucia").User | null;
  }
}
