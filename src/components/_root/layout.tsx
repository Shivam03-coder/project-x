import { AppHeader } from "../layout/appheader";
import DashBoardSidebar from "../layout/dashboard";

const UserPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-full w-full">
      <DashBoardSidebar />
      <div className="flex h-full flex-1 flex-col pl-[4.5rem]">
        <AppHeader />
        {children}
      </div>
    </main>
  );
};

export default UserPageLayout;