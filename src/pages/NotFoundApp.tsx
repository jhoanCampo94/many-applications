import NotFound from "../components/Icons/NotFound"


const NotFoundApp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <NotFound />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Aplicación no encontrada
        </h1>
        <p className="text-gray-600 mb-6">
          No pudimos encontrar la aplicación que estás buscando.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-3 text-white bg-[var(--color-primary)] rounded-lg shadow-lg hover:bg-[var(--color-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] cursor-pointer"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  )
}

export default NotFoundApp