import React from "react";
import "../index.css"; // import CSS eksternal

interface ProgramItem {
  title: string;
  description: string;
  icon: string;
}

const programList: ProgramItem[] = [
  {
    title: "Pendidikan & Literasi",
    description:
      "Program peningkatan literasi melalui bimbingan belajar, pelatihan komputer, dan perpustakaan desa.",
    icon: "bi bi-book"
  },
  {
    title: "Kesehatan Masyarakat",
    description:
      "Penyuluhan kesehatan, senam bersama, pemeriksaan kesehatan, dan PHBS.",
    icon: "bi bi-heart-pulse"
  },
  {
    title: "Lingkungan & Kebersihan",
    description:
      "Kerja bakti, pengolahan sampah organik, penghijauan desa, dan pengadaan tempat sampah.",
    icon: "bi bi-tree"
  },
  {
    title: "Pemberdayaan Ekonomi",
    description:
      "Pelatihan UMKM, digital marketing, pengemasan produk, dan pemasaran online.",
    icon: "bi bi-graph-up-arrow"
  }
];

const Kegiatan: React.FC = () => {
  return (
    <section id="program" className="modern-section">
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Program Kegiatan KKN</h2>
        <p className="text-center mb-5 text-muted fs-5">
          Berikut adalah beberapa program utama yang dilaksanakan selama kegiatan KKN.
        </p>

        <div className="row g-4">
          {programList.map((program, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-3 fade-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="modern-card shadow p-4 text-center h-100">
                <div className="icon-wrapper mb-3 text-primary">
                  <i className={`${program.icon} fs-2`}></i>
                </div>

                <h5 className="fw-semibold mb-3">{program.title}</h5>
                <p className="text-secondary">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kegiatan;
