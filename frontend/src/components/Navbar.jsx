const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img
          src="/LH_Images.jpeg"
          alt="Logo Masjid"
          className="navbar-logo"
          style={{ height: '58px', width: 'auto' }}
        />
        <span className="navbar-title" style={{ color: '#f7e85c', fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '1.1', display: 'inline-block' }}>
          Luqmanul <br /> Hakim Polban
        </span>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#home" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#berita" className="nav-link">Berita</a>
        </li>
        <li className="nav-item">
          <a href="#kegiatan" className="nav-link">Kegiatan</a>
        </li>
        <li className="nav-item">
          <a href="#galeri" className="nav-link">Galeri</a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;