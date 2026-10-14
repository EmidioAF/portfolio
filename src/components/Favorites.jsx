import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hsrLogo from "../assets/favorites/hsr.png";
import wuwaLogo from "../assets/favorites/wuwa.png";
import valorantLogo from "../assets/favorites/val.png";
import unstableSmpLogo from "../assets/favorites/unstable.png";
import anime86Logo from "../assets/favorites/86.png";
import madeInAbyssLogo from "../assets/favorites/madeinabyss.png";
import jojoLogo from "../assets/favorites/jojo.png";
import pgrLogo from "../assets/favorites/pgr.png";

import chokeholdCover from "../assets/favorites/st.png";
import summoningCover from "../assets/favorites/st.png";
import apparitionCover from "../assets/favorites/st.png";
import dragPathCover from "../assets/favorites/dragpath.png";
import lillithCover from "../assets/favorites/kamaitachi.png";
import olhosCarmesinCover from "../assets/favorites/alec1.png";
import cansacoCover from "../assets/favorites/alec2.png";
import personaCover from "../assets/favorites/persona.png";

const games = [
  { title: "Honkai Star Rail", note: "Himeko main", cover: hsrLogo },
  { title: "Wuthering Waves", note: "Aemeath main", cover: wuwaLogo },
  { title: "Valorant", note: "Omen main", cover: valorantLogo },
  { title: "Unstable SMP", note: "Série de Minecraft scriptada do YouTube", cover: unstableSmpLogo },
  { title: "86", note: "Anime favorito", cover: anime86Logo },
  { title: "Made in Abyss", note: "Anime favorito", cover: madeInAbyssLogo },
  { title: "JoJo's Bizarre Adventure", note: "Anime favorito", cover: jojoLogo },
  { title: "Punishig Gray Raven", note: "Alpha main", cover: pgrLogo },
];

const music = [
  { title: "Chokehold", note: "Sleep Token", cover: chokeholdCover },
  { title: "The Summoning", note: "Sleep Token", cover: summoningCover },
  { title: "The Apparition", note: "Sleep Token", cover: apparitionCover },
  { title: "Drag Path", note: "Twenty One Pilots", cover: dragPathCover },
  { title: "Lillith", note: "Kamaitachi", cover: lillithCover },
  { title: "Olhos Carmesin", note: "Alec'", cover: olhosCarmesinCover },
  { title: "Cansaço", note: "Alec'", cover: cansacoCover },
  { title: "It's Going Down Now", note: "Persona 3", cover: personaCover },
];

function Card({ item }) {
  const [hovered, setHovered] = useState(false); // só mouse
  const [pinned, setPinned] = useState(false); // clique/toque
  const open = hovered || pinned;

  const toggle = () => {
    if (pinned) {
      setPinned(false);
      setHovered(false); // recolhe mesmo com o mouse em cima
    } else {
      setPinned(true);
    }
  };

  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={toggle}
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setHovered(false)}
      className="text-left rounded overflow-hidden bg-panel2 border border-line hover:border-white focus-visible:border-white outline-none transition-colors"
    >
      <div className="flex items-start gap-2 p-2.5">
        <div className="min-w-0 flex-1">
          <b className="text-white text-sm block leading-tight">{item.title}</b>
          <div className="text-xs text-dim mt-1 leading-snug">{item.note}</div>
        </div>
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[10px] text-dim mt-0.5"
        >
          ▸
        </motion.span>
      </div>
      <AnimatePresence initial={false}>
        {open && item.cover && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <img
              src={item.cover}
              alt={item.title}
              loading="lazy"
              className="w-full aspect-[2/3] object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

function Row({ label, items }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="text-[11px] text-dim mb-2">{label}</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 items-start">
        {items.map((it) => (
          <Card key={it.title} item={it} />
        ))}
      </div>
    </div>
  );
}

export default function Favorites() {
  return (
    <div className="bg-panel border border-line rounded-sm p-4 mb-4">
      <h3 className="text-xs text-dim font-semibold border-b border-line pb-2 mb-3">
        Favoritos
      </h3>
      <Row label="Jogos e Séries" items={games} />
      <Row label="Músicas" items={music} />
    </div>
  );
}