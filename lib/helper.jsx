import { usePathname } from "next/navigation";

export function useActivePath(path) {
  const pathName = usePathname();

  const checkActivePath = (path) => {
    if (path === "/" && pathName !== path) {
      return false;
    }
    return pathName.startsWith(path);
  };

  return checkActivePath;
}
