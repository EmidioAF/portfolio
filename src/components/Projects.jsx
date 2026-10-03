import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiJavascript, SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandPowershell } from "react-icons/tb";
import { SiMysql } from "react-icons/si";

const items = [
  {
    icon: TbBrandPowershell,
    iconColor: "#5391fe",
    title: "Scripts de Padronização",
    role: "Automação de TI · PowerShell e Batch",
    dates: "2026",
    summary:
      "Scripts para apoiar a preparação e padronização de computadores Windows, incluindo configuração de energia e uma rotina em batch relacionada a serial e domínio. Repositório privado: a implementação não está disponível publicamente.",
    link: "",
  },
  {
    icon: SiPython,
    iconColor: "#3776ab",
    title: "Conectividade e Sistemas Ciberfísicos",
    role: "Redes · Python e UDP multicast",
    dates: "2026",
    summary:
      "Projetos de conectividade com uma implementação cliente-servidor em Python usando UDP multicast. O repositório também reúne um arquivo de simulação de rede e a documentação do projeto.",
    link: "https://github.com/EmidioAF/Projetos-Conectividade-Sistemas-Ciberfisicos",
  },
  {
    icon: FaJava,
    iconColor: "#e76f00",
    title: "Segurança da Informação",
    role: "Segurança web · Java e HTTPS",
    dates: "2026",
    summary:
      "Projeto de segurança da informação com um servidor HTTPS desenvolvido em Java e uma página HTML para demonstrar a aplicação.",
    link: "https://github.com/EmidioAF/Projeto-Seg.-Informacao",
  },
  {
    icon: SiJavascript,
    iconColor: "#f7df1e",
    title: "TechStore",
    role: "Aplicação web · JavaScript",
    dates: "2026",
    summary:
      "Projeto de loja virtual com frontend desenvolvido com Vite e backend próprio em JavaScript. O repositório separa a interface da camada de servidor e inclui arquivos para dados e uploads.",
    link: "https://github.com/EmidioAF/TechStore",
  },
{
  icon: SiMysql,
  iconColor: "#4479a1",
  title: "The Keep",
  role: "Aplicação web · Python e SQL",
  dates: "2026",
  summary:
    "Aplicação desenvolvida no projeto de Experiência Criativa. O código está organizado em módulos de autenticação, acesso ao banco de dados e rotas, além de incluir esquema SQL, templates e arquivos estáticos.",
  link: "https://github.com/EmidioAF/Projeto-Exp.-Criativa",
},
  {
    icon: SiJavascript,
    iconColor: "#f7df1e",
    title: "Gelo Fino",
    role: "Jogo web · JavaScript",
    dates: "2026",
    summary:
      "Projeto de jogo para navegador desenvolvido em JavaScript, com código da aplicação organizado no diretório thin-ice-pucpr.",
    link: "https://github.com/EmidioAF/Gelo-Fino",
  },
  {
    icon: SiPython,
    iconColor: "#3776ab",
    title: "Batalha Naval 2.0",
    role: "Jogo · Python",
    dates: "2025",
    summary:
      "Segunda versão de um projeto de Batalha Naval em Python, mostrando a evolução de uma implementação anterior publicada no GitHub.",
    link: "https://github.com/EmidioAF/Batalha-Naval-2.0",
  },
];

function ProjectItem({ item }) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;
  return (
    <div
      className="relative flex gap-3 py-2.5 border-b border-white/5 last:border-none"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="w-11 h-11 shrink-0 rounded bg-panel2 border border-line flex items-center justify-center hover:border-white transition-colors">
        <Icon size={20} color={item.iconColor} />
      </div>
      <div>
        {item.link && item.link !== "#" ? (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="text-white text-sm font-bold block hover:underline"
          >
            {item.title}
          </a>
        ) : (
          <b className="text-white text-sm block">{item.title}</b>
        )}
        <div className="text-xs text-dim">{item.role}</div>
        <div className="text-[11px] text-dim mt-0.5">{item.dates}</div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-14 top-full mt-1 w-72 bg-[#1e1e1e] border border-line rounded p-3 text-xs leading-relaxed z-10 overflow-hidden"
          >
            {item.summary}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="bg-panel border border-line rounded-sm p-4 mb-4">
      <h3 className="text-xs text-dim font-semibold border-b border-line pb-2 mb-3">
        Projetos
      </h3>
      {items.map((it, i) => (
        <ProjectItem key={i} item={it} />
      ))}
    </div>
  );
}