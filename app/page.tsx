/** @format */

import { getUserSession } from "@/lib/session";

export default async function Home() {
  const user = await getUserSession();
  return (
    <main className="">
      <h3>User:</h3>
      <h6>{JSON.stringify(user)}</h6>
    </main>
  );
}
