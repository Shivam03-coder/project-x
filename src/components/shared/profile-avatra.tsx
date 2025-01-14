"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import AvatarCircles from "../ui/avatar-circles";

export const ProfileAvatar = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          <AvatarImage
            className="h-6 cursor-pointer rounded-full align-super"
            src="/profile.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>
        <AvatarPopOverContent />
      </PopoverContent>
    </Popover>
  );
};

const AvatarPopOverContent = () => {
  return (
    <div className="inline-flex min-h-[358px] w-full flex-col items-end justify-start gap-0.5 rounded border-2 border-primary bg-white py-2">
      <AvatarPopOverLinks
        href="/user-profile/profile-settings"
        label="Profile Settings"
      />
      <AvatarPopOverLinks
        href="/user-profile/account-settings"
        label="Account Settings"
      />
      <AvatarPopOverLinks href="/user-profile/upgrade-plans" label="Upgrade" />
      <AvatarPopOverLinks href="" label="Referrals" />
      <AvatarPopOverLinks href="" label="Raise a Service Request" />
      <AvatarPopOverLinks href="" label="Support" />
      <AvatarPopOverLinks href="" label="Explore Apps" />
      <AvatarPopOverLinks label="Sign Out" />
    </div>
  );
};

const AvatarPopOverLinks = ({
  label,
  href,
}: {
  label: string;
  href?: string;
}) => {
  return href ? (
    <Link
      href={href}
      className="mx-auto flex min-w-60 items-center rounded-xl bg-white px-4 py-3 hover:bg-secondary"
    >
      <div className="flex h-5 shrink grow basis-0 items-center justify-between">
        <div className="font-inter text-base font-medium leading-tight text-primary">
          {label}
        </div>
        <ChevronRight className="size-4 text-primary" />
      </div>
    </Link>
  ) : (
    <div className="mx-auto flex min-w-60 cursor-default items-center rounded-xl bg-white px-4 py-3">
      <div className="flex h-5 shrink grow basis-0 items-center justify-between">
        <div className="font-inter text-base font-medium leading-tight text-primary">
          {label}
        </div>
      </div>
    </div>
  );
};

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/1",
  "https://avatars.githubusercontent.com/u/2",
  "https://avatars.githubusercontent.com/u/3",
  "https://avatars.githubusercontent.com/u/4",
];

export const AvatarGroups = () => {
  // @ts-ignore
  return <AvatarCircles numPeople={4} avatarUrls={avatarUrls} />;
};
