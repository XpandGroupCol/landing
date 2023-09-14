import { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Público",
      content: (
        <>
          <img
            src="path_a_tu_imagen1.jpg"
            alt="Descripción 1"
            className="w-32 h-32"
          />
          <p>Texto para la pestaña 1</p>
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
    <div className="p-8">
      <div className="flex mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 ${
              activeTab === index ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;
