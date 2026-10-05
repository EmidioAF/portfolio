import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Para usar sua própria foto/gif, coloque o arquivo em src/assets/avatar/
// e descomente a linha abaixo, apontando pro nome do seu arquivo:
import profileImg from "../assets/avatar/profile.png";

// const profileImg = null; // troque por `profileImg` importado acima

const sobre =
  "Gosto de tecnologia, jogos e música. No tempo livre, costumo jogar alguma coisa, ouvir música e acompanhar uns animes e séries. Também gosto de tentar inovar e sempre estar fazendo algo novo. Trabalho com TI desde 2023 e desde então, venho aprendendo e aprofundando meus conhecimentos."

const projetos = [
  {
    name: "TechStore",
    desc: "E-commerce em React com autenticação e integração de API.",
    link: "#",
  },
  {
    name: "Portfólio",
    desc: "Este site, recriando a estrutura de um perfil Steam.",
    link: "https://github.com/EmidioAF/portifolio",
  },
  // adicione quantos quiser
];

function AvatarDecoration() {
  // Anel decorativo animado, estilo "decoração de avatar" do Discord.
  // Troque o gradiente por outras cores/velocidade à vontade.
  return (
    <motion.div
      className="absolute -inset-1.5 rounded-lg pointer-events-none"
      style={{
        background:
          "conic-gradient(from 0deg, #ffffff, #555555, #ffffff, #555555, #ffffff)",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: "3px",
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />
  );
}

export default function Header() {
const [open, setOpen] = useState(null); // "sobre" | "projetos" | null
const toggle = (key) => setOpen(open === key ? null : key);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex gap-8 items-center flex-wrap mb-6"
    >
      <div className="relative w-32 h-32 shrink-0">
        <AvatarDecoration />
        <div className="relative w-32 h-32 rounded-lg overflow-hidden bg-panel2 border border-line flex items-center justify-center text-3xl font-bold text-white">
          {profileImg ? (
            <img src={profileImg} alt="Kirin" className="w-full h-full object-cover" />
          ) : (
            "K"
          )}
        </div>
      </div>

      <div>
        <h1 className="text-xl font-semibold text-white mb-1">Kirin</h1>
        <p className="text-sm text-dim mb-2">Estudante &amp; Aspirante a Analista/Desenvolvedor</p>
<ul className="text-sm space-y-1">
  {[
    { key: "sobre", label: "SOBRE MIM" },
    { key: "projetos", label: "PROJETOS" },
  ].map(({ key, label }) => (
    <li key={key}>
      <button
        onClick={() => toggle(key)}
        className="flex items-center gap-1.5 hover:text-white transition-colors"
      >
        <motion.span
          animate={{ rotate: open === key ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="inline-block text-[10px]"
        >
          ▸
        </motion.span>
        {label}
      </button>

      <AnimatePresence initial={false}>
        {open === key && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-2 mb-2 max-w-md bg-panel border border-line rounded p-3 text-xs leading-relaxed">
              {key === "sobre" ? (
                <p>{sobre}</p>
              ) : (
                <ul className="space-y-2">
                    {projetos.map((p) => (
                      <li key={p.name}>
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white font-semibold hover:underline"
                        >
                          {p.name}
                        </a>
                        <div className="text-dim">{p.desc}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </li>
      ))}
      </ul>
      </div>
      <div className="ml-auto text-right">
        <span className="inline-block bg-panel2 border border-line text-white px-3.5 py-1 rounded-full text-sm font-semibold">
          Nível 19
        </span>
        <div className="mt-2 text-xs text-dim">
          <b className="block text-green-400 font-semibold text-sm">Disponível</b>
          Aberto a oportunidades
        </div>
      </div>
    </motion.div>
  );
}
