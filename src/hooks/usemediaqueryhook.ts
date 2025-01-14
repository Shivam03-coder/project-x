import { useEffect, useState } from "react";

export const useMediaQueryHook = (query: number) => {
  const [Matches, setMatches] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const Media = window.matchMedia(`(max-width:${query}px)`);
      setMatches(Media.matches);

      const handleResize = () => {
        setMatches(Media.matches);
      };

      Media.addEventListener("change", handleResize);

      return () => {
        Media.removeEventListener("change", handleResize);
      };
    }
  }, [query]);

  return Matches;
};