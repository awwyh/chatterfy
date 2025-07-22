import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#10111a] text-[#a9b3c1] pt-16 pb-8 px-4 w-full overflow-x-hidden">
      <div className="flex flex-wrap justify-between gap-8 max-w-6xl mx-auto pb-12 border-b border-[#363a4f]">
        <div className="flex-2 min-w-[300px] flex-1 mb-8 md:mb-0">
          <h3 className="text-white text-2xl font-bold mb-4">WAICORE</h3>
          <p className="leading-relaxed mb-6">
            Hosting solutions for projects of any complexity. Maximum performance and security.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-[#a9b3c1] hover:text-white text-xl transition">X</a>
            <a href="#" className="text-[#a9b3c1] hover:text-white text-xl transition">G</a>
            <a href="#" className="text-[#a9b3c1] hover:text-white text-xl transition">C</a>
          </div>
        </div>
        <div className="min-w-[180px] flex-1 mb-8 md:mb-0">
          <h4 className="text-white text-lg mb-6">Information</h4>
          <ul>
            <li className="mb-3">
              <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
            </li>
            <li className="mb-3">
              <a href="#fair-use" className="hover:text-white transition">Fair Use Policy</a>
            </li>
            <li className="mb-3">
              <a href="#terms" className="hover:text-white transition">Terms of service</a>
            </li>
          </ul>
        </div>
        <div className="min-w-[180px] flex-1 mb-8 md:mb-0">
          <h4 className="text-white text-lg mb-6">Contacts</h4>
          <ul>
            <li className="mb-3">
              <a href="#" className="hover:text-white transition">Telegram</a>
            </li>
            <li className="mb-3">
              <a href="mailto:support@waicore.com" className="hover:text-white transition">support@waicore.com</a>
            </li>
          </ul>
        </div>
        <div className="min-w-[180px] flex-1">
          <h4 className="text-white text-lg mb-6">Methods of payment</h4>
          <div className="flex flex-wrap gap-4 text-white text-2xl">
            <span>B</span>
            <span>T</span>
            <span>$</span>
            <span>♦</span>
            <span>X</span>
            <span>S</span>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-[#6b7280] mt-8">
        <p className="my-1">Databyte LLC (Company Number: 445783386)</p>
        <p className="my-1">Georgia, Batumi city, Zhiuli Shartava Avenue, N7, Apartment N22</p>
      </div>
    </footer>
  );
}

export default Footer;