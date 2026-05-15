import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Users, 
  Plane, 
  Hotel, 
  ChevronDown, 
  Menu, 
  X, 
  Star,
  Quote
} from 'lucide-react';
import { APP_CONFIG } from './constants';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Kenapa Kami', href: '#usp' },
    { name: 'Paket Umroh', href: '#packages' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-md border-b border-primary/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-xl shadow-md border border-white/50 flex items-center justify-center overflow-hidden w-12 h-12 shrink-0">
            <img 
              src={APP_CONFIG.logo} 
              alt={`${APP_CONFIG.name} Logo`} 
              className="w-full h-full object-contain scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col items-start leading-tight">
             <div className="flex items-baseline gap-1">
               <span className={`text-xl font-serif font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
                 {APP_CONFIG.name.split(' ')[0]}
               </span>
               <span className="text-accent italic font-serif text-xl font-medium">{APP_CONFIG.name.split(' ')[1]}</span>
             </div>
             <div className={`text-[8px] uppercase tracking-[0.25em] font-bold ${isScrolled ? 'text-gray-400' : 'text-accent/80'}`}>
               {APP_CONFIG.subName}
             </div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-md px-2 py-1 ${isScrolled ? 'text-primary' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`https://wa.me/${APP_CONFIG.whatsapp.number}?text=${encodeURIComponent(APP_CONFIG.whatsapp.defaultMessage)}`} 
            className="px-6 py-2.5 bg-accent text-primary font-bold rounded-full text-sm hover:bg-white transition-all shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.206-.24-.579-.48-.5-.669-.51-.174-.008-.375-.01-.576-.01-.201 0-.527.075-.804.375-.276.3-.1.731-.1 1.2s.33 3.59.407 3.7c.077.11 1.56 2.382 3.778 3.336 2.218.954 2.218.636 2.615.594.397-.042 1.282-.524 1.464-1.031.182-.507.182-.941.127-1.031-.054-.09-.201-.148-.498-.297zM12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.12 1.512 5.861L0 24l6.335-1.662C7.994 23.385 9.923 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.98 9.98 0 0 1-5.127-1.403l-.367-.218-3.81 1 1.018-3.71-.24-.381A9.982 9.982 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/></svg>
            {APP_CONFIG.whatsapp.buttons.navbar}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className={isScrolled ? 'text-primary' : 'text-white'} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-primary z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-6 items-center flex-grow justify-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-serif text-white hover:text-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={`https://wa.me/${APP_CONFIG.whatsapp.number}?text=${encodeURIComponent(APP_CONFIG.whatsapp.defaultMessage)}`} 
                className="mt-8 px-10 py-4 bg-[#25D366] text-white font-bold rounded-full text-lg shadow-xl flex items-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.206-.24-.579-.48-.5-.669-.51-.174-.008-.375-.01-.576-.01-.201 0-.527.075-.804.375-.276.3-.1.731-.1 1.2s.33 3.59.407 3.7c.077.11 1.56 2.382 3.778 3.336 2.218.954 2.218.636 2.615.594.397-.042 1.282-.524 1.464-1.031.182-.507.182-.941.127-1.031-.054-.09-.201-.148-.498-.297zM12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.12 1.512 5.861L0 24l6.335-1.662C7.994 23.385 9.923 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.98 9.98 0 0 1-5.127-1.403l-.367-.218-3.81 1 1.018-3.71-.24-.381A9.982 9.982 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/></svg>
                {APP_CONFIG.whatsapp.buttons.navbar}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const PackageCard = ({ title, price, duration, hotel, color, benefits, image }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full"
    >
      <div className="h-48 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className={`absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-bold text-white ${color}`}>
          Terlaris
        </div>
      </div>
      <div className="p-8 flex-grow flex flex-col">
        <h3 className="text-2xl font-serif font-bold text-primary mb-2">{title}</h3>
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-sm text-gray-400 font-medium font-sans">Mulai</span>
          <span className="text-3xl font-bold text-primary font-sans">Rp {price}jt</span>
        </div>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <Clock size={18} className="text-accent" />
            <span className="text-sm text-gray-600">Durasi {duration} Hari</span>
          </div>
          <div className="flex items-center gap-3">
            <Hotel size={18} className="text-accent" />
            <span className="text-sm text-gray-600">Hotel {hotel}</span>
          </div>
          <div className="pt-4 border-t border-gray-50 space-y-3">
             {benefits.map((b: string) => (
               <div key={b} className="flex items-start gap-2">
                 <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                 <span className="text-xs text-gray-500">{b}</span>
               </div>
             ))}
          </div>
        </div>

        <div className="mt-auto">
          <a 
            href={`https://wa.me/${APP_CONFIG.whatsapp.number}?text=Haloo%20Larissa%20Tour,%20saya%20tertarik%20dengan%20${encodeURIComponent(title)}`}
            className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white text-center rounded-xl font-bold hover:bg-primary-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.206-.24-.579-.48-.5-.669-.51-.174-.008-.375-.01-.576-.01-.201 0-.527.075-.804.375-.276.3-.1.731-.1 1.2s.33 3.59.407 3.7c.077.11 1.56 2.382 3.778 3.336 2.218.954 2.218.636 2.615.594.397-.042 1.282-.524 1.464-1.031.182-.507.182-.941.127-1.031-.054-.09-.201-.148-.498-.297zM12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.12 1.512 5.861L0 24l6.335-1.662C7.994 23.385 9.923 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.98 9.98 0 0 1-5.127-1.403l-.367-.218-3.81 1 1.018-3.71-.24-.381A9.982 9.982 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/></svg>
            {APP_CONFIG.whatsapp.buttons.packages}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-primary">{question}</span>
        <ChevronDown className={`text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-accent/30 text-[15px]">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={APP_CONFIG.images.hero}
            alt="Kaaba Mecca"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              Berizin Resmi & Amanah
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-[1.1]">
              Menjemput Panggilan <br /> 
              <span className="text-accent italic font-medium tracking-wide">Baitullah</span> dengan Tenang
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Rasakan kekhusyukan ibadah dengan pendampingan profesional. <br className="hidden md:block" />
              Larissa Tour siap membimbing langkah Anda menuju tanah suci secara aman, nyaman, dan penuh berkah.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#packages" 
                className="px-10 py-4 bg-accent text-primary font-bold rounded-full hover:scale-105 transition-transform shadow-2xl flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              >
                Lihat Paket Umroh
                <Plane size={20} />
              </a>
              <a 
                href={`https://wa.me/${APP_CONFIG.whatsapp.number}?text=${encodeURIComponent(APP_CONFIG.whatsapp.defaultMessage)}`} 
                className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {APP_CONFIG.whatsapp.buttons.hero}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-50 hidden md:block"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Stats/Badges */}
      <section className="py-12 bg-cream border-y border-accent/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Jamaah Terlayani', val: '10.000+' },
              { label: 'Tingkat Keberangkatan', val: '100%' },
              { label: 'Hotel Bintang', val: '4 & 5' },
              { label: 'Tahun Pengalaman', val: '12th' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-serif font-bold text-primary">{s.val}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section id="usp" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4">Keunggulan Kami</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Mengapa Memilih Larissa Tour?</h3>
            <p className="text-gray-600">
              Kami memahami bahwa Umroh bukan sekadar perjalanan, melainkan perjalanan spiritual yang sangat berharga. Kami dedikasikan layanan terbaik untuk kenyamanan Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <ShieldCheck size={40} />,
                title: 'Kepastian Keberangkatan',
                desc: 'Bukan sekadar janji. Kami menjamin jadwal keberangkatan Anda sesuai dengan waktu yang telah ditentukan.'
              },
              {
                icon: <Hotel size={40} />,
                title: 'Hotel Dekat Masjid',
                desc: 'Mengutamakan efisiensi waktu ibadah dengan pilihan hotel yang berjarak langkah kaki ke Masjidil Haram & Nabawi.'
              },
              {
                icon: <Users size={40} />,
                title: 'Pembimbing Berpengalaman',
                desc: 'Dibimbing oleh Muthawif dan Ustadz muthmainnah yang berpengalaman dan menguasai fiqih ibadah secara mendalam.'
              },
              {
                icon: <Plane size={40} />,
                title: 'Maskapai Terbaik',
                desc: 'Menggunakan maskapai premium seperti Saudi Arabian Airlines atau Garuda Indonesia untuk kenyamanan terbang Anda.'
              },
              {
                icon: <CheckCircle2 size={40} />,
                title: 'Legalitas Resmi',
                desc: 'Terdaftar secara resmi di Kemenag RI, memberikan rasa aman dan jaminan perlindungan bagi setiap jamaah.'
              },
              {
                icon: <Phone size={40} />,
                title: 'Layanan 24/7',
                desc: 'Tim representatif kami siap membantu kebutuhan Anda selama 24 jam penuh sejak pendaftaran hingga kepulangan.'
              }
            ].map((usp, i) => (
              <motion.div 
                key={usp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:bg-cream"
              >
                <div className="text-accent mb-6 transition-transform group-hover:scale-110 duration-300">
                  {usp.icon}
                </div>
                <h4 className="text-xl font-serif font-bold text-primary mb-4">{usp.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {usp.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <h2 className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4">Pilihan Paket</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary">Temukan Paket Ibadah <br />Sesuai Kebutuhan Anda</h3>
            </div>
            <p className="text-gray-600 md:max-w-xs font-medium">
              Semua paket sudah termasuk Visa, Tiket PP, Akomodasi, Makan 3x, dan Handling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PackageCard 
              title="Paket Hemat"
              price="28.5"
              duration="9"
              hotel="Bintang 3 (Radius 500m)"
              color="bg-emerald-500"
              image={APP_CONFIG.images.packageHemat}
              benefits={[
                'Maskapai Ekonomi',
                'Kamar Quad (Ber-4)',
                'Bus AC Terbaru',
                'Perlengkapan Umroh Lengkap',
                'Muthawif Profesional'
              ]}
            />
            <PackageCard 
              title="Paket Reguler"
              price="34.9"
              duration="12"
              hotel="Bintang 4 (Radius 200m)"
              color="bg-accent"
              image={APP_CONFIG.images.packageReguler}
              benefits={[
                'Saudi Airlines (Direct)',
                'Kamar Triple/Double',
                'Ziarah City Tour',
                'Kereta Cepat Saudi',
                'Makan Full Menu Indonesia'
              ]}
            />
            <PackageCard 
              title="Plus Turki"
              price="42.5"
              duration="15"
              hotel="Bintang 5 (Depan Masjid)"
              color="bg-blue-600"
              image={APP_CONFIG.images.packageTurki}
              benefits={[
                'Wisata Istanbul & Bursa',
                'Hagia Sophia & Blue Mosque',
                'Penerbangan Turkish Airlines',
                'Hotel VIP Bintang 5',
                'Wisata Kuliner Khas Turki'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4">Testimoni Jamaah</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Cerita Syukur <br />Keluarga Larissa</h3>
              <p className="text-gray-600 mb-10 text-lg">
                "Pengalaman spiritual yang tak terlupakan. Dari persiapan hingga kepulangan, tim Larissa sangat sigap membantu. Hotelnya benar-benar dekat masjid, sangat memudahkan orang tua kami."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://i.pravatar.cc/150?u=haji" 
                  alt="Testimonial" 
                  className="w-16 h-16 rounded-full border-2 border-accent"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-primary">H. Ahmad Fauzi & Keluarga</div>
                  <div className="text-sm text-gray-500 italic">Jamaah Keberangkatan Februari 2024</div>
                  <div className="flex text-accent mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                 {APP_CONFIG.images.gallery.map((img, i) => (
                   <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className={`rounded-2xl overflow-hidden shadow-lg ${i % 2 !== 0 ? 'mt-8' : ''}`}
                   >
                     <img src={img} alt="Gallery" className="w-full h-full object-cover aspect-square" referrerPolicy="no-referrer" />
                   </motion.div>
                 ))}
              </div>
              <div className="absolute -top-6 -right-6 p-6 bg-accent rounded-full shadow-2xl hidden md:block">
                <Quote size={32} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4">Pertanyaan Umum</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary">Yang Sering Ditanyakan</h3>
          </div>

          <div className="space-y-2">
            <FAQItem 
              question="Apa saja dokumen yang perlu disiapkan?" 
              answer="Dokumen utama adalah Paspor yang masih berlaku minimal 7 bulan, Pas foto latar putih, Buku Nikah (untuk suami istri), Akta Kelahiran (untuk anak), dan bukti vaksin sesuai regulasi terbaru." 
            />
            <FAQItem 
              question="Apakah bisa mendaftar jika saya di luar kota?" 
              answer="Sangat bisa. Larissa Tour melayani jamaah dari seluruh Indonesia. Proses pendaftaran dan administrasi dokumen bisa dilakukan secara online melalui WhatsApp dan pengiriman dokumen via kurir terpercaya." 
            />
            <FAQItem 
              question="Kapan waktu terbaik untuk mendaftar?" 
              answer="Idealnya 4-6 bulan sebelum keberangkatan untuk mendapatkan harga terbaik dan proses dokumen yang lebih tenang. Namun, kami juga melayani pendaftaran last-minute jika slot masih tersedia." 
            />
            <FAQItem 
              question="Apakah harga paket sudah termasuk asuransi?" 
              answer="Ya, semua paket kami sudah termasuk asuransi perjalanan internasional yang mencakup perlindungan kesehatan selama menjalankan ibadah." 
            />
            <FAQItem 
              question="Bagaimana sistem pembayarannya?" 
              answer="Cukup DP (Down Payment) sebesar Rp 5.000.000 untuk mengamankan slot. Pelunasan bisa dilakukan bertahap hingga maksimal 1 bulan sebelum tanggal keberangkatan." 
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="https://www.transparenttextures.com/patterns/black-linen.png" alt="Pattern" className="w-full h-full" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
            Niatkan Sekarang, <br />Kami Siap Membantu Mewujudkannya.
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Jangan tunda lagi panggilan Baitullah. Hubungi konsultan kami untuk konsultasi gratis mengenai jadwal dan rencana ibadah Anda.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`https://wa.me/${APP_CONFIG.whatsapp.number}?text=${encodeURIComponent(APP_CONFIG.whatsapp.defaultMessage)}`} 
              className="px-12 py-5 bg-[#25D366] text-white font-bold rounded-full text-xl hover:bg-[#128C7E] transition-all shadow-glow flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 w-full sm:w-auto"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.206-.24-.579-.48-.5-.669-.51-.174-.008-.375-.01-.576-.01-.201 0-.527.075-.804.375-.276.3-.1.731-.1 1.2s.33 3.59.407 3.7c.077.11 1.56 2.382 3.778 3.336 2.218.954 2.218.636 2.615.594.397-.042 1.282-.524 1.464-1.031.182-.507.182-.941.127-1.031-.054-.09-.201-.148-.498-.297zM12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.12 1.512 5.861L0 24l6.335-1.662C7.994 23.385 9.923 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.98 9.98 0 0 1-5.127-1.403l-.367-.218-3.81 1 1.018-3.71-.24-.381A9.982 9.982 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/></svg>
              {APP_CONFIG.whatsapp.buttons.cta}
            </a>
            <div className="flex items-center gap-2 text-white/70">
              <span className="flex -space-x-2">
                {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-8 h-8 rounded-full border-2 border-primary" />)}
              </span>
              <span className="text-sm font-medium">15 jamaah mendaftar hari ini</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#032e23] text-white/80 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-4 mb-8">
                 <div className="bg-white p-2 rounded-2xl shadow-xl w-16 h-16 flex items-center justify-center overflow-hidden shrink-0">
                    <img 
                      src={APP_CONFIG.logo} 
                      alt={`${APP_CONFIG.name} Logo`} 
                      className="w-full h-full object-contain scale-110" 
                      referrerPolicy="no-referrer"
                    />
                 </div>
                 <div className="flex flex-col items-start leading-tight">
                   <div className="flex items-baseline gap-1">
                     <span className="text-2xl font-serif font-bold tracking-tight text-white">
                        {APP_CONFIG.name.split(' ')[0]}
                     </span>
                     <span className="text-accent italic font-serif text-2xl font-medium">{APP_CONFIG.name.split(' ')[1]}</span>
                   </div>
                   <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent/60 mt-1">
                     {APP_CONFIG.subName}
                   </div>
                 </div>
              </div>
              <p className="text-sm leading-relaxed mb-8 max-w-sm">
                Solusi Perjalanan Umroh & Haji Plus Terpercaya. Beriman, Amanah, dan Berpengalaman dalam melayani tamu Allah dengan pelayanan sepenuh hati.
              </p>
              <div className="flex gap-4">
                {['facebook', 'instagram', 'youtube'].map(s => (
                  <a key={s} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors uppercase text-[10px] font-bold tracking-tighter">{s}</a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Navigasi</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-accent">Beranda</a></li>
                <li><a href="#usp" className="hover:text-accent">Kenapa Kami</a></li>
                <li><a href="#packages" className="hover:text-accent">Paket Umroh</a></li>
                <li><a href="#testimonials" className="hover:text-accent">Testimoni</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Kantor Pusat</h4>
              <div className="space-y-4 text-sm">
                <p className="flex items-start gap-2">
                  <MapPin className="shrink-0 text-accent" size={18} />
                  Jl. Syuhada No. 12, Kebayoran Baru, <br />Jakarta Selatan, 12160
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="shrink-0 text-accent" size={18} />
                  +62 21 8888 9999
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
            <p>© 2024 Larissa Tour and Travel. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40">
        <a 
          href={`https://wa.me/${APP_CONFIG.whatsapp.number}?text=${encodeURIComponent(APP_CONFIG.whatsapp.defaultMessage)}`} 
          className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 ring-offset-white relative group"
          aria-label="Chat WhatsApp"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.206-.24-.579-.48-.5-.669-.51-.174-.008-.375-.01-.576-.01-.201 0-.527.075-.804.375-.276.3-.1.731-.1 1.2s.33 3.59.407 3.7c.077.11 1.56 2.382 3.778 3.336 2.218.954 2.218.636 2.615.594.397-.042 1.282-.524 1.464-1.031.182-.507.182-.941.127-1.031-.054-.09-.201-.148-.498-.297zM12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.12 1.512 5.861L0 24l6.335-1.662C7.994 23.385 9.923 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.98 9.98 0 0 1-5.127-1.403l-.367-.218-3.81 1 1.018-3.71-.24-.381A9.982 9.982 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/></svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center font-bold">1</span>
          
          {/* Tooltip */}
          <span className="absolute left-0 -translate-x-[110%] bg-white text-primary text-xs font-bold px-3 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100 pointer-events-none">
            {APP_CONFIG.whatsapp.buttons.floating}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[50%] w-2 h-2 bg-white border-r border-t border-gray-100 rotate-45"></div>
          </span>
        </a>
      </div>
    </div>
  );
}
