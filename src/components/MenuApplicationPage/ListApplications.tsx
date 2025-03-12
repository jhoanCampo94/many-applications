import Application from "./Application"
import { IApp } from "./MenuApplicationsPage"

export interface IListApplicationsProps {
  apps: IApp[],
  deleteApp: (id: string) => void,
}

const ListApplications = ({ apps, deleteApp }: IListApplicationsProps) => {
  return (
    <div className='flex flex-wrap justify-center gap-4 w-full lg: h-auto bg-white rounded-2xl shadow-lg p-8 basis-2/3'>
      {
        apps.length === 0 ? (
          <p className="text-2xl font-semibold text-gray-600">
            No hay aplicaciones
          </p>
        ) : (
          apps.map((app) => (
            <Application
              key={app.id}
              app={app}
              deleteApp={() => deleteApp(app.id)}
            />
          ))
        )
      }
    </div>
  )
}

export default ListApplications