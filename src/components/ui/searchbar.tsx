import { Input } from "@/components/ui/input";
import { LucideSearch } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="flex w-full max-w-md items-center gap-2.5 px-4 rounded border-2 border-primary bg-white">
      <LucideSearch className="h-5 w-5 text-primary" />
      <Input
        type="text"
        placeholder="Type to search"
        className="w-full   bg-transparent text-xs font-medium text-primary focus:outline-none"
      />
    </div>
  );
};

export default Searchbar;