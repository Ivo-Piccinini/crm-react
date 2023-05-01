// useLoaderData es para acceder a lo que retornamos en la funcion loader
import { useLoaderData } from "react-router-dom";
import { obtenerClientes } from "../data/Clientes";
import Cliente from "../components/Cliente";

// El loader es similar al useEffect, ya que es una función que se va a ejecutar cuando el componente cargue
// El loader siempre tiene que retornar algo
// Para usarlo hay que volver hacia atras, en este caso, importarlo en el main.jsx y cargarlo bajo el element
export function loader() {
  const clientes = obtenerClientes();

  return clientes;
}

function Index() {

  const clientes = useLoaderData();

  return (
    <div>
      <>
        <h1 className="font-black text-4xl text-yellow-400">Clientes</h1>
        <p className="mt-3">Administra tus clientes</p>

        {clientes.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-yellow-400 text-white">
              <tr>
                <th className="p-2">Cliente</th>
                <th className="p-2">Contacto</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>

              <tbody>
                {clientes.map(cliente => (
                  <Cliente
                    cliente={cliente}
                    key={cliente.id}
                  />
                ))}
              </tbody>
          </table>
        ) : (
          <p classname="text-center mt-10">No hay clientes aún</p>
        )}
      </>
    </div>
  )
}

export default Index