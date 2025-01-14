"use client";

import { SidebarLinksData } from "@/data";
import Link from "next/link";
import React, { useState } from "react";

const DashBoardSidebar = () => {
  const [ActiveLink, setActiveLink] = useState(0);
  return (
    <aside className="fixed h-[100%] min-w-[4.5rem] bg-primary">
      <div className="relative top-[10rem] flex flex-col items-center justify-center space-y-3">
        {SidebarLinksData.map(({ id, icons: Icon, href }) => (
          <Link
            href={href as string}
            key={id}
            onClick={() => setActiveLink(id)}
            className={`${ActiveLink === id ? "border-2 border-white bg-secondary" : "text-secondary"} flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl`}
          >
            <Icon className="h-6 w-6" />
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default DashBoardSidebar;
