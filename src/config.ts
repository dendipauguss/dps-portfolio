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
  projects: [
    {
      name: "Sistem Informasi Penjaminan Mutu Internal Universitas - UMC",
      description:
        "Sistem penjaminan mutu akademik berbasis web untuk Universitas Muhammadiyah Cirebon. Dasbor administrator telah dikembangkan dan dikelola untuk mengelola audit mutu internal, pemantauan kinerja dosen, dan laporan akademik. Situs publik menampilkan informasi umum, sementara fitur-fitur utama dapat diakses melalui login admin dan user di lingkungan universitas yang sudah didaftarkan.",
      link: "https://mutu.umc.ac.id",
      skills: ["CodeIgniter", "MySQL", "Bootstrap", "jQuery", "JSON"],
    },
    {
      name: "Sistem Bookstore",
      description:
        "Sistem manajemen bookstore berbasis JavaScript untuk pengelolaan inventori buku, transaksi penjualan, dan laporan. Saat ini berjalan secara lokal untuk pengembangan dan pengujian, belum di-publish online.",
      skills: ["JavaScript", "Express.js", "React", "MySQL"],
      image: "/images/bookstore.png",
      status: "Pengembangan Lokal",
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
