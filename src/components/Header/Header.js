import "./Header.css";

function Header({ image, title, children, h3, title1, span1, span, color }) {
  return (
    <header className="Header">
      <img src={image} alt="img" className="responsive" />
      <section>
        <h3>{h3}</h3>
        <h1>
          {title1} <span>{span1}</span>
        </h1>

        <h1>
          <span>{span}</span> {title}
        </h1>
        
        <p>{children}</p>
      </section>
    </header>
  );
}

export default Header;
