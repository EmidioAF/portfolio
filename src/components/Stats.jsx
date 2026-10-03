import { FaWhatsapp, FaDiscord, FaInstagram, FaEnvelope, FaLinkedin, FaGithub, FaReddit, FaFileDownload } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const stats = [{ label: "Projetos atuais", value: 4 }];

const contacts = [
    {
    name: "LinkedIn",
    icon: FaLinkedin,
    color: "#0a66c2",
    href: "https://linkedin.com/in/emidioaf",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "#ffffff",
    href: "https://github.com/EmidioAF",
  },
  {
    name: "Currículo",
    icon: FaFileDownload,
    color: "#ffffff",
    href: `${import.meta.env.BASE_URL}curriculo.pdf`,
  },
  {
    name: "E-mail",
    icon: FaEnvelope,
    color: "#c7c7c7",
    href: "mailto:angelottiemidio@gmail.com",
 },
 {
    name: "WhatsApp",
    icon: FaWhatsapp,
    color: "#25d366",
    href: "https://wa.me/5541995549029", // ex.: https://wa.me/5541999999999
  },
  {
    name: "Discord",
    icon: FaDiscord,
    color: "#5865f2",
    href: "https://discord.com/users/scp_kirin", // ID numérico do seu perfil
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    color: "#e4405f",
    href: "https://instagram.com/emidio.angelotti",
  },
  {
    name: "Twitter / X",
    icon: FaXTwitter,
    color: "#ffffff",
    href: "https://x.com/KIR_IN21",
  },
  {
  name: "Reddit",
  icon: FaReddit,
  color: "#ff4500",
  href: "https://reddit.com/user/Azazel_SCP",
},
];

export default function Stats() {
  return (
    <div className="bg-panel border border-line rounded-sm p-4 mb-4">
      <h3 className="text-xs text-dim font-semibold border-b border-line pb-2 mb-3">
        Projetos &amp; Contato
      </h3>

      <div className="text-sm space-y-1.5 mb-4">
        {stats.map((s) => (
          <div key={s.label} className="flex justify-between">
            <span className="text-dim">{s.label}</span>
            <b className="text-white font-semibold">{s.value}</b>
          </div>
        ))}
      </div>

      <div className="text-[11px] text-dim mb-2">Contato</div>
      <div className="flex flex-wrap gap-2.5">
        {contacts.map((c) => {
          const Icon = c.icon;
          return (
            <a
              key={c.name}
              href={c.href}
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              title={c.name}
              aria-label={c.name}
              className="w-10 h-10 rounded bg-panel2 border border-line flex items-center justify-center hover:border-white hover:scale-105 transition-all"
            >
              <Icon size={18} color={c.color} />
            </a>
          );
        })}
      </div>
    </div>
  );
}