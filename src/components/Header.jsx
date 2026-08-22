import "./Header.css";

export default function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <a href="#"><img src="fonts/LenkaRadvanska.png" /></a>
      </div>
      <nav>
        <a href="#tyrad">Ty rád</a>
        <a href="#music">Hudba</a>
        <a href="#video">Video</a>
        <a href="#photo">Foto</a>
        <a href="#bio">Bio</a>
        {/* <a href="#contact">Kontakt</a> */}
      </nav>
    </header>
  );
}
