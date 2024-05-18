import { Link } from "react-router-dom";
import "./Aside.css";

function Aside(props) {
  let { open } = props;
  return (
    <aside className={open ? "" : "hidden"}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/users">Users</Link>
      </nav>
    </aside>
  );
}
export default Aside;
