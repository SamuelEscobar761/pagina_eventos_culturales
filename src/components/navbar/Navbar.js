import "./css/style.css";
function Navbar(){
    return(
        <nav className="navbar">
            <ul>
                <li className="nav-component"><a href="#home">Inicio</a></li>
                <li className="nav-component"><a href="#calendar">Calendario</a></li>
                <li className="nav-component"><a href="#enterprises">Empresas</a></li>
                <li className="nav-component"><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;