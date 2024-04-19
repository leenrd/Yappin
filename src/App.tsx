import BlogItem from "./components/blog-item";
import Footer from "./components/footer";
import Header from "./components/header";
import MaxWidthShell from "./components/shared/max-width-shell";
import useTabs from "@/lib/hooks/useTabs";
import { Framer } from "@/lib/framer";
import { useState } from "react";

function App() {
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
        label: "Work",
        id: "Work",
      },
    ],
    initialTabId: "Matches",
  });
  const framer = useTabs(hookProps);

  return (
    <MaxWidthShell className="w-[800px]">
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
}

export default App;
