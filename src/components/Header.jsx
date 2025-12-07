import "./Header.css";

export default function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <a href="#hero">Lenka Radvanská</a>
      </div>
      <nav>
        <a href="#music">Hudba</a>
        <a href="#videogalery">Video</a>
        <a href="#photogalery">Foto</a>
        <a href="#">Bio</a>
        <a href="#">Kontakt</a>
      </nav>
    </header>
  );
}
