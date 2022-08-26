import {useState} from 'react'
import {baseColaboradores} from '../../src/BaseColaboradores.js'


const Formulario = () => {
  //Estados del formulario
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [listaColaboradores, setListaColaboradores] = useState(baseColaboradores)

    //const actualizarDatos = (e) => {
      //console.log('Escribiendo')
   // }
    
   //Función al enviar el formulario
    const enviarFormulario = (e) => {
      e.preventDefault()
      setListaColaboradores([...listaColaboradores, { id: (listaColaboradores.length + 1).toString(), nombre: nombre, correo: correo }])
      baseColaboradores.push({ id: (listaColaboradores.length + 1).toString(), nombre: nombre, correo: correo });
      console.log(baseColaboradores);
    }

    //Función para buscar colaborador
    const buscarColaborador = (e) => {
      setListaColaboradores(baseColaboradores.filter((colaborador) => {
        if (e.target.value === '') {
          return true
        } else {
          return colaborador.nombre.toLowerCase().includes(e.target.value.toLowerCase())
        }
      }))
    }
   

  return (
    <form onSubmit={enviarFormulario}>
      <div className="barra row">
        <div>
          <h2>Buscador De Colaboradores<br/></h2>
        </div>

        <div className="lupa">
          <input type="text" placeholder="Busca un colaborador" className="form-control" onChange={buscarColaborador}/>
        </div>
      </div>
      <div className="container-fluid">
        <div className="buscador row">
          <div className="form col-md-4">
            <div className="buscador-group">
              <label>Nombre Del Colaborador</label>
              <input type="text" name="nombre" placeholder="Ingrese Nombre Del Colaborador" className="buscador-control w-100" onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="buscador-group">
              <label>Correo Del Colaborador</label>
              <input type="email" name="correo" placeholder="Ingrese Correo Del Colaborador" className="buscador-control w-100" onChange={(e) => setCorreo(e.target.value)} />
            </div>
            <div className="buscador-group mt-4">
              <button className="btn btn-info" type="submit">Agregar Colaborador</button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <hr/>
          <h1>Listado de colaboradores</h1>
          <ul>
            {listaColaboradores.map(colaborador => <li key={colaborador.id}> {colaborador.nombre} - {colaborador.correo}</li> )}
          </ul>
        </div>
      </div>
    </form>
  )
} 

export default Formulario