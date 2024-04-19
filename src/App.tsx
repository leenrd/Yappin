import Header from "./components/header";
import MaxWidthShell from "./components/shared/max-width-shell";

function App() {
  return (
    <MaxWidthShell className="w-[800px]">
      <main>
        <Header />
      </main>
    </MaxWidthShell>
  );
}

export default App;
