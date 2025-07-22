import React from 'react';
import { FaUserCircle, FaGlobe } from 'react-icons/fa';

const navItems = [
  { label: 'Главная', href: '/' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'О компании', href: '#about' },
  { label: 'Контакты', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
];

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-[#10111a] via-[#181e36] to-[#10111a] shadow-lg fixed z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <a href="/" className="flex items-center gap-3 group">
          <span className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
            <span className="text-[#2563eb] font-black text-2xl">W</span>
          </span>
          <span className="text-white font-extrabold text-2xl tracking-wide group-hover:text-white transition">CHATTERFY</span>
        </a>
        <nav>
          <ul className="flex gap-10 text-lg font-semibold">
            {navItems.map(item => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[#b6bdd6] hover:text-white px-3 py-2 rounded transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#181e36] border border-[#23284a] text-[#b6bdd6] hover:bg-[#23284a] transition">
            <FaGlobe className="w-4 h-4" />
            RU
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#22d3ee] text-white font-semibold shadow hover:from-[#1d4ed8] hover:to-[#22d3ee] transition">
            <FaUserCircle className="w-5 h-5" />
            Личный кабинет
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;