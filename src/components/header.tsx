import { ModeToggle } from "@/components/themeToggle";

const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between py-3 sticky top-0 min-w-full border-b-[.7px] border-b-slate-400 border-opacity-30 backdrop-blur-sm  mb-5 md:mb-10 ">
        <h1 className="text-2xl font-bold">YAPPIN'</h1>
        <ModeToggle />
      </nav>
      <header className="flex flex-col justify-center items-center text-center gap-2">
        <h2 className="text-3xl font-semibold">Blog</h2>
        <p className="text-base text-slate-400">
          Sandbox of my docs & random ideas
        </p>
      </header>
    </>
  );
};

export default Header;
