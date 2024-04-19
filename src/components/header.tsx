import MaxWidthShell from "./shared/max-width-shell";

const Header = () => {
  return (
    <MaxWidthShell>
      <header className="flex flex-col justify-center items-center text-center gap-2 relative mb-12">
        <h2 className="text-3xl font-bold">YAPPIN'</h2>
        <p className="text-base text-foreground">
          Sandbox for my docs & random ideas
        </p>
      </header>
    </MaxWidthShell>
  );
};

export default Header;
