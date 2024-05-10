// File C:\Home\Developing\PM3-FMG-RECURSE\front\src\helpers\AppsValidations.js
const DevMod = 'AppsValidations in helpers\\AppsValidations.js';
import React from 'react';

// DevMsg.ByConsole(DevMod, 'Ctrol xx','Val xx');
const ValidatorsData = {
    validEndTypes: (param) => {
        return (param === 'get' || param === 'post' || param === 'put' || param === 'delete') ?
            param :
            {
                error: {
                    header: "Error en el tipo de endpoint",
                    data: `El parámetro recibido '${param}' no se reconoce como opción válida.`
                }
            };
    },
    validEndPoints: (param) => {
        let lstEndPointsUsuarios = ['usuarios', 'usuRegister', ];
        let lstEndPointsCredenciales = ['credenciales', 'credRegister', 'credRemove', 'credToggle'];
        let lstEndPointsTurnos = ['turnos', 'turnRegister', 'turnRemove', 'turnToggle'];
        let lstEndPoints = [...lstEndPointsUsuarios, ...lstEndPointsCredenciales, ...lstEndPointsTurnos];

        return lstEndPoints.includes(param) ?
            param :
            {
                error: {
                    header: "Error en el endpoint",
                    data: `El endpoint recibido '${param}' no existe o no está disponible.`
                }
            };
    },
    // Función para validar un correo electrónico utilizando una expresión regular
    validEmail: (email) => {
        // Expresión regular para validar un correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Función para validar una contraseña con ciertas características
    validPassword: (password) => {
        // Expresión regular para validar la contraseña
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-zA-Z]).{6,12}$/;
        return passwordRegex.test(password);
    },

    // Función para validar un nombre
    validNames: (name) => {
        // Expresión regular para validar el nombre (permitiendo letras de cualquier idioma, espacios, guiones y apóstrofes)
        const lastNameRegex = /^[\p{L}\s\-']+$/u;
        return lastNameRegex.test(name);
    }
};

export default ValidatorsData;
