import { ASSET_IMAGES } from './assets_config';

export interface NavLink {
  name: string;
  href: string;
}

export interface StatItem {
  label: string;
  val: string;
}

export interface UspItem {
  title: string;
  desc: string;
}

export interface PackageItem {
  title: string;
  price: string;
  duration: string;
  hotel: string;
  tag?: string;
  color: string;
  image: string;
  benefits: string[];
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
  stars: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AppContent {
  navLinks: NavLink[];
  hero: {
    badge: string;
    titleFirst: string;
    titleHighlight: string;
    titleLast: string;
    paragraph: string;
    buttonPrimary: string;
  };
  stats: StatItem[];
  usp: {
    subheading: string;
    heading: string;
    description: string;
    items: UspItem[];
  };
  packages: {
    subheading: string;
    heading: string;
    description: string;
    items: PackageItem[];
  };
  testimonials: {
    subheading: string;
    heading: string;
    featuredQuote: string;
    featuredAuthor: string;
    featuredRole: string;
    featuredAvatar: string;
    featuredStars: number;
  };
  faq: {
    subheading: string;
    heading: string;
    items: FaqItem[];
  };
  cta: {
    heading: string;
    paragraph: string;
    subtext: string;
  };
  footer: {
    description: string;
    navHeading: string;
    officeHeading: string;
    address: string;
    phone: string;
    copyright: string;
    termsText: string;
    privacyText: string;
    socials: {
      facebook: string;
      instagram: string;
      youtube: string;
    };
  };
}

export const APP_CONTENT: AppContent = {
  navLinks: [
    { name: 'Beranda', href: '#home' },
    { name: 'Paket Umroh', href: '#packages' },
    { name: 'Kenapa Kami', href: '#usp' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ],
  hero: {
    badge: "Berizin Resmi & Amanah",
    titleFirst: "Menjemput Panggilan",
    titleHighlight: "Baitullah",
    titleLast: "dengan Tenang",
    paragraph: "Rasakan kekhusyukan ibadah dengan pendampingan profesional. Larissa Tour siap membimbing langkah Anda menuju tanah suci secara aman, nyaman, dan penuh berkah.",
    buttonPrimary: "Lihat Paket Umroh"
  },
  stats: [
    { label: 'Jamaah Terlayani', val: '10.000+' },
    { label: 'Tingkat Keberangkatan', val: '100%' },
    { label: 'Hotel Bintang', val: '4 & 5' },
    { label: 'Tahun Pengalaman', val: '12th' },
  ],
  usp: {
    subheading: "Keunggulan Kami",
    heading: "Mengapa Memilih Larissa Tour?",
    description: "Kami memahami bahwa Umroh bukan sekadar perjalanan, melainkan perjalanan spiritual yang sangat berharga. Kami dedikasikan layanan terbaik untuk kenyamanan Anda.",
    items: [
      {
        title: 'Kepastian Keberangkatan',
        desc: 'Bukan sekadar janji. Kami menjamin jadwal keberangkatan Anda sesuai dengan waktu yang telah ditentukan.'
      },
      {
        title: 'Hotel Dekat Masjid',
        desc: 'Mengutamakan efisiensi waktu ibadah dengan pilihan hotel yang berjarak langkah kaki ke Masjidil Haram & Nabawi.'
      },
      {
        title: 'Pembimbing Berpengalaman',
        desc: 'Dibimbing oleh Muthawif dan Ustadz muthmainnah yang berpengalaman dan menguasai fiqih ibadah secara mendalam.'
      },
      {
        title: 'Maskapai Terbaik',
        desc: 'Menggunakan maskapai premium seperti Saudi Arabian Airlines atau Garuda Indonesia untuk kenyamanan terbang Anda.'
      },
      {
        title: 'Legalitas Resmi',
        desc: 'Terdaftar secara resmi di Kemenag RI, memberikan rasa aman dan jaminan perlindungan bagi setiap jamaah.'
      },
      {
        title: 'Layanan 24/7',
        desc: 'Tim representatif kami siap membantu kebutuhan Anda selama 24 jam penuh sejak pendaftaran hingga kepulangan.'
      }
    ]
  },
  packages: {
    subheading: "Pilihan Paket",
    heading: "Temukan Paket Ibadah Sesuai Kebutuhan Anda",
    description: "Semua paket sudah termasuk Visa, Tiket PP, Akomodasi, Makan 3x, dan Handling.",
    items: [
      {
        title: "Bersama Ustd. Abdul Wafi",
        price: "33.980",
        duration: "9",
        hotel: "Bintang 3 (Radius 500m)",
        tag: "Terlaris",
        color: "bg-emerald-500",
        image: ASSET_IMAGES.packages.packageHemat,
        benefits: [
          'Visa Umrah',
          'Sertifikat Umrah',
          'City Tour Makkah Madinah',
          'Perlengkapan Umroh Lengkap',
          'Muthawif Profesional'
        ]
      },
      {
        title: "Group 12D",
        price: "38.980",
        duration: "19-30 Agustus 2026",
        hotel: "Bintang 4 (Radius 200m)",
        color: "bg-accent",
        image: ASSET_IMAGES.packages.packageReguler,
        benefits: [
          'Penerbangan GARUDA INDONESIA Airlines',
          'Kamar Triple/Double',
          'Ziarah City Tour',
          'Kereta Cepat Saudi',
          'Makan Full Menu Indonesia'
        ]
      },
      {
        title: "Padel Uhud (city Tour Thaif)",
        price: "36.980",
        duration: "15-23 Nov 2026",
        hotel: "Bintang 5",
        tag: "Promo Special",
        color: "bg-blue-600",
        image: ASSET_IMAGES.packages.packageTurki,
        benefits: [
          'Wisata Istanbul & Bursa',
          'Hagia Sophia & Blue Mosque',
          'Penerbangan GARUDA INDONESIA Airlines',
          'Hotel VIP Bintang 5',
          'Wisata Kuliner Khas Turki'
        ]
      }
    ]
  },
  testimonials: {
    subheading: "Testimoni Jamaah",
    heading: "Cerita Syukur Keluarga Larissa",
    featuredQuote: "Pengalaman spiritual yang tak terlupakan. Dari persiapan hingga kepulangan, tim Larissa sangat sigap membantu. Hotelnya benar-benar dekat masjid, sangat memudahkan orang tua kami.",
    featuredAuthor: "H. Ahmad Fauzi & Keluarga",
    featuredRole: "Jamaah Keberangkatan Februari 2024",
    featuredAvatar: ASSET_IMAGES.testimonials.featuredAvatar,
    featuredStars: 5
  },
  faq: {
    subheading: "Pertanyaan Umum",
    heading: "Yang Sering Ditanyakan",
    items: [
      {
        question: "Apa saja dokumen yang perlu disiapkan?",
        answer: "Dokumen utama adalah Paspor yang masih berlaku minimal 7 bulan, Pas foto latar putih, Buku Nikah (untuk suami istri), Akta Kelahiran (untuk anak), dan bukti vaksin sesuai regulasi terbaru."
      },
      {
        question: "Apakah bisa mendaftar jika saya di luar kota?",
        answer: "Sangat bisa. Larissa Tour melayani jamaah dari seluruh Indonesia. Proses pendaftaran dan administrasi dokumen bisa dilakukan secara online melalui WhatsApp dan pengiriman dokumen via kurir terpercaya."
      },
      {
        question: "Kapan waktu terbaik untuk mendaftar?",
        answer: "Idealnya 4-6 bulan sebelum keberangkatan untuk mendapatkan harga terbaik dan proses dokumen yang lebih tenang. Namun, kami juga melayani pendaftaran last-minute jika slot masih tersedia."
      },
      {
        question: "Apakah harga paket sudah termasuk asuransi?",
        answer: "Ya, semua paket kami sudah termasuk asuransi perjalanan internasional yang mencakup perlindungan kesehatan selama menjalankan ibadah."
      },
      {
        question: "Bagaimana sistem pembayarannya?",
        answer: "Cukup DP (Down Payment) sebesar Rp 5.000.000 untuk mengamankan slot. Pelunasan bisa dilakukan bertahap hingga maksimal 1 bulan sebelum tanggal keberangkatan."
      }
    ]
  },
  cta: {
    heading: "Niatkan Sekarang, Kami Siap Membantu Mewujudkannya.",
    paragraph: "Jangan tunda lagi panggilan Baitullah. Hubungi konsultan kami untuk konsultasi gratis mengenai jadwal dan rencana ibadah Anda.",
    subtext: "15 jamaah mendaftar hari ini"
  },
  footer: {
    description: "Solusi Perjalanan Umroh & Haji Plus Terpercaya. Beriman, Amanah, dan Berpengalaman dalam melayani tamu Allah dengan pelayanan sepenuh hati.",
    navHeading: "Navigasi",
    socials: {
      facebook: "#",
      instagram: "#",
      youtube: "#"
    },
    officeHeading: "Kantor Pusat",
    address: "Jl. Syuhada No. 12, Kebayoran Baru, Jakarta Selatan, 12160",
    phone: "+62 21 8888 9999",
    copyright: "© 2024 Larissa Tour and Travel. All Rights Reserved.",
    termsText: "Syarat & Ketentuan",
    privacyText: "Kebijakan Privasi"
  }
};
