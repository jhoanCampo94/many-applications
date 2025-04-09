import { useParams } from "react-router-dom"
import { IApp } from "./MenuApplicationsPage"

interface IApplicationDetailProps {
  apps: IApp[];
}

const ApplicationDetail = ({ apps }: IApplicationDetailProps) => {
  const { title } = useParams<{ title: string }>();
  const app = apps.find((app) => app.title === title);

  if (!app) {
    return <p className="text-xl text-center">Aplicación no encontrada</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-general-fund">
      <div className="p-6 bg-white rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800">{app.title}</h1>
        <p className="mt-4 text-gray-600">{app.description}</p>
      </div>
    </div>
  )
}

export default ApplicationDetail