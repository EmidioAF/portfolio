import Header from "./components/Header";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import TechStack from "./components/TechStack";
import Summary from "./components/Summary";
import Stats from "./components/Stats";
import Favorites from "./components/Favorites";
import DecorFrame from "./components/DecorFrame";

export default function App() {
  return (
    <div className="relative w-full">
      <DecorFrame />
      <div className="max-w-[1000px] mx-auto px-4 py-6 pb-16">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-5">
          <div>
            <Experience />
            <Certifications />
            <Favorites />
          </div>
          <div>
            <TechStack />
            <Summary />
            <Stats />
          </div>
        </div>
        <footer className="text-center text-dim text-xs mt-8">
          Portfólio — layout inspirado em Steam Profile
        </footer>
      </div>
    </div>
  );
}
