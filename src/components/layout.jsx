import { Outlet, Link, useLocation } from "react-router-dom"

function Layout() {

    // El useLocation sirve para saber en donde estas ubicado, en este caso lo uso para que me resalte en el nav la página en la que estoy
    const location = useLocation();

    return (
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-yellow-400 px-5 py-10 flex flex-col items-center">
                <h2 className="text-4xl font-black text-center text-white">CRM - Clientes </h2>
                
                <nav className="mt-10">
                {/* Link sirve para reemplazar los "a" en react-router-dom */}
                    <Link 
                        className={`${location.pathname === '/' ? 'text-yellow-800' : 'text-white'} text-2xl block mt-2 hover:text-yellow-600`} 
                        to="/"
                    >
                        Clientes
                    </Link>

                    <Link 
                        className={`${location.pathname === '/clientes/nuevo' ? 'text-yellow-800' : 'text-white'} text-2xl block mt-2 hover:text-yellow-600`} 
                        to="/clientes/nuevo"
                    >
                        Nuevo Cliente
                    </Link>
                </nav>
            </aside>

            <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet />
            </main>
        </div>
    )
  }
  
  export default Layout