import React, { useEffect } from "react";
import AOS from "aos";

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
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section id="program" className="py-5 modern-section">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Program Kegiatan KKN</h2>
        <p className="text-center mb-5 text-muted">
          Berikut adalah beberapa program utama yang dilaksanakan selama kegiatan KKN.
        </p>

        <div className="row g-4">
          {programList.map((program, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="modern-card shadow-sm p-4 text-center h-100">
                <div className="icon-wrapper mb-3">
                  <i className={`${program.icon} fs-1`}></i>
                </div>

                <h5 className="fw-bold">{program.title}</h5>
                <p className="text-muted">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kegiatan;
