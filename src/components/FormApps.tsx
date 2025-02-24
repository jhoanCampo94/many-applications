import { useState } from "react"

interface IApplicationProps {
  name: string;
  description: string;
}

const FormApps = () => {

  const [form, setForm] = useState<IApplicationProps>({
    name: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      name: form.name,
      description: form.description,
    })
  }

  return (
    <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Nombre de la aplicación"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          name='name'
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Escribe una breve descripción"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          name='description'
          value={form.description}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-end">
        <input
          type="submit"
          value="Crear App"
          className="px-6 py-2 bg-primary text-white font-semibold rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
        />
      </div>
    </form>
  )
}

export default FormApps