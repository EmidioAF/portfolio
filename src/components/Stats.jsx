const stats = [
  { label: "Projetos", value: 4 },
  { label: "Repositórios", value: 12 },
  { label: "Screenshots", value: 2 },
  { label: "Vídeos", value: 1 },
  { label: "Workshop Items", value: 20 },
  { label: "Reviews", value: 100 },
  { label: "Guias", value: 12 },
  { label: "Artwork", value: 13 },
];

export default function Stats() {
  return (
    <div className="bg-panel border border-line rounded-sm p-4 mb-4">
      <h3 className="text-xs text-dim font-semibold border-b border-line pb-2 mb-3">
        Estatísticas
      </h3>
      <div className="text-sm space-y-1.5">
        {stats.map((s) => (
          <div key={s.label} className="flex justify-between">
            <span className="text-dim">{s.label}</span>
            <b className="text-white font-semibold">{s.value}</b>
          </div>
        ))}
      </div>
    </div>
  );
}
