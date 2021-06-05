import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-newsletter">
                <p className="newsletter-title">
                    Cadastre seu e-mail abaixo para receber novidades!
                </p>
                <p className="newsletter-text">
                    Fique a vontade para se inscrever a qualquer momento.
                </p>
                <div className="inputs">
                    <form>
                        <input type="email" name="email" placeholder="Endereço de e-mail" className="footer-input" />
                        <Button buttonStyle="btn--outline">Inscrever-se</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Sobre o site</h2>
                        <Link to="/">Como funciona</Link>
                        <Link to="/">Avaliações de clientes</Link>
                        <Link to="/">Oportunidades</Link>
                        <Link to="/">Patrocínios</Link>
                        <Link to="/">Termos de serviço</Link>
                    </div>

                    <div className="footer-link-items">
                        <h2>Termos</h2>
                        <Link to="/">Como funciona</Link>
                        <Link to="/">Avaliações de clientes</Link>
                        <Link to="/">Oportunidades</Link>
                        <Link to="/">Patrocínios</Link>
                        <Link to="/">Termos de serviço</Link>
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Redes Sociais</h2>
                        <Link to="/">Como funciona</Link>
                        <Link to="/">Avaliações de clientes</Link>
                        <Link to="/">Oportunidades</Link>
                        <Link to="/">Patrocínios</Link>
                        <Link to="/">Termos de serviço</Link>
                    </div>

                    <div className="footer-link-items">
                        <h2>Novidades</h2>
                        <Link to="/">Como funciona</Link>
                        <Link to="/">Avaliações de clientes</Link>
                        <Link to="/">Oportunidades</Link>
                        <Link to="/">Patrocínios</Link>
                        <Link to="/">Termos de serviço</Link>
                    </div>
                </div>
            </div>
            <section className="social">
                <div className="social-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="logo">
                            Traveller <img src="/images/logo.svg" className="logo-img" alt="Logotipo"></img>
                        </Link>
                    </div>
                    <small className="copyright">Traveller &copy; 2021 Todos os direitos reservados.</small>
                    <div className="social-icons">
                        <Link to="/" className="social-icon facebook" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </Link>

                        <Link to="/" className="social-icon twitter" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </Link>

                        <Link to="/" className="social-icon instagram" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </Link>

                        <Link to="/" className="social-icon youtube" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;