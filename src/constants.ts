import { ASSET_IMAGES } from './assets_config';

export const APP_CONFIG = {
  name: "Larissa Tour",
  subName: "Tour & Travel Service",
  logo: ASSET_IMAGES.logo,
  whatsapp: {
    number: "628881852152", // Ganti dengan nomor WhatsApp Anda
    defaultMessage: "Halo Larissa Tour, saya ingin bertanya tentang layanan Umroh.",
    buttons: {
      navbar: "WhatsApp",
      hero: "Hubungi Konsultan",
      packages: "Pesan Sekarang",
      cta: "Chat ke WhatsApp",
      floating: "Tanya Admin"
    }
  },
  images: {
    hero: ASSET_IMAGES.heroBg,
    packageHemat: ASSET_IMAGES.packages.packageHemat,
    packageReguler: ASSET_IMAGES.packages.packageReguler,
    packageTurki: ASSET_IMAGES.packages.packageTurki,
    gallery: ASSET_IMAGES.gallery
  }
};

