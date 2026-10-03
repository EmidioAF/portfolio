// Quadro decorativo independente, solto no layout — como a cruz do gif de
// referência. Não faz parte de nenhum card; fica posicionado sozinho.
//
// Para trocar a imagem: coloque seu arquivo em src/assets/decor/ e descomente:
import decorImg from "../assets/decor/frame.png";
// const decorImg = null;

export default function DecorFrame() {
  return (
    <div
      className="hidden lg:block shrink-0 self-start mt-24 ml-4"
      style={{ width: "clamp(200px, 50vw, 240px)" }}
    >
      {decorImg ? (
        <img src={decorImg} alt="" className="w-full h-auto object-contain" />
      ) : (
        <div className="w-full aspect-[9/16] border border-dashed border-line rounded flex items-center justify-center text-[11px] text-dim text-center px-2">
          quadro solto
        </div>
      )}
    </div>
  );
}