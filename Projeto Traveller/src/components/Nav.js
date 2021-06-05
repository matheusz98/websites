import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Nav.css';

function Nav() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    // Função que mostra/oculta o botão dependendo do tamanho da tela
    const showButton = () => {
        if (window.innerWidth <= 860) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    // Evento para mostrar o botão conforme o tamanho da tela
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="nav">
                <div className="nav-container">
                    <Link to="/" className="logo" onClick={closeMenu}>
                        Traveller <img src="/images/logo.svg" className="logo-img" alt="Logotipo"></img>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "menu active" : "menu"}>
                        <li className="menu-item">
                            <Link to="/" className="menu-links" onClick={closeMenu}>
                                Home
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link to="/services" className="menu-links" onClick={closeMenu}>
                                Serviços
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link to="/products" className="menu-links" onClick={closeMenu}>
                                Produtos
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link to="/login" className="menu-links-mobile" onClick={closeMenu}>
                                Login
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">Login</Button> }
                </div>
            </nav>
        </>
    );
}

export default Nav;