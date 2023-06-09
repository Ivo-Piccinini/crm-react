import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error.message);

    return (
        <div className="space-y-8">
            <h1 className="text-center text-6xl font-extrabold mt-20 text-yellow-400">CRM - E-commerce</h1>
            <p className="text-center font-bold text-2xl">Hubo un error</p>
            <p className="text-center">{error.statusText || error.message}</p>
        </div>
    )
}