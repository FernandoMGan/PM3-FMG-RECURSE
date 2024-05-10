// File C:\Home\Developing\PM3-FMG-RECURSE\front\src\App.jsx
const DevMod = 'App in src\\App.js';
import React from 'react';
//
import { useState } from 'react'
import './App.css'
//
import DevMsg from './helpers/DevsMsgs.js';
import ValidatorData from './helpers/AppsValidations.js';
import Swal from 'sweetalert2';

function App() {
  // DevMsg.ByConsole(DevMod, 'Ctrol Funcion','Linea 13');
  // Swal.fire(ValidatorData.validEmail('fmgsch@gmail.com'));

  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>Nav Bar</h1>
      <h2>Testeo de Modulos Independientes</h2>
      <h3>Testeo de Modulos Independientes</h3>

    </>
  )
}

export default App
