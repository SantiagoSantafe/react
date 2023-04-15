import { useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";



//<ListaEstudiantes lista={estudiantes}/>

export const EstudiantesApp = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    console.log(estudiantes);

    const agregarEstudiante = (estudiante) => {
        setEstudiantes([...estudiantes, estudiante])
    }
    const eliminar=(estuia)=>{
        setEstudiantes(estudiantes.filter((estudiante) => estudiante.id!==estuia.id))
    }

    return (
        <>
            <FormularioEstudiante agregar={(estu) => agregarEstudiante(estu)} />
            <TablaEstudiante listaEstudiantes={estudiantes} eliminarEstudiantes={(estuia)=>{eliminar(estuia)}}/>            
        </>
    )
}