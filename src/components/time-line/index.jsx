import { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Público",
      content: (
        <>
          <div className="flex bg-purple-800 w-auto">
            <div className="flex flex-col bg-green-300">
              <p className="font-ceraBold text-third leading-[73px] text-[60px] mb-[10px]">
                Determina con precisión
                <br /> a quién deseas llegar:
              </p>
              <p className="text-[24px] font-ceraLigth text-[#262525] leading-33">
                <span className="font-ceraBold">En primer lugar, </span>
                Shareflow permite definir con claridad
                <br /> a tu audiencia objetivo. Establece con minuciosidad la
                segmentación
                <br /> de tu campaña, y nosotros nos encargaremos de adaptar
                cada <br />
                elemento para que se ajuste perfectamente a los objetivos de
                <br /> tu marca.
              </p>
            </div>
            <div className="flex">
              <img src="texto.webp" className="w-[588px] ml-[75px]" />
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Ubicación",
      content: (
        <>
          <img
            src="path_a_tu_imagen2.jpg"
            alt="Descripción 2"
            className="w-32 h-32"
          />
          <p>Texto para la pestaña 2</p>
        </>
      ),
    },
    {
      title: "Mensaje",
      content: (
        <>
          <img
            src="path_a_tu_imagen3.jpg"
            alt="Descripción 3"
            className="w-32 h-32"
          />
          <p>Texto para la pestaña 3</p>
        </>
      ),
    },
  ];

  return (
    <div className="p-8 bg-red-400">
      <div className="flex  space-x-[0] bg-blue-400 tems-center">
        {tabs.map((tab, index) => (
          <div className="flex flex-col items-center  ">
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-[40px] h-[40px] flex items-center justify-center rounded-full ml-[45px] mr-[45px]
               ${
                 activeTab === index
                   ? "bg-fourth text-white"
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
