import React from 'react'
import { baseColaboradores } from '../../src/BaseColaboradores.js'

const Lista = () => {
  return (
    <div>
        <hr />
        <h1>Listado de colaboradores</h1>
        <ul>
          {baseColaboradores.map(colaborador => <li key={colaborador.id}> {colaborador.nombre} - {colaborador.correo}</li> )}
        </ul>
    </div>
  )
}

export default Lista