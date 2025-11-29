import React from "react";

interface ProgramItem {
  title: string;
  description: string;
  icon: string; // bootstrap icon class
}

const programList: ProgramItem[] = [
  {
    title: "Pendidikan & Literasi",
    description: "Program peningkatan literasi melalui bimbingan belajar, pelatihan komputer, dan perpustakaan desa.",
    icon: "bi bi-book"
  },
  {
    title: "Kesehatan Masyarakat",
    description: "Penyuluhan kesehatan, senam bersama, pemeriksaan kesehatan, dan PHBS.",
    icon: "bi bi-heart-pulse"
  },
  {
    title: "Lingkungan & Kebersihan",
    description: "Kerja bakti, pengolahan sampah organik, penghijauan desa, dan pengadaan tempat sampah.",
    icon: "bi bi-tree"
  },
  {
    title: "Pemberdayaan Ekonomi",
    description: "Pelatihan UMKM, digital marketing, pengemasan produk, dan pemasaran online.",
    icon: "bi bi-graph-up-arrow"
  }
];

const Kegiatan: React.FC = () => {
  return (
    <section id="program" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Program Kegiatan KKN</h2>
        <p className="text-center mb-5">
          Berikut adalah beberapa program utama yang dilaksanakan selama kegiatan KKN.
        </p>

        <div className="row g-4">
          {programList.map((program, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm p-3">
                <div className="text-center mb-3">
                  <i className={`${program.icon} fs-1 text-primary`}></i>
                </div>
                <h5 className="card-title text-center fw-bold">{program.title}</h5>
                <p className="card-text text-center">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kegiatan;
