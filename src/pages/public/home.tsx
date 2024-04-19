import MaxWidthShell from "@/components/shared/max-width-shell";
import { useTabs } from "@/lib/hooks/useTabs";
import { Framer } from "@/lib/framer";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import About from "@/components/outlets/about";
import Blogs from "@/components/outlets/blogs";
import Play from "@/components/outlets/play";
import Docs from "@/components/outlets/docs";

const Home = () => {
  const [hookProps] = useState({
    tabs: [
      {
        label: "About",
        children: <About />,
        id: "About",
      },
      {
        label: "Blogs",
        children: <Blogs />,
        id: "Blogs",
      },
      {
        label: "Play",
        children: <Play />,
        id: "Play",
      },
      {
        label: "Docs",
        children: <Docs />,
        id: "Docs",
      },
    ],
    initialTabId: "Matches",
  });
  const framer = useTabs(hookProps);

  return (
    <MaxWidthShell className="w-[800px]">
      <Nav />
      <Header />
      <Framer.Tabs {...framer.tabProps} />
      <main className="flex flex-col gap-3 mx-1">
        <div className="pt-10">{framer.selectedTab.children}</div>
      </main>
      <br />
      <Footer />
    </MaxWidthShell>
  );
};

export default Home;
