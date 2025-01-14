import { LucideIcon } from "lucide-react";

export type setActiveComponentProps = {
  setActiveComponent: (ActiveComponent: string) => void;
};

export type AuthHeaderProps = {
  title?: string;
  desc?: string;
};

export interface CarouselimageDataType {
  id: number;
  img: string;
  heading: string;
  descr: string;
}

export interface SidebarLinksDataType {
  id: number;
  href?: string;
  icons: LucideIcon;
}

export type TaskType = {
  TaskID: number;
  TaskName: string;
  StartDate: Date;
  EndDate: Date;
  Duration: number;
  Progress: number;
  SubTasks?: Task[];
};


export interface IcardData {
  id: number;
  title: string;
  status: string;
  statusColor: string;
  statusTextColor: string;
  icon: string;
  bookmark: boolean;
  priority: string;
  notifications: number;
  taskCode: string;
  assigneeInitials: string;
  assigneeStatus: string;
}