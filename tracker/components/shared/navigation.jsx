import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  const routes = ["Dashboard", "Customers", "Orders", "Expenses"];

  return (
    <nav>
      {routes.map(nav => {
        return <Link href={nav === "Dashboard" ? "/" : nav}>{nav}</Link>;
      })}
    </nav>
  );
};

export default Navigation;
