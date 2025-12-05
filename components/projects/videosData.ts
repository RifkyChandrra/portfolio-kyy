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
    title: "Rakit Komputer",
    desc: "Langkah rakit Kompu dari nol sampai booting.",
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

  {
    id: "hw-3",
    title: "Maintance Laptop",
    desc: "Membersihkan dan ganti pasta Laptop",
    year: "2025",
    driveId: "1hmNDjmaJ-GueC_bzPxO2vsk8I8kGuw2_",
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

  {
    id: "sw-2",
    title: "Instal Ulang Windows",
    desc: "Menjelaskan langkah-langkah dalam melakukan install ulang windows",
    year: "2025",
    driveId: "1L_-LP9szlNOkvgnHr-IwuIld_3Sc0FLZ",
    thumb: "https://drive.google.com/thumbnail?id=1IqBJoipl1K4Hl-PwdYjKPX4X7S35KxOZ",
    category: "software",
  },

  {
    id: "sw-3",
    title: "Backup Data",
    desc: "Melakukan Melakukan recovery data",
    year: "2025",
    driveId: "1uF73XBzR0aKbDSbSwfOypaxC1lJ2cPZf",
    thumb: "https://drive.google.com/thumbnail?id=1IqBJoipl1K4Hl-PwdYjKPX4X7S35KxOZ",
    category: "software",
  },

  {
    id: "sw-4",
    title: "Konfigurasi Web Server & FTP Server pada Debian Linux 8",
    desc: "Video ini menampilkan langkah-langkah konfigurasi Web Server dan FTP Server pada sistem operasi Debian Linux 8",
    year: "2025",
    driveId: "1n9n6agvxrrbfkaODEKkaJpWptzkrG_IB",
    thumb: "https://drive.google.com/thumbnail?id=1IqBJoipl1K4Hl-PwdYjKPX4X7S35KxOZ",
    category: "software",
  },

  {
    id: "sw-5",
    title: "Instalasi & Konfigurasi Samba Server pada Debian Linux",
    desc: "Video ini menampilkan proses instalasi dan konfigurasi Samba Server pada sistem operasi Debian Linux",
    year: "2025",
    driveId: "1ZGUOs2hS02ZE18jJJUwxBAX19pCHm_ut",
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

  {
    id: "net-2",
    title: "Membuat Hotspot dan Extend Hotspot",
    desc: "Melakukan Konfigurasi Router TP-Link untuk Hotspot Wireless",
    year: "2025",
    driveId: "1daqehReMArEtliC-_PffCBU5voZALGeF",
    thumb: "https://drive.google.com/thumbnail?id=1Y4T1XO-7b8MINeSp7iCTM1hVFlis9Qp3",
    category: "jaringan",
  },

  {
    id: "net-3",
    title: "Basic Konfigurasi MikroTik, File Sharing, & Blokir YouTube",
    desc: "Video ini saya menampilkan demonstrasi dasar penggunaan MikroTik, dimulai dari basic configuration, pembuatan file sharing berbasis folder, hingga penerapan bandwidth management untuk memblokir akses YouTube.",
    year: "2025",
    driveId: "1Y4T1XO-7b8MINeSp7iCTM1hVFlis9Qp3",
    thumb: "https://drive.google.com/thumbnail?id=1Y4T1XO-7b8MINeSp7iCTM1hVFlis9Qp3",
    category: "jaringan",
  },

  {
    id: "net-4",
    title: "Konfigurasi VLAN dengan Trunking & Access Mode pada Cisco Packe",
    desc: "konfigurasi VLAN pada jaringan simulasi menggunakan Cisco Packet Tracer, baik dengan mode trunking maupun tanpa trunking (access mode)",
    year: "2025",
    driveId: "1c8Xh95einErE9yBNWWYIHhZgkzeh-7kv",
    thumb: "https://drive.google.com/thumbnail?id=1c8Xh95einErE9yBNWWYIHhZgkzeh-7kv",
    category: "jaringan",
  },
  {
    id: "net-5",
    title: "Instalasi Jaringan Gedung A & B Menggunakan Perangkat Jaringan Asli",
    desc: "Video ini merupakan materi edukasi yang menampilkan simulasi instalasi jaringan untuk Gedung A dan B menggunakan perangkat asli seperti Router MikroTik, Switch, dan TP-Link",
    year: "2025",
    driveId: "1qMhAmLKE_jIv-HexDT16qTtcrvQJEmZ9",
    thumb: "https://drive.google.com/thumbnail?id=1c8Xh95einErE9yBNWWYIHhZgkzeh-7kv",
    category: "jaringan",
  },

  {
    id: "net-6",
    title: "Implementasi Routing Multi-Area pada Cisco Packet Tracer",
    desc: "Video ini menampilkan proses routing pada topologi jaringan kompleks menggunakan Cisco Packet Tracer",
    year: "2025",
    driveId: "1GYJmX61DgSFEmed0YiJJJo5pJHsSvlq_",
    thumb: "https://drive.google.com/thumbnail?id=1c8Xh95einErE9yBNWWYIHhZgkzeh-7kv",
    category: "jaringan",
  },

  {
    id: "net-7",
    title: "Pembuatan Layanan ISP RT: FO, Pengkabelan, & Internet Voucher",
    desc: "Video ini merupakan materi edukasi yang menampilkan proses simulasi pembuatan layanan ISP untuk lingkungan RT, meliputi pemasangan kabel FO, penyusunan jaringan, serta pembuatan voucher internet untuk pelanggan",
    year: "2025",
    driveId: "1EJ5Blx5Al0_9FlPUQXAZqpXbsWIgMXAk",
    thumb: "https://drive.google.com/thumbnail?id=1c8Xh95einErE9yBNWWYIHhZgkzeh-7kv",
    category: "jaringan",
  },
];
