import React, { useState } from "react";
import type {FormEvent} from "react"

const ContactSection: React.FC = () => {

  const [nama, setNama] = useState<string>("")
  const [pesan, setPesan] = useState<string>("")
   
  const sendToWhatsapp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const phoneNumber = "6281214585010"

    const text = `Halo, saya ingin mengirim pesan:

Nama: ${nama}
Pesan: ${pesan}
    `.trim()

      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`

      window.open(url,"_blank")
  }


  return (
    <section id="contact" className="py-5 bg-white" >
      <div className="container">
        <h2 className="text-center fw-bold mb-4" style={{marginTop:"-100px"}}>Hubungi Kami</h2>
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

              <form onSubmit={sendToWhatsapp}>
                <div className="mb-3">
                  <label className="form-label">Nama Lengkap</label>
                  <input type="text" className="form-control" placeholder="Masukkan nama" value={nama} onChange={(e => setNama(e.target.value))} required/>
                  
                </div>

                
                <div className="mb-3">
                  <label className="form-label">Pesan</label>
                  <textarea className="form-control" rows={4} placeholder="Tulis pesan Anda" value={pesan} onChange={(e) => setPesan(e.target.value)}></textarea>
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
