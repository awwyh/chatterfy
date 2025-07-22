import React from 'react';

const Contact = () => {
  return (
    <section className="w-full text-white py-20 px-4" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold mb-4">Контакты</h2>
        <p className="text-[#a9b3c1] text-xl">Свяжитесь с нами любым удобным способом</p>
      </div>

      <div className="max-w-5xl mx-auto bg-[#181e24] rounded-2xl border border-[#23284a] p-4 md:p-10 grid grid-cols-2 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-8 justify-center">
          <div className="bg-[#23253a] border border-[#23284a] rounded-2xl p-8 flex flex-col gap-3 min-h-[170px]">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2563eb] mb-2">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="14" x="2" y="5" rx="3" />
                <path d="m3 6 8.293 7.293a1 1 0 0 0 1.414 0L21 6" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold">Email</h4>
            <p className="text-[#a9b3c1] text-base break-all">support@waicore.com</p>
          </div>
          <div className="bg-[#23253a] border border-[#23284a] rounded-2xl p-8 flex flex-col gap-3 min-h-[170px]">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2563eb] mb-2">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 8c-1.333 2-4.667 6-8 8" />
                <path d="M8 8h.01" />
                <path d="M16 16h.01" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold">Telegram</h4>
            <p className="text-[#a9b3c1] text-base break-all">@waicore_help</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Остались вопросы?</h3>
          <p className="text-[#a9b3c1] mb-8 text-lg">Заполните форму</p>
          <form className="flex flex-col gap-6">
            <input
              type="email"
              name="email"
              placeholder="Ваша электронная почта"
              required
              className="w-full bg-[#10111a] border border-[#23284a] text-white px-5 py-4 rounded-lg text-base placeholder-[#a9b3c1] focus:outline-none focus:border-[#2563eb] transition"
            />
            <textarea
              name="question"
              placeholder="Ваш вопрос"
              rows={4}
              required
              className="w-full bg-[#10111a] border border-[#23284a] text-white px-5 py-4 rounded-lg text-base placeholder-[#a9b3c1] focus:outline-none focus:border-[#2563eb] transition resize-none"
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-4 rounded-lg transition text-base md:text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="14" x="2" y="5" rx="3" />
                <path d="m3 6 8.293 7.293a1 1 0 0 0 1.414 0L21 6" />
              </svg>
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;