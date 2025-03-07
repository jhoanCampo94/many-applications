

const ApplicationForm = () => {
  return (
    <form
      className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg space-y-4 basis-1/3"
    >
      <div>
        <label
          htmlFor="title-application"
          className="block text-sm font-medium text-gray-600"
        >
          Título
        </label>
        <input
          type="text"
          name="title-application"
          id="title-application"
          className="w-full px-4 py-2 mt-1 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
          placeholder="Ingresa el título"
        />
      </div>

      <div>
        <label
          htmlFor="description-application"
          className="block text-sm font-medium text-gray-600"
        >
          Descripción
        </label>
        <input
          type="text"
          name="description-application"
          id="description-application"
          className="w-full px-4 py-2 mt-1 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
          placeholder="Describe la aplicación"
        />
      </div>

      <div>
        <input
          type="submit"
          value="Crear Aplicación"
          className="w-full px-4 py-2 text-white bg-[var(--color-primary)] rounded-lg shadow-md cursor-pointer hover:bg-hover focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />
      </div>
    </form>
  )
}

export default ApplicationForm