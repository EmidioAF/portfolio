const certs = [
  { name: "Nome da certificação", issuer: "Instituição emissora", date: "Emitido em —" },
  { name: "Nome da certificação", issuer: "Instituição emissora", date: "Emitido em —" },
];

export default function Certifications() {
  return (
    <div className="bg-panel border border-line rounded-sm p-4 mb-4">
      <h3 className="text-xs text-dim font-semibold border-b border-line pb-2 mb-3">
        Certificações
      </h3>
      {certs.map((c, i) => (
        <div
          key={i}
          className="flex gap-3 py-2.5 border-b border-white/5 last:border-none group"
        >
          <div className="w-10 h-10 shrink-0 rounded bg-panel2 border border-line flex items-center justify-center text-[11px] font-bold text-white group-hover:border-white transition-colors">
            ?
          </div>
          <div>
            <b className="text-white text-sm block">{c.name}</b>
            <div className="text-xs text-dim">{c.issuer}</div>
            <div className="text-[11px] text-dim">{c.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
