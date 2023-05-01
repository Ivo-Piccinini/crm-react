// useNavigate se usa para cambiar la ruta de destino
// en este caso lo voy a usar para volver a la página anterior mediante el click de un botón
import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { agregarCliente } from "../data/Clientes";

// Los action sirven para subir los formularios, reemplazando el handleSubmit
export async function action({request}) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get('email');

  // Validación
  const errores = [];
  if(Object.values(datos).includes('')) {
    errores.push('Todos los campos son obligatorios')
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if(!regex.test(email)) {
    errores.push('El email no es válido');
  }

  // Retornar datos si hay errores
  if(Object.keys(errores).length) {
    return errores
  }

  await agregarCliente(datos);

  return redirect('/');
}

function NuevoCliente() {

  const errores = useActionData();
  const navigate = useNavigate();

  return (
    <>
        <h1 className="font-black text-4xl text-yellow-400">Nuevo Cliente</h1>
        <p className="mt-3">Completa todos los campos para registrar un nuevo cliente</p>

        <div className="flex justify-end">
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 mt-5 font-bold uppercase"
            // si en navigate le ponemos -1 nos lleva a la página anterior
            onClick={() => navigate(-1)}
          >
            Volver
          </button>
        </div>

        <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">

          {errores?.length && errores.map( (error, i) => <Error key={i}>{error}</Error> )}

          <Form
            method="post"
            noValidate
          >
            <Formulario />

            <input 
              type="submit" 
              className="mt-5 w-full bg-yellow-400 hover:bg-yellow-500 p-3 uppercase font-bold text-white text-lg cursor-pointer"
              value="Registrar cliente"
            />
          </Form>
        </div>
    </>
  )
}

export default NuevoCliente