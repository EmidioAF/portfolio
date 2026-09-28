import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cpmprLogo from "../assets/logos/cpmpr.png";
import pucprLogo from "../assets/logos/pucpr.png";
import ufprLogo from "../assets/logos/ufpr.png";
import asppLogo from "../assets/logos/aspp.png";
import compasaLogo from "../assets/logos/compasa.png";

const items = [
  {
    logo: "EM",
    logoImg: cpmprLogo,
    title: "Estudante Ensino Fundamental II e Médio",
    role: "Colégio da Polícia Militar do Paraná (CPM-PR)",
    dates: "2018 — 2024",
    summary:
      "Conclusão do Ensino Fundamental II e Médio. Ética, conduta, disciplina e responsabilidade.",
  },
  {
    logo: "EM",
    logoImg: pucprLogo,
    title: "Estudante Bacharelado em Sistemas de Informação",
    role: "Pontifícia Universidade Católica do Paraná (PUCPR)",
    dates: "2025 — 2026",
    summary:
      "Cursei até o 4° Período, me transferindo para a UFPR ao final de 2026. Adquiri conhecimentos avançados em desenvolvimento de software, análise de sistemas, banco de dados, tecnologias emergentes, servidores e redes.",
  },
    {
    logo: "EM",
    logoImg: ufprLogo,
    title: "Estudante Bacharelado em Gestão da Informação",
    role: "Universidade Federal do Paraná (UFPR)",
    dates: "2026 — atual",
    summary:
      "Estou adquirindo conhecimentos em gestão e tecnologias da informação, bancos de dados, otimização de processos e programação voltada para gerir/controlar fluxos.",
  },
  {
    logo: "TS",
    logoImg: asppLogo,
    title: "Programa Menor Aprendiz",
    role: "Assoçiação dos Servidores Públicos do Paraná (ASPP)",
    dates: "03/2023 — 11/24",
    summary:
      "Desempenhei funções administrativas e de suporte. Adquiri experiência prática em rotinas de escritório, organização de documentos, suporte N1 e N2 e reparos/ajustes em máquinas.",
  },
  {
    logo: "CP",
    logoImg: compasaLogo,
    title: "Estagiário",
    role: "Compasa do Brasil - Engenharia e Empreendimentos",
    dates: "20/07 - atual",
    summary:
      "Atuo como suporte N1 e N2, configuração de computadores, Active Directory e Microsoft 365. Desenvolvo também automações em PowerShell e batch."
  },

    {
    logo: "--",
    title: "--",
    role: "--",
    dates: "--",
    summary:
      "--"
  },
];

function ExpItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative flex gap-3 py-2.5 border-b border-white/5 last:border-none"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="w-11 h-11 shrink-0 rounded bg-panel2 border border-line flex items-center justify-center text-xs font-bold text-white hover:border-white transition-colors">
        {item.logoImg ? (
          <img src={item.logoImg} alt={item.title} className="w-full h-full object-cover" />
        ) : (
          item.logo
        )}
      </div>
      <div>
        <b className="text-white text-sm block">{item.title}</b>
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

export default function Experience() {
  return (
    <div className="bg-panel border border-line rounded-sm p-4 mb-4">
      <h3 className="text-xs text-dim font-semibold border-b border-line pb-2 mb-3">
        Experiência &amp; Formação
      </h3>
      {items.map((it, i) => (
        <ExpItem key={i} item={it} />
      ))}
    </div>
  );
}
