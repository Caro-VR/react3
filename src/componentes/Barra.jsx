import React from 'react'

const Barra = () => {
  return (
    <div className="barra row">
        <div>
            <h2>Buscador De Colaboradores<br/></h2>
        </div>

        <div className="lupa">
            <input type="text" placeholder="Busca un colaborador" className="form-control"/>
        </div>
    </div>

  )
}

export default Barra