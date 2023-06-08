import Header from "./components/Header";
import Tips from "./components/Tips";
import Results from "./components/Results";
import { TipsProvider } from "./context/TipsContext";

function App() {
  return (
    <main className="bg-light-grayish-cyan w-full md:h-screen container mx-auto flex flex-col justify-center items-center">
      <Header />
      <section className="bg-white w-full rounded-tl-3xl rounded-tr-3xl p-6">
        <TipsProvider>
          <Tips />
          <Results />
        </TipsProvider>
      </section>
    </main>
  );
}

export default App;
