import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='right redes'>
                <h3>Síguenos</h3>
                <div className="list">
                    <ul>
                        <li>CONAMI</li>
                        <li>ASOMIF</li>
                        <li>RECAMIF</li>
                        <li>BCN</li>
                    </ul>
                </div>
            </div>
            <div className='right enlaces'>
                <h3>Enlaces de interés</h3>
                <div className="list">
                    <ul>
                        <li>CONAMI</li>
                        <li>ASOMIF</li>
                        <li>RECAMIF</li>
                        <li>BCN</li>
                    </ul>
                </div>
            </div>
            <div className='right aliados'>
                <h3>Aliados estratégicos</h3>
                <div className="list">
                    <ul>
                        <li>PRODEL</li>
                        <li>KIVA</li>
                        <li>RED KATALYSIS</li>
                        <li>SICSA MICROFINANZAS</li>
                    </ul>
                </div>
            </div>
            <div>
                <h3>Contáctenos</h3>
                <div className="list"><p>2311-6680 / 2746, 7516-7272</p>
                    <br />
                    <p>leon2000imf@leon2000imf.com</p>
                    <br />
                    <p>Parque Rubén Darío 20vrs. al Norte, León</p></div>
            </div>
        </footer>
    );
};

export default Footer;
