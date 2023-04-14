import "./css/style.css";
function Navbar(){
    return(
        <nav className="navbar">
            <ul>
                <li className="nav-component"><a href="#">Inicio</a></li>
                <li className="nav-component"><a href="#">Calendario</a></li>
                <li className="nav-component"><a href="#">Empresas</a></li>
                <li className="nav-component"><a href="#">Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;