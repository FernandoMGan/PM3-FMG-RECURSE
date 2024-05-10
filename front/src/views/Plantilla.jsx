// File C:\Home\Developing\PM3-FMG-RECURSE\front\src\views\Plantilla.jsx
const DevMod = 'Plantilla in views\\Plantilla.js';

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { useSelector, useDispatch } from 'react-redux';
import styles from './PlantillaHome.module.css'; // Importar estilos CSS desde el archivo externo

// DevMsg.ByConsole(DevMod, 'Ctrol xx','Val xx');
const PlantillaHome = () => {
    // Aquí puedes colocar lógica y estado si es necesario
    const xx = () => {
        DevMsg.ByConsole('LoguinSignIn', 'Ingresando', `( xx :> ${xx} )  <-->  ( xx :> ${xx} ) `);
    };

    return (
        <div className={styles.container}>
            <h1>CONTROL HOME</h1>
        </div>
    );
}

export default PlantillaHome;