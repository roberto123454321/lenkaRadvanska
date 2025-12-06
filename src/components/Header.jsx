import "./Header.css"

export default function Header() {
  return (
    <header className="navbar">
      <div className="logo"><a href="#hero">Lenka Radvanská</a></div>
      <nav>
        <a href="#videogalery">Videogaléria</a>
        <a href="#">Diskografia</a>
        <a href="#">Foto</a>
        <a href="#">Bio</a>
        <a href="#">Kontakt</a>
      </nav>
    </header>
  );
}
