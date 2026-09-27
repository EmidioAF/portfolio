import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiJavascript, SiReact, SiNodedotjs, SiGit, SiMysql, SiPython, } from "react-icons/si";
import { FaJava, FaMicrosoft } from "react-icons/fa";
import { TbBrandPowershell, TbServer } from "react-icons/tb";

const techs = [
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", level: 2 },
  { name: "React", icon: SiReact, color: "#61dafb", level: 1 },
  { name: "Node.js", icon: SiNodedotjs, color: "#3c873a", level: 1 },
  { name: "Java", icon: FaJava, color: "#e76f00", level: 2 },
  { name: "Python", icon: SiPython, color: "#3776ab", level: 2 },
  { name: "PowerShell", icon: TbBrandPowershell, color: "#5391fe", level: 2 },
  { name: "Microsoft 365", icon: FaMicrosoft, color: "#e3e3e3", level: 3 },
  { name: "Servidores", icon: TbServer, color: "#9a9a9a", level: 2 },
  { name: "Git", icon: SiGit, color: "#f05032", level: 3 },
  { name: "SQL", icon: SiMysql, color: "#4479a1", level: 3 },
];

function Pill({ tech }) {
  const [open, setOpen] = useState(false);
  const Icon = tech.icon;
  return (
    <div
      className="relative w-12 h-12 rounded bg-panel2 border border-line flex items-center justify-center hover:border-white hover:scale-105 transition-all cursor-default"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Icon size={22} color={tech.color} />
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-[#1e1e1e] border border-line rounded p-2 w-32 z-10"
          >
            <div className="text-[10px] text-white text-center mb-1">{tech.name}</div>
            <div className="flex gap-1 mb-1">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="flex-1 h-1.5 bg-[#2b2b2b] rounded-sm overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: n <= tech.level ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: n * 0.05 }}
                    style={{ originX: 0 }}
                    className="h-full bg-white"
                  />
                </div>
              ))}
            </div>
            <div className="text-[10px] text-dim text-center">Nível {tech.level}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="bg-panel border border-line rounded-sm p-4 mb-4">
      <h3 className="text-xs text-dim font-semibold border-b border-line pb-2 mb-3 flex justify-between">
        Tecnologias <span className="text-white">{techs.length}</span>
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {techs.map((t) => (
          <Pill key={t.name} tech={t} />
        ))}
      </div>
    </div>
  );
}
