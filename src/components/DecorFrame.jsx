// Quadro decorativo independente, solto no layout — como a cruz do gif de
// referência. Não faz parte de nenhum card; fica posicionado sozinho.
//
// Para trocar a imagem: coloque seu arquivo em src/assets/decor/ e descomente:
import decorImg from "../assets/decor/frame.png";
// const decorImg = null;

export default function DecorFrame() {
  return (
    <div className="hidden xl:block absolute left-20 top-20 w-60 h-2000">
      {decorImg ? (
        <img src={decorImg} alt="" className="w-full h-full object-contain" />
      ) : (
        <div className="w-full h-full border border-dashed border-line rounded flex items-center justify-center text-[11px] text-dim text-center px-2">
          quadro solto — sua imagem aqui
        </div>
      )}
    </div>
  );
}
