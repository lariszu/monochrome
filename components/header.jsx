export default function Header() {
  return (
  <header className="header container mt-0 mt-lg-4">
    <section className="header-secondary">
    <div className="header-title d-block d-lg-none">
        <p>monochrome</p>
      </div>
      <div className="header-connect">
        <ul>
          <li>
          <a href="" title="Your profile">
        <i className="fa-solid fa-user"></i>
        </a>
          </li>
          <li>
            <a href="">
            <i className="fa-solid fa-heart"></i>
            </a>
          </li>
          <li>
            <a href="">
            <i className="fa-solid fa-bag-shopping"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </header>
  );
}
