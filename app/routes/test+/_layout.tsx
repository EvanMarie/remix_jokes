import { Outlet } from "@remix-run/react";

export default function TestrouteRoute() {
  return (
    <div>
      <h1>Heading on _layout.tsx</h1>
      <main>
        <p>Text above the Outlet on _layout.tsx in the test+ folder</p>
        <Outlet />
      </main>
    </div>
  );
}
