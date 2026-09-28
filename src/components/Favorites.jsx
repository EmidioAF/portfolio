import { motion } from "framer-motion";
import hsrLogo from "../assets/favorites/hsr.png";
import wuwaLogo from "../assets/favorites/wuwa.png";
import pgrLogo from "../assets/favorites/pgr.png";
import valorantLogo from "../assets/favorites/valorant.png";
import uuLogo from "../assets/favorites/uu.png";


// Para cada item, coloque uma imagem em src/assets/favorites/ e troque
// `cover: null` pelo import correspondente, ex.: cover: capaJogo1
const music = [
  { title: "Artista/música 1", note: "Álbum ou faixa favorita", cover: null },
  { title: "Artista/música 2", note: "Álbum ou faixa favorita", cover: null },
  { title: "Artista/música 3", note: "Álbum ou faixa favorita", cover: null },
  { title: "Artista/música 4", note: "Álbum ou faixa favorita", cover: null },
  { title: "Artista/música 5", note: "Álbum ou faixa favorita", cover: null },
];


const games = [
  { title: "Honkai Star Rail", note: "Himeko main", cover: hsrLogo },
  { title: "Wuthering Waves", note: "Aemeath main", cover: wuwaLogo },
  { title: "Punishing Gray Raven", note: "Alpha main", cover: pgrLogo },
  { title: "Valorant", note: "Omen main", cover: valorantLogo },
  { title: "Unstable Universe SMP", note: "The best Minecraft Series", cover: uuLogo },
];

function Card({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, zIndex: 10 }}
      transition={{ duration: 0.25 }}
      className="relative aspect-[3/4] rounded overflow-hidden bg-panel2 border border-line cursor-default origin-center"
    >
      {item.cover ? (
        <img src={item.cover} alt={item.title} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-dim text-[11px] text-center px-2">
          {item.title}
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-x-0 bottom-0 bg-black/85 p-2"
      >
        <b className="text-white text-xs block leading-tight">{item.title}</b>
        <div className="text-[10px] text-dim mt-1 leading-snug">{item.note}</div>
      </motion.div>
    </motion.div>
  );
}

function Row({ label, items }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="text-[11px] text-dim mb-2">{label}</div>
      <div className="grid grid-cols-4 gap-2">
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
