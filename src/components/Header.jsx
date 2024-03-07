import "../index.css";

export default function Header() {
  return (
    <>
      <header>
        <nav className="nav flex-column flex-sm-row">
          <a
            className="flex-sm-fill flex-grow-1 text-sm-left-nav-link active"
            href=""
          >
            <h1>Lumia</h1>
          </a>
          <a className="text-sm-right nav-link" href="">
            Kontakta oss
          </a>
        </nav>
      </header>
    </>
  );
}
