import React from 'react';
import { FiZap, FiBox, FiThumbsUp, FiMessageCircle } from 'react-icons/fi';

const featuresData = [
  {
    icon: <FiZap className="w-7 h-7" />,
    title: 'Высокая скорость до 25 Гбит/с',
    description:
      'Серверы на AMD Ryzen 9 и NVMe-дисках обеспечивают мгновенную обработку запросов и плавную работу проектов.',
  },
  {
    icon: <FiBox className="w-7 h-7" />,
    title: 'Гарантированные мощности без оверселлинга',
    description:
      'Мы резервируем для вас реальные ресурсы CPU и RAM — никакого совместного использования с другими пользователями.',
  },
  {
    icon: <FiThumbsUp className="w-7 h-7" />,
    title: 'Готовые решения в один клик',
    description:
      'Экономьте часы на настройке: WordPress, игровые серверы, VPN и другие популярные системы уже настроены и оптимизированы.',
  },
  {
    icon: <FiMessageCircle className="w-7 h-7" />,
    title: 'Круглосуточная поддержка без роботов',
    description:
      'Наши специалисты отвечают за 15 минут и объяснят всё человеческим языком — даже если вы новичок в серверах.',
  },
];

function Features() {
  return (
    <section className="w-full py-16 px-2 md:px-4">
      <div className="max-w-6xl mx-auto rounded-2xl border border-[#23284a] bg-gradient-to-br from-[#10111a] via-[#181e36] to-[#10111a] shadow-xl overflow-hidden">
        <div className="relative py-10 px-4 md:px-12 flex justify-center items-center bg-transparent">
          <div className="absolute left-0 top-0 h-full w-40 hidden md:block pointer-events-none">
            <div className="w-full h-full bg-gradient-to-br from-[#23284a]/60 to-transparent rounded-tl-2xl" />
          </div>
          <div className="absolute right-0 top-0 h-full w-40 hidden md:block pointer-events-none">
            <div className="w-full h-full bg-gradient-to-bl from-[#23284a]/60 to-transparent rounded-tr-2xl" />
          </div>
          <h2 className="relative z-10 text-xl md:text-2xl font-semibold text-[#b6bdd6]">
            Все необходимое для для стабильной и быстрой работы
          </h2>
        </div>
        <div className="overflow-x-auto">
          <div className="flex flex-row border-t border-[#23284a] divide-x divide-[#23284a]">
            {featuresData.map((feature, idx) => (
              <div
                key={idx}
                className="min-w-[260px] flex-1 flex flex-col gap-5 px-6 py-10 items-start bg-transparent"
              >
                <div className="mb-2 flex items-center justify-center w-14 h-14 rounded-xl bg-[#181e36] border border-[#23284a] text-[#b6bdd6] shadow group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-[#a9b3c1] text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;