import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Hubungi Kami</h2>
        <p className="text-center mb-5 text-muted">
          Silakan hubungi kami untuk pertanyaan, saran, atau kolaborasi kegiatan KKN.
        </p>

        <div className="row g-4">
          {/* Information */}
          <div className="col-md-5">
            <div className="p-4 rounded shadow-sm h-100 bg-light">
              <h4 className="fw-bold mb-3">Informasi Kontak</h4>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-geo-alt text-primary fs-4 me-3"></i>
                <p className="mb-0">Desa Sukamaju, Kecamatan Harmoni, Kabupaten Sentosa</p>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-envelope text-primary fs-4 me-3"></i>
                <p className="mb-0">kkn2025@universitas.ac.id</p>
              </div>

              <div className="d-flex align-items-start">
                <i className="bi bi-telephone text-primary fs-4 me-3"></i>
                <p className="mb-0">+62 812 3456 7890</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <div className="p-4 rounded shadow-sm bg-light">
              <h4 className="fw-bold mb-3">Kirim Pesan</h4>

              <form>
                <div className="mb-3">
                  <label className="form-label">Nama Lengkap</label>
                  <input type="text" className="form-control" placeholder="Masukkan nama" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="nama@email.com" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Pesan</label>
                  <textarea className="form-control" rows={4} placeholder="Tulis pesan Anda"></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Kirim Pesan
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
