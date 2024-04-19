import { ModeToggle } from "@/components/themeToggle";
import { useState } from "react";
import { Shell } from "lucide-react";

const Nav = () => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const changeStyle = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeStyle);
  return (
    <nav
      className={`flex items-center justify-between py-3 z-10 sticky top-0 min-w-full backdrop-blur-sm ${
        navbar ? "border-b-[.7px] border-b-slate-400 border-opacity-30 " : null
      }  mb-5 md:mb-10 `}
    >
      <Shell />
      <ModeToggle />
    </nav>
  );
};

export default Nav;
