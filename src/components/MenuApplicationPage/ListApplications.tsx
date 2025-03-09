import Application from "./Application"
import { IApp } from "./MenuApplicationsPage"


const ListApplications = ({ apps }: { apps: IApp[] }) => {
  return (
    <div className='flex flex-wrap justify-center gap-4 w-full lg: h-auto bg-white rounded-2xl shadow-lg p-8 basis-2/3'>
      {
        apps.length === 0 ? (
          <p className="text-2xl font-semibold text-gray-600">
            No hay aplicaciones
          </p>
        ) : (
          apps.map((app, index) => (
            <Application
              key={index}
              app={app}
            />
          ))
        )
      }
    </div>
  )
}

export default ListApplications