import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
  return (
    <div>
      Text in index.tsx inside the test+folder, rendering through the Outlet of
      root.tsx.
    </div>
  );
}
