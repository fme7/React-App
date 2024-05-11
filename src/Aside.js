import {Link} from "react-router-dom ";
import './Aside.css'

function Aside(props){
    let {open} = props;
    return
    <aside className={open ? "" : hidden } >
        <nav>
            <a></a>
        </nav>
    </aside>
    ;
}