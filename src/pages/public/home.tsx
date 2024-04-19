import BlogItem from "@/components/blog-item";
import MaxWidthShell from "@/components/shared/max-width-shell";
import useTabs from "@/lib/hooks/useTabs";
import { Framer } from "@/lib/framer";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Nav from "@/components/nav";

const Home = () => {
  const [hookProps] = useState({
    tabs: [
      {
        label: "About",
        id: "About",
      },
      {
        label: "Blogs",
        id: "Blogs",
      },
      {
        label: "Play",
        id: "Play",
      },
      {
        label: "Docs",
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
        {/* dummy */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((_, index) => (
          <BlogItem key={index} />
        ))}
      </main>
      <br />
      <Footer />
    </MaxWidthShell>
  );
};

export default Home;
