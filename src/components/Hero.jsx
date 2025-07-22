import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const HeroSectionPerfected = () => {
  return (
    <>
      <style>
        {`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto+Mono&display=swap');

    :root {
      --color-bg-main: #0a0d1a; /* темнее фон */
      --color-bg-terminal: #14182b; /* темнее терминал */
      --color-bg-terminal-secondary: #10121f; /* темнее градиент терминала */
      --color-text-main: #b6bdd6;
      --color-link: #60a5fa;
      --color-accent: #3b82f6;
      --color-green: #22c55e;
      --color-yellow: #fbbf24;
      --color-highlight: #22d3ee;
      --color-dot-red: #ff5f56;
      --color-dot-yellow: #ffbd2e;
      --color-dot-green: #27c93f;
    }

    .hero-bg-perfected {
      background: var(--color-bg-main) radial-gradient(circle, rgba(255,255,255,0.02) 3px, transparent 1px);
      background-size: 80px 80px;
      font-family: 'Inter', sans-serif;
    }

    .terminal-window-perfected {
      background: radial-gradient(ellipse at top left, var(--color-bg-terminal) 60%, var(--color-bg-terminal-secondary) 100%);
      border-radius: 18px;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
      position: relative;
      overflow: hidden;
      max-width: 900px;
      width: 100%;
      margin: 5.5rem auto 4rem;
    }

    .terminal-glow-line-perfected {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 6px;
      background: linear-gradient(90deg, var(--color-accent) 0%, var(--color-link) 100%);
      border-top-left-radius: 18px;
      border-top-right-radius: 18px;
    }

    @keyframes blink-perfected {
      0%,100% { opacity: 1; }
      50% { opacity: 0; }
    }

    .blinking-cursor-perfected {
      background-color: var(--color-accent);
      width: 9px;
      height: 1.25rem;
      display: inline-block;
      vertical-align: middle;
      animation: blink-perfected 1.2s steps(1, start) infinite;
    }

    .font-roboto-mono {
      font-family: 'Roboto Mono', monospace;
    }

    .terminal-header {
      padding: 0.75rem 1.5rem 0.5rem;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #23284a;
      background: rgba(24,30,54,0.92);
    }

    .terminal-header-dots {
      display: flex;
      gap: 0.4rem;
      margin-right: 1.2rem;
    }

    .terminal-dot {
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      border: 1px solid transparent;
    }
    .dot-red { background: var(--color-dot-red); border-color: #e0443e; }
    .dot-yellow { background: var(--color-dot-yellow); border-color: #dea123; }
    .dot-green { background: var(--color-dot-green); border-color: #1aab29; }

    .terminal-header-title {
      font-family: 'Roboto Mono', monospace;
      font-size: 0.95rem;
      color: var(--color-text-main);
      letter-spacing: 0.02em;
      user-select: text;
    }

    .terminal-content {
      padding: 1.2rem 2rem 1.5rem;
      color: var(--color-text-main);
    }

    .terminal-link {
      color: var(--color-link);
      text-decoration: underline;
    }
    .terminal-highlight { color: var(--color-highlight); }
    .terminal-green { color: var(--color-green); }
    .terminal-yellow { color: var(--color-yellow); }
    .terminal-accent, .terminal-newgen {
      color: var(--color-link);
      font-weight: 500;
    }
    .terminal-rocket { font-size: 1.1em; }

    .main-title {
      font-size: 3.2rem;
      font-weight: 800;
      text-align: center;
      color: #fff;
      margin-bottom: 1.5rem;
      line-height: 1.1;
    }
    @media (min-width: 768px) {
      .main-title { font-size: 4rem; }
    }

    .main-desc {
      font-size: 1.15rem;
      color: #cbd5e1;
      text-align: center;
      max-width: 700px;
      margin: 0 auto 2.5rem;
      line-height: 1.7;
    }

    .main-btn {
      background: var(--color-accent);
      color: #fff;
      font-weight: 600;
      font-size: 1.1rem;
      border-radius: 999px;
      padding: 0.85rem 2.2rem;
      display: flex;
      align-items: center;
      gap: 0.7rem;
      box-shadow: 0 4px 24px rgba(59,130,246,0.15);
      transition: background 0.2s, transform 0.2s;
      margin: 0 auto;
    }
    .main-btn:hover {
      background: #2563eb;
      transform: scale(1.05);
    }
  `}
      </style>


      <div className="hero-bg-perfected min-h-screen w-full flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center w-full">

          {/* --- Окно терминала --- */}
          <div className="terminal-window-perfected mx-auto mb-16">
            <div className="terminal-glow-line-perfected"></div>
            <div className="terminal-header">
              <div className="terminal-header-dots">
                <span className="terminal-dot dot-red"></span>
                <span className="terminal-dot dot-yellow"></span>
                <span className="terminal-dot dot-green"></span>
              </div>
              <span className="terminal-header-title">root@waicore.com: ~</span>
            </div>
            <div className="terminal-content font-roboto-mono text-sm">
              <p className="flex items-center mb-2">
                <span className="terminal-accent mr-3">$</span>&nbsp;
                Установлено защищенное соединение с&nbsp;
                <a href="#" className="terminal-link">&nbsp;core.waicore.com</a>
                <span className="terminal-yellow ml-1">⚡️</span>
              </p>
              <p className="flex items-center mb-2">
                <span className="terminal-accent mr-3">$</span>&nbsp;
                Проверка шифрования: <span className="terminal-green ml-1">&nbsp;AES-256-GCM</span>
              </p>
              <p className="flex items-center mb-2">
                <span className="terminal-accent mr-3">$</span>&nbsp;
                Доступ к высокопроизводимой среде предоставлен
              </p>
              <p className="flex items-center mb-2">
                <span className="terminal-accent mr-3">$</span>&nbsp;
                Добро пожаловать в WAICORE — <span className="terminal-newgen">&nbsp;хостинг нового поколения</span>
                <span className="terminal-rocket ml-1">🚀</span>
              </p>

              <div className="flex items-center">
                <span className="terminal-accent mr-3">$</span>&nbsp;
                <span className="blinking-cursor-perfected"></span>
              </div>
            </div>
          </div>

          {/* --- Основной контент --- */}
          <h1 className="main-title">
            Надежный хостинг для любых задач
          </h1>
          <p className="main-desc">
            Обеспечьте стабильную работу проектов любой сложности с нашими VPS и выделенными серверами — от простых сайтов до высоконагруженных сервисов. Гарантированные мощности, масштабирование ресурсов за 5 минут и профессиональная поддержка 24/7.
          </p>

          {/* --- Кнопка --- */}
          <button className="main-btn">
            <FaShoppingCart className="w-5 h-5" />
            <span>Купить</span>
          </button>

        </div>
      </div>
    </>
  );
};

export default HeroSectionPerfected;