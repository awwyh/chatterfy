import React, { useState, useEffect } from 'react';
import { FiCpu, FiDatabase, FiWifi, FiHardDrive } from 'react-icons/fi';

const serverLocations = [
  { name: 'Germany, Frankfurt-am-Main [Hi-CPU]', flag: '🇩🇪' },
  { name: 'Germany, Frankfurt-am-Main', flag: '🇩🇪' },
  { name: 'Germany, Frankfurt-am-Main [PROMO]', flag: '🇩🇪' },
  { name: 'Russia, Moscow', flag: '🇷🇺' },
];

const pricingPlans = {
  virtual: [
    {
      name: 'RX1',
      cpu: 'AMD Ryzen 9 9950X 5.7GHz',
      cpuCores: '1 vCPU',
      memory: '2GB DDR5',
      storage: '30GB NVMe',
      uplink: '10Gbps',
      price: '8',
    },
    {
      name: 'RX2',
      cpu: 'AMD Ryzen 9 9950X 5.7GHz',
      cpuCores: '2 vCPU',
      memory: '4GB DDR5',
      storage: '60GB NVMe',
      uplink: '10Gbps',
      price: '14',
    },
  ],
  dedicated: [
    {
      name: 'DS-Pro',
      cpu: 'Intel Xeon E-2386G',
      cpuCores: '6c/12t 4.9GHz',
      memory: '32GB DDR4',
      storage: '2x 512GB NVMe',
      uplink: '1Gbps',
      price: '99',
    },

  ]
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('virtual');
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [plansToShow, setPlansToShow] = useState(window.innerWidth < 1024 ? 1 : 2);
  useEffect(() => {
    const handleResize = () => setPlansToShow(window.innerWidth < 1024 ? 1 : 2);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentPlans = pricingPlans[activeTab];

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const nextPlan = () => {
    if (currentIndex < currentPlans.length - plansToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevPlan = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const displayedPlans = currentPlans.slice(currentIndex, currentIndex + plansToShow);

  return (
    <section className="w-full  py-16 px-2 md:px-6" id="pricing">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-white mb-2">Цены</h2>
          <p className="text-[#a9b3c1] text-lg">Прозрачное ценообразование</p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-[#181e36] border border-[#23284a] rounded-2xl p-2 shadow-lg">
            <button
              className={`flex-1 px-8 py-3 rounded-xl font-semibold text-lg transition-all flex items-center gap-2 justify-center ${activeTab === 'virtual'
                ? 'bg-[#2563eb] text-white shadow'
                : 'text-[#b6bdd6] hover:bg-[#23284a]'
                }`}
              onClick={() => setActiveTab('virtual')}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-white/70 mr-2" />
              Виртуальные серверы
            </button>
            <button
              className={`flex-1 px-8 py-3 rounded-xl font-semibold text-lg transition-all flex items-center gap-2 justify-center ${activeTab === 'dedicated'
                ? 'bg-[#2563eb] text-white shadow'
                : 'text-[#b6bdd6] hover:bg-[#23284a]'
                }`}
              onClick={() => setActiveTab('dedicated')}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-white/70 mr-2" />
              Выделенные серверы
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Server Locations */}
          <div className="w-full lg:w-1/4">
            <div className="bg-[#10111a] border border-[#23284a] rounded-2xl p-8 h-full shadow-lg flex flex-col">
              <h3 className="text-white text-xl font-semibold mb-6">Выбор сервера</h3>
              <ul className="flex flex-col gap-3">
                {serverLocations.map((location, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg cursor-pointer font-medium transition-all border border-transparent ${selectedLocation === idx
                      ? 'bg-[#2563eb] text-white border-[#2563eb]'
                      : 'bg-[#181e36] text-[#b6bdd6] hover:bg-[#23284a]'
                      }`}
                    onClick={() => setSelectedLocation(idx)}
                  >
                    <span className="text-xl">{location.flag}</span>
                    <span className="truncate">{location.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Plans */}
          <div className="w-full lg:w-3/4 relative">
            {/* Plans Grid */}
            <div className={`grid gap-6 ${plansToShow === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
              {currentPlans.map((plan, idx) => (
                <div
                  className="bg-[#10111a] border border-[#23284a] rounded-2xl p-8 flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  key={idx}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">{plan.name}</h3>
                  <ul className="mb-6 space-y-3 text-base">
                    <li className="flex items-center justify-between gap-2 bg-[#181e36] rounded-lg px-4 py-3 mb-2">
                      <span className="flex items-center gap-2 text-[#b6bdd6]">
                        <FiCpu className="w-5 h-5" />
                        {plan.cpu}
                      </span>
                      <span className="font-bold text-white">{plan.cpuCores}</span>
                    </li>
                    <li className="flex items-center justify-between gap-2 bg-[#181e36] rounded-lg px-4 py-3 mb-2">
                      <span className="flex items-center gap-2 text-[#b6bdd6]">
                        <FiDatabase className="w-5 h-5" />
                        Память
                      </span>
                      <span className="font-bold text-white">{plan.memory}</span>
                    </li>
                    <li className="flex items-center justify-between gap-2 bg-[#181e36] rounded-lg px-4 py-3 mb-2">
                      <span className="flex items-center gap-2 text-[#b6bdd6]">
                        <FiHardDrive className="w-5 h-5" />
                        Хранилище
                      </span>
                      <span className="font-bold text-white">{plan.storage}</span>
                    </li>
                    <li className="flex items-center justify-between gap-2 bg-[#181e36] rounded-lg px-4 py-3">
                      <span className="flex items-center gap-2 text-[#b6bdd6]">
                        <FiWifi className="w-5 h-5" />
                        Скорость порта
                      </span>
                      <span className="font-bold text-white">{plan.uplink}</span>
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold text-white">€{plan.price}</span>
                      <span className="bg-[#181e36] text-[#b6bdd6] px-3 py-1 rounded-lg text-sm font-medium">1м</span>
                    </div>
                    <div className="mb-4">
                      <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-[#181e36] text-white font-medium text-base hover:bg-[#23284a] transition">
                        Ежемесячная оплата
                        <span className="ml-2">&gt;</span>
                      </button>
                    </div>
                    <button className="w-full py-3 rounded-xl bg-[#2563eb] text-white font-bold text-lg shadow hover:bg-[#1d4ed8] transition flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5" /></svg>
                      Оформить заказ
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;