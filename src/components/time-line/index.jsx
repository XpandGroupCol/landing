import { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Público",
      content: (
        <>
          <div className="flex md:flex-col max-w-xs:flex-col lg:flex-row  justify-center items-center">
            <div className="flex flex-col lg:pb-0 xs:pb-[20px] flex-1">
              <p className="font-ceraBold text-third lg:leading-[73px] xs:leading-[30px] lg:text-left xs:text-center lg:text-[60px] xs:text-[24px] mb-[10px] ">
                Determina con precisión
                a quién deseas llegar:
              </p>
              <p className="text-[24px] font-ceraLigth text-[#262525] leading-33 lg:pt-0 xs:pt-[20px] lg:pb-0 xs:pb-[16px] ">
                <span className="font-ceraBold ">En primer lugar, </span>
                Shareflow permite definir con claridad
                a tu audiencia objetivo. Establece con minuciosidad la
                segmentación
                de tu campaña, y nosotros nos encargaremos de adaptar
                cada 
                elemento para que se ajuste perfectamente a los objetivos de
                 tu marca.
              </p>
            </div>
            <div className="flex flex-1 ">
              <img src="Publico.webp" className="lg:w-[588px] lg:ml-[75px] xs:w-[270px] md:w-[504px] " />
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Ubicación",
      content: (
        <>
          <div className="flex  w-auto">
            <div className="flex flex-col ">
              <p className="font-ceraBold text-third leading-[73px] text-[60px] mb-[10px]">
                Selecciona estratégicamente <br /> tu ubicación:
              </p>
              <p className="text-[24px] font-ceraLigth text-[#262525] leading-33">
                <span className="font-ceraBold">La elección del lugar </span>
                adecuado es crucial en cualquier estrategia de
                marketing. Debes escoger cuidadosamente los canales y
                medios
                 donde podrás conectar con clientes potenciales y lograr
                un mayor
                 reconocimiento de tu marca. Esta decisión estratégica te
                permitirá
                 posicionarte de manera efectiva en la mente de tu público
                objetivo.
              </p>
            </div>
            <div className="flex ">
              <img src="Publico.webp" className="w-[588px] ml-[75px] " />
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Mensaje",
      content: (
        <>
          <div className="flex w-auto">
            <div className="flex flex-col md:mr-[75px]">
              <p className="font-ceraBold text-third leading-[73px] text-[60px] mb-[10px]">
                Potencia tu mensaje <br /> con creatividad:
              </p>
              <p className="text-[24px] font-ceraLigth text-[#262525] leading-33">
                <span className="font-ceraBold">La creatividad </span>es el
                motor que impulsa el éxito de
                 cualquier campaña. Agrega videos e imágenes de alta
                calidad
                que no solo aporten valor, sino que también 
                generen una impresión duradera. Estos elementos
                visuales no solo aumentarán tu visibilidad,
                 sino que también reforzarán el posicionamiento de
                 tu marca en la mente de tus clientes potenciales.
              </p>
            </div>
            <div className="flex">
              <img src="Publico.webp" className="w-[588px] ml-[75px]" />
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="p-8">
      <div className="flex  tems-center justify-center">
        {tabs.map((tab, index) => (
          <div className="flex flex-col items-center  ">
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-[40px] h-[40px] flex items-center justify-center rounded-full ml-[45px] mr-[45px]
               ${
                 activeTab === index
                   ? "bg-fourth text-white "
                   : "bg-[#cfc5de] text-[gray-200] "
               }`}
            >
              <span className="text-[30px] text-primary font-ceraBold">
                {index + 1}
              </span>
            </button>
            <p
              className={`mt-2 text-[20px] font-ceraBold  ${
                activeTab === index ? "text-black" : "text-gray-200"
              }`}
            >
              {" "}
              {tab.title}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;
