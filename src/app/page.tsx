"use client";

import { useState } from "react";

const MENU = [
  { cat: "Роллы", items: [
    { name: "Филадельфия", price: 3200, desc: "Лосось, сливочный сыр, рис, нори" },
    { name: "Калифорния", price: 2800, desc: "Краб, авокадо, огурец, тобико" },
    { name: "Дракон", price: 3500, desc: "Угорь, авокадо, сливочный сыр" },
    { name: "Запечённый ролл", price: 2900, desc: "Лосось, сливочный соус, запечённый" },
  ]},
  { cat: "Суши", items: [
    { name: "Нигири лосось", price: 800, desc: "2 шт" },
    { name: "Нигири креветка", price: 900, desc: "2 шт" },
    { name: "Сет «Love»", price: 5900, desc: "24 шт — микс лучших роллов" },
    { name: "Сет «Family»", price: 8900, desc: "40 шт — для большой компании" },
  ]},
  { cat: "Горячее", items: [
    { name: "Рамен", price: 2500, desc: "Наваристый бульон, лапша, яйцо" },
    { name: "Том-ям", price: 2800, desc: "Тайский суп с креветками" },
    { name: "Шашлык", price: 1800, desc: "Из мраморной говядины, 200г" },
    { name: "Пицца Маргарита", price: 2200, desc: "Томаты, моцарелла, базилик" },
  ]},
];

const HOURS = "Ежедневно 11:00 — 01:00";
const PHONE1 = "+7 707 597 03 37";
const PHONE2 = "+7 701 977 03 37";
const ADDRESS = "ул. Ташкентская 140, Тараз";
const INSTAGRAM = "https://instagram.com/sushilovetaraz";
const MAP_2GIS = "https://2gis.kz/taraz/firm/70000001059285569";

export default function Home() {
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingGuests, setBookingGuests] = useState(2);
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingNote, setBookingNote] = useState("");
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState<string | null>("Роллы");

  const today = new Date().toISOString().split("T")[0];
  const times = Array.from({ length: 14 }, (_, i) => `${(11 + i).toString().padStart(2, "0")}:00`);

  function handleBooking(e: React.FormEvent) {
    e.preventDefault();
    // Send to WhatsApp
    const text = `Бронь Sushi Love:\n📅 ${bookingDate} в ${bookingTime}\n👥 ${bookingGuests} гостей\n👤 ${bookingName}\n📱 ${bookingPhone}${bookingNote ? `\n💬 ${bookingNote}` : ""}`;
    window.open(`https://wa.me/77075970337?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-[#0f0f23]">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f23]/50 via-transparent to-[#0f0f23]" />
        <div className="relative bg-gradient-to-br from-rose-600/20 via-[#0f0f23] to-amber-600/20">
          <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            <span className="text-2xl font-bold">🍣 Sushi Love</span>
            <div className="flex gap-4 text-sm">
              <a href="#menu" className="text-gray-300 hover:text-white">Меню</a>
              <a href="#booking" className="text-gray-300 hover:text-white">Бронь</a>
              <a href="#contacts" className="text-gray-300 hover:text-white">Контакты</a>
            </div>
          </nav>

          <div className="max-w-5xl mx-auto px-4 py-20 sm:py-32 text-center">
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">
              Sushi Love
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-2">Суши-бар &bull; Караоке &bull; Банкетный зал</p>
            <p className="text-gray-500 mb-8">{ADDRESS} &bull; {HOURS}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#booking" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition">
                Забронировать столик
              </a>
              <a href={`tel:${PHONE1.replace(/\s/g, "")}`} className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition border border-white/20">
                📞 Позвонить
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-4 gap-4">
          {[
            { icon: "🍣", title: "Свежие суши", desc: "Готовим из свежих продуктов" },
            { icon: "🎤", title: "Караоке", desc: "Пойте любимые песни" },
            { icon: "🎉", title: "Банкеты", desc: "2 этажа, до 100 гостей" },
            { icon: "🚗", title: "Доставка", desc: "По всему Таразу" },
          ].map((f) => (
            <div key={f.title} className="bg-white/5 rounded-2xl p-5 text-center border border-white/10">
              <div className="text-3xl mb-2">{f.icon}</div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Меню</h2>
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {MENU.map((cat) => (
            <button
              key={cat.cat}
              onClick={() => setMenuOpen(menuOpen === cat.cat ? null : cat.cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                menuOpen === cat.cat ? "bg-rose-600 text-white" : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {cat.cat}
            </button>
          ))}
        </div>
        {MENU.filter((c) => c.cat === menuOpen).map((cat) => (
          <div key={cat.cat} className="grid sm:grid-cols-2 gap-3">
            {cat.items.map((item) => (
              <div key={item.name} className="bg-white/5 rounded-2xl p-4 border border-white/10 flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
                <span className="text-rose-400 font-bold whitespace-nowrap ml-4">{item.price.toLocaleString()}₸</span>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* Booking */}
      <section id="booking" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Забронировать столик</h2>
        <div className="max-w-md mx-auto bg-white/5 rounded-3xl p-6 border border-white/10">
          {sent ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <p className="text-lg font-semibold mb-2">Заявка отправлена!</p>
              <p className="text-gray-400 text-sm">Мы подтвердим бронь в WhatsApp</p>
              <button onClick={() => setSent(false)} className="mt-4 text-rose-400 text-sm hover:underline">Новая бронь</button>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Имя</label>
                <input type="text" required value={bookingName} onChange={(e) => setBookingName(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-rose-500 outline-none" placeholder="Ваше имя" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Телефон</label>
                <input type="tel" required value={bookingPhone} onChange={(e) => setBookingPhone(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-rose-500 outline-none" placeholder="+7 700 123 4567" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Дата</label>
                  <input type="date" required min={today} value={bookingDate} onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-rose-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Время</label>
                  <select required value={bookingTime} onChange={(e) => setBookingTime(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-rose-500 outline-none">
                    <option value="">—</option>
                    {times.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Гости</label>
                <div className="flex items-center gap-4">
                  <button type="button" onClick={() => setBookingGuests(Math.max(1, bookingGuests - 1))} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold">-</button>
                  <span className="text-2xl font-bold w-8 text-center">{bookingGuests}</span>
                  <button type="button" onClick={() => setBookingGuests(Math.min(30, bookingGuests + 1))} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold">+</button>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Пожелания</label>
                <textarea value={bookingNote} onChange={(e) => setBookingNote(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 resize-none h-20 focus:ring-2 focus:ring-rose-500 outline-none" placeholder="У окна, детский стульчик, караоке..." />
              </div>
              <button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-xl transition text-lg">
                Забронировать через WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Контакты</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-3xl p-6 border border-white/10 space-y-4">
            <div>
              <span className="text-gray-400 text-sm">Адрес</span>
              <p className="font-semibold">{ADDRESS}</p>
            </div>
            <div>
              <span className="text-gray-400 text-sm">Телефоны</span>
              <p><a href={`tel:${PHONE1.replace(/\s/g, "")}`} className="text-rose-400 hover:underline font-semibold">{PHONE1}</a></p>
              <p><a href={`tel:${PHONE2.replace(/\s/g, "")}`} className="text-rose-400 hover:underline font-semibold">{PHONE2}</a></p>
            </div>
            <div>
              <span className="text-gray-400 text-sm">Время работы</span>
              <p className="font-semibold">{HOURS}</p>
            </div>
            <div>
              <span className="text-gray-400 text-sm">Средний чек</span>
              <p className="font-semibold">5,000₸</p>
            </div>
            <div className="flex gap-3 pt-2">
              <a href={INSTAGRAM} target="_blank" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-xl text-sm font-medium hover:opacity-90">Instagram</a>
              <a href={MAP_2GIS} target="_blank" className="bg-green-600 text-white px-5 py-2 rounded-xl text-sm font-medium hover:opacity-90">2GIS</a>
              <a href={`https://wa.me/77075970337`} target="_blank" className="bg-emerald-600 text-white px-5 py-2 rounded-xl text-sm font-medium hover:opacity-90">WhatsApp</a>
            </div>
          </div>
          <div className="bg-white/5 rounded-3xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d71.376397!3d42.887063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDUzJzEzLjQiTiA3McKwMjInMzUuMCJF!5e0!3m2!1sru!2skz!4v1"
              width="100%" height="100%" style={{ minHeight: 300, border: 0 }} loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-500">
          <p>&copy; 2026 Sushi Love Taraz — {ADDRESS}</p>
        </div>
      </footer>
    </div>
  );
}
