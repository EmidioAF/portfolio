import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import TechStack from "./components/TechStack";
import Summary from "./components/Summary";
import Stats from "./components/Stats";
import Favorites from "./components/Favorites";
import DecorFrame from "./components/DecorFrame";

export default function App() {
  return (
    <div className="w-full">
      <div className="flex items-start w-full max-w-[1320px] mx-auto">
        <DecorFrame />
        <div className="flex-1 min-w-0 max-w-[1000px] px-4 py-6 pb-16">
          <Header />
          <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-5">
            <div>
              <Projects />
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
    </div>
  );
}