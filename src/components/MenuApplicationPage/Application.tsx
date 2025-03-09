import { IApp } from "./MenuApplicationsPage"


const Application = ({ app }: { app: IApp }) => {
  return (
    <div className="flex flex-col justify-center flex-1 min-w-[240px] max-w-[240px] h-48 bg-white rounded-2xl shadow-lg shadow-shadow-primary p-4">
      <h2 className="text-lg font-semibold text-gray-600">{app.title}</h2>
      <p className="text-gray-600">{app.description}</p>
    </div>
  )
}

export default Application