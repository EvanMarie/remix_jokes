import { Outlet } from "@remix-run/react";

export default function TestchildRoute() {
  return (
    <div>
      <h1>Heading on _layout.tsx (test+/testchild+/) above its outlet.</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
