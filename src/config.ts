export const siteConfig = {
  name: "Dendi Paugus Sukmaya",
  title: "Junior Software Engineer | Junior Web Developer",
  description: "Portfolio website of Ryan Fitzgerald",
  accentColor: "#1d4ed8",
  social: {
    email: "dendipauguss1111@gmail.com",
    linkedin: "https://www.linkedin.com/in/dendi-paugus-sukmaya",
    instagram: "https://www.instagram.com/_denpau89/",
    github: "https://github.com/dendipauguss",
  },
  aboutMe:
    "Saya adalah lulusan baru dengan gelar Sarjana Teknik Informatika dari Universitas Majalengka. Saya memiliki ketertarikan untuk terus mengikuti perkembangan teknologi terbaru serta menerapkan prinsip-prinsip object-oriented dalam pengembangan perangkat lunak. Saya bercita-cita berkarier di bidang teknologi informasi, khususnya dalam pengembangan dan pemeliharaan aplikasi web. Saya menguasai teknologi pengembangan full-stack seperti Laravel, CodeIgniter, serta ekosistem JavaScript modern termasuk React.js, Express.js, dan Next.js. Kemampuan inti saya mencakup PHP, JavaScript, Node.js, dan arsitektur aplikasi web modern.",
  skills: ["Bootstrap", "PHP", "Codeigniter", "Javascript", "Node.js"],
  image: "./images/img-profile.png",
  projects: [
    {
      name: "Sistem Informasi Penjaminan Mutu Internal Universitas - UMC",
      description:
        "Sistem penjaminan mutu akademik berbasis web untuk Universitas Muhammadiyah Cirebon. Dasbor administrator telah dikembangkan dan dikelola untuk mengelola audit mutu internal, pemantauan kinerja dosen, dan laporan akademik. Situs publik menampilkan informasi umum, sementara fitur-fitur utama dapat diakses melalui login admin dan user di lingkungan universitas yang sudah didaftarkan.",
      link: "https://mutu.umc.ac.id",
      image: "./images/portofolio-sipeka.png",
      skills: ["CodeIgniter", "MySQL", "Bootstrap", "jQuery", "JSON"],
    },
    {
      name: "Sistem Bookstore",
      description:
        "Sistem manajemen bookstore berbasis JavaScript untuk pengelolaan inventori buku, transaksi penjualan, dan laporan. Saat ini berjalan secara lokal untuk pengembangan dan pengujian, belum di-publish online.",
      image: "./images/portofolio-bookstore.png",
      skills: ["JavaScript", "Express.js", "React", "MySQL"],
    },
  ],
  experience: [
    {
      company: "Indobot Academy - Studi Independen/Magang (Peserta)",
      title: "Software Engineer",
      dateRange: "Sep 2022 - Des 2022",
      bullets: [
        "Membuat perangkat prototype Internet of Things yaitu Smart Monitoring System of Cigarette Smoke",
        "Menjadi Software Engineer dalam tim projek IoT",
        "Perangkat IoT dalam jenis Smart Health untuk tujuan meminimalisir asap rokok di ruangan",
      ],
    },
  ],
  education: [
    {
      school: "Majalengka University",
      degree: "Bachelor of Computer Science in Informatics",
      dateRange: "2020 - 2025",
      achievements: [
        "Graduated with a GPA of 3.90",
        "Participated in the BPJS community (Bootstrap, PHP, JavaScript)",
        "Participated in the Windstand Robotic community",
      ],
    },
    {
      school: "Digitalent Scholarship",
      degree: "Junior Web Developer Competency Certificate",
      dateRange: "2023",
      achievements: [
        "Create a simple web application using basic HTML, CSS, JavaScript, and PHP programming",
        "It must include CRUD functions",
        "It also includes API features and a MySQL database",
      ],
    },
  ],
};
