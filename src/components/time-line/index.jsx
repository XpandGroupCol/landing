import { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Público",
      content: (
        <>
          <div className="flex flex-col items-center lg:flex-row lg:gap-8">
            <div className="lg:w-[50%]">
              <p className="font-ceraBold text-third text-[24px] text-center mb-2 lg:text-[48px] lg:text-left">
                Determina con precisión
                a quién deseas llegar:
              </p>
              <p className="font-ceraLigth text-[#262525] text-center mb-6 md:text-[20px] md:text-left">
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
            <div className="lg:w-[50%]">
              <img src="public.webp" />
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Ubicación",
      content: (
        <>
          <div className="flex flex-col items-center lg:flex-row lg:gap-8">
            <div className="lg:w-[50%]">
              <p className="font-ceraBold text-third text-[24px] text-center mb-2 lg:text-[48px] lg:text-left">
                Selecciona estratégicamente tu ubicación:
              </p>
              <p className="font-ceraLigth text-[#262525] text-center mb-6 md:text-[20px] md:text-left">
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
            <div className="lg:w-[50%]">
              <img src="medios.webp" className="" />
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Mensaje",
      content: (
        <>
          <div className="flex flex-col items-center lg:flex-row lg:gap-8">
            <div className="lg:w-[50%]">
              <p className="font-ceraBold text-third text-[24px] text-center mb-2 lg:text-[48px] lg:text-left">
                Potencia tu mensaje con creatividad:
              </p>
              <p className="font-ceraLigth text-[#262525] text-center mb-6 md:text-[20px] md:text-left">
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
            <div className="lg:w-[50%]">
              <img src="mensaje.webp" className="" />
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="">
      <div className="flex  tems-center justify-center gap-5 mb-6 md:gap-10">
        {tabs.map((tab, index) => (
          <div key={index} className="flex flex-col items-center">
            <button
              onClick={() => setActiveTab(index)}
              className={`flex items-center justify-center mb-2 rounded-full w-[30px] h-[30px] md:w-[40px] md:h-[40px]
            ${activeTab === index
                  ? "bg-fourth text-white "
                  : "bg-[#cfc5de] text-[gray-200] "
                }`}
            >
              <span className="text-[20px] text-primary font-ceraBold md:text-[22px]">
                {index + 1}
              </span>
            </button>
            <p
              className={`font-ceraBold  ${activeTab === index ? "text-black" : "text-gray-200"
                }`}
            >
              {" "}
              {tab.title}
            </p>
          </div>
        ))}
      </div>

      <div className="">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;
