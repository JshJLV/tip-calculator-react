import logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="mx-auto py-12">
      <img src={logo} alt="logo" />
    </header>
  );
}

export default Header;
