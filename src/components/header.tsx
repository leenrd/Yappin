import { ModeToggle } from "@/components/themeToggle";
import { Shell } from "lucide-react";
import { useState } from "react";

const Header = () => {
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
    <>
      <nav
        className={`flex items-center justify-between py-3 z-10 sticky top-0 min-w-full backdrop-blur-sm ${
          navbar
            ? "border-b-[.7px] border-b-slate-400 border-opacity-30 "
            : null
        }  mb-5 md:mb-10 `}
      >
        <Shell />
        <ModeToggle />
      </nav>
      <header className="flex flex-col justify-center items-center text-center gap-2 relative mb-12">
        <h2 className="text-3xl font-bold">YAPPIN'</h2>
        <p className="text-base text-slate-400">
          Sandbox for my docs & random ideas
        </p>
      </header>
    </>
  );
};

export default Header;
