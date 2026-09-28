export default function Summary() {
  return (
    <div className="bg-panel border border-line rounded-sm p-4 mb-4">
      <h3 className="text-xs text-dim font-semibold border-b border-line pb-2 mb-3">
        Resumo
      </h3>
      <dl className="text-sm">
        <dt className="text-dim text-[11px] mt-3 first:mt-0">Localização</dt>
        <dd className="text-white mt-0.5">Curitiba, Paraná / Home Office</dd>
        <dt className="text-dim text-[11px] mt-3">Interesses</dt>
        <dd className="text-white mt-0.5">Análise de Dados, Engenharia de Dados, Análise de Sistemas</dd>
        <dt className="text-dim text-[11px] mt-3">Objetivo</dt>
        <dd className="text-white mt-0.5">Especialização em dados</dd>
      </dl>
    </div>
  );
}
