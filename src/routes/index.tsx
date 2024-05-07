import { cache, createAsync } from "@solidjs/router";
import { For } from "solid-js";

import { Layout } from "~/layouts/layout";
import { db } from "~/server/db";

const getUsers = cache(async () => {
  "use server";
  return await db.query.users.findMany();
}, "users");

export const route = {
  load: () => getUsers(),
};

export default function Home() {
  const users = createAsync(() => getUsers());

  return (
    <Layout>
      <main class="container">
        <div>Hello</div>
        <For each={users()}>
          {(user) => (
            <div>
              <div>{user.id}</div>
              <div>{user.username}</div>
            </div>
          )}
        </For>
      </main>
    </Layout>
  );
}
