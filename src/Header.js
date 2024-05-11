import "./Header.css";

function Header(props) {
  let { toggle } = props;
  return (
    <header>
      <div className="postApp">Post App</div>
      <a className="bars" onClick={toggle}>
        <i class="fa-solid fa-bars"></i>
      </a>
    </header>
  );
}
export default Header;
