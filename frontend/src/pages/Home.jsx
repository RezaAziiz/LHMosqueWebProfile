import React, { useEffect, useRef } from "react";
import SplitText from "../components/SplitText";
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";
import "../index.css";
import CircularGallery from "../components/Gallery";

const agendaData = [
  {
    title: "Lorem Ipsum dolor sit amet",
    desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elit non diam porttitor cursus...",
    img: "", // Ganti dengan path gambar jika ada
  },
  // Tambahkan data agenda lain di sini
  {
    title: "Kegiatan 2",
    desc: "Deskripsi kegiatan 2...",
    img: "",
  },
  {
    title: "Kegiatan 3",
    desc: "Deskripsi kegiatan 3...",
    img: "",
  },
  {
    title: "Kegiatan 4",
    desc: "Deskripsi kegiatan 4...",
    img: "",
  },
];

const Home = () => {
  const flickityRef = useRef(null);

  useEffect(() => {
    const flkty = new Flickity(flickityRef.current, {
      cellAlign: "left",
      contain: true,
      pageDots: true,
      autoPlay: 2500,
      wrapAround: true,
      prevNextButtons: true,
    });
    return () => flkty.destroy();
  }, []);

  return (
    <>
      <section id="home" className="home-section">
        <div className="home-content">
          <SplitText
            text="Masjid Luqmanul Hakim POLBAN"
            className="home-title"
            splitType="chars"
            delay={50}
            duration={0.5}
            ease="power3.out"
          />
          <button className="activities-button">Lihat Kegiatan</button>
        </div>
      </section>

      <section id="about" className="profil-section">
        <h2 className="profil-title">Profil Masjid Luqmanul Hakim</h2>
        <div className="profil-content">
          <div className="profil-text">
            <p>
              Masjid Luqmanul Hakim POLBAN merupakan pusat kegiatan keagamaan dan sosial di lingkungan Politeknik Negeri Bandung. 
              Masjid ini menjadi tempat ibadah, kajian, serta berbagai aktivitas kemasyarakatan yang terbuka untuk seluruh civitas akademika dan masyarakat sekitar. 
              Dengan fasilitas yang memadai dan lingkungan yang nyaman, Masjid Luqmanul Hakim berkomitmen untuk membina ukhuwah Islamiyah dan meningkatkan kualitas keimanan serta ketakwaan.
            </p>
          </div>
          <img
            className="profil-image"
            src="/Masjid_LH_polban.jpg"
            alt="Masjid Luqmanul Hakim POLBAN"
          />
        </div>
      </section>

      {/* Agenda Kegiatan Section */}
      <section id="kegiatan" className="agenda-section">
        <h2 className="agenda-title">Agenda Kegiatan</h2>
        <div
          className="agenda-carousel"
          ref={flickityRef}
        >
          {agendaData.map((item, idx) => (
            <div className="agenda-card carousel-cell" key={idx}>
              <div className="agenda-img-placeholder"></div>
              <div className="agenda-card-title">{item.title}</div>
              <div className="agenda-card-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>
          {/* Gallery Section */}
      <section id="galeri" className="gallery-section">
        <h2 className="agenda-title">Galeri</h2>
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div>
      </section>
    </>
  );
};

export default Home;