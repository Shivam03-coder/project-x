"use client";
import { useMediaQueryHook } from "@/hooks/usemediaqueryhook";
import { Bell, Plus } from "lucide-react";
import Image from "next/image";
import { ProfileAvatar } from "../shared/profile-avatra";
import Searchbar from "../ui/searchbar";

export const AppHeader = () => {
  const isTabView = useMediaQueryHook(1224);

  return (
    <nav className="flex h-[6.75rem] w-full items-center justify-between px-[2.3rem]">
      <div className="inline-flex h-12 items-center justify-start gap-12">
        <div className="flex items-center justify-start gap-[54px]">
          <Image src={"/Logo.png"} alt="Logo" width={186.6} height={35.32} />
        </div>
        {isTabView ? (
          <Searchbar />
        ) : (
          <button className="flex h-12 min-w-[10.25rem] items-center justify-center gap-[3.375rem] rounded border-2 border-primary px-[2.9375rem] py-2">
            <div className="flex items-center justify-center gap-2">
              <div className="text-center font-inter text-base font-medium leading-tight text-primary">
                Create New
              </div>
              <div className="relative h-5 w-5">
                <Plus className="absolute left-0 top-0 h-5 w-5" />
              </div>
            </div>
          </button>
        )}
      </div>
      <div className="inline-flex h-[0.5625rem] w-[10.17rem] items-center justify-end gap-[2.29rem] pl-[1rem]">
        <button className="relative w-[2rem] p-2">
          <Bell className="h-[1.4375rem] w-[1.4375rem]" />
          <div className="absolute right-[-0.5rem] top-[-0.5rem] rounded-full bg-primary px-2 py-1 text-center font-inter text-[0.6875rem] font-bold text-white">
            6
          </div>
        </button>
        <ProfileAvatar />
      </div>
    </nav>
  );
};