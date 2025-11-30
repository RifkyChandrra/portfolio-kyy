// /components/projects/videosData.ts
export type VideoItem = {
  id: string;
  title: string;
  desc?: string;
  year?: string;
  driveId: string;
  thumb?: string;
  category: "hardware" | "software" | "jaringan";
};

export const videos: VideoItem[] = [
  // Hardware
  {
    id: "hw-1",
    title: "Rakit PC - Tutorial Lengkap",
    desc: "Langkah rakit PC dari nol sampai booting.",
    year: "2025",
    driveId: "1jSQ6MD2k2GBB91VvgjZ_zQqLpLWjpgPC",
    thumb: "https://drive.google.com/thumbnail?id=1IqBJoipl1K4Hl-PwdYjKPX4X7S35KxOZ",
    category: "hardware",
  },

  {
    id: "hw-2",
    title: "Crimping Kabel",
    desc: "Melakukan Crimping kabel Straight dengan stadarisasi T568B",
    year: "2025",
    driveId: "1GUFlk0SgZtxRHkt3WJ34em_JHv9Tae1F",
    thumb: "https://drive.google.com/thumbnail?id=1IqBJoipl1K4Hl-PwdYjKPX4X7S35KxOZ",
    category: "hardware",
  },

  // Software
  {
    id: "sw-1",
    title: "Backup dan Restore Sistem",
    desc: "Menunjukkan langkah-langkah backup dan restore system",
    year: "2025",
    driveId: "1IqBJoipl1K4Hl-PwdYjKPX4X7S35KxOZ",
    thumb: "https://drive.google.com/thumbnail?id=1IqBJoipl1K4Hl-PwdYjKPX4X7S35KxOZ",
    category: "software",
  },

  // Jaringan
  {
    id: "net-1",
    title: "Konfigurasi Mikrotik Dasar",
    desc: "Menjelaskan konfigurasi dasar router Mikrotik",
    year: "2025",
    driveId: "1Y4T1XO-7b8MINeSp7iCTM1hVFlis9Qp3",
    thumb: "https://drive.google.com/thumbnail?id=1Y4T1XO-7b8MINeSp7iCTM1hVFlis9Qp3",
    category: "jaringan",
  },
];
