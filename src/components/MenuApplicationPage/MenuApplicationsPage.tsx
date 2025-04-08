import ApplicationForm from "./ApplicationForm"
import ListApplications from "./ListApplications"
import MenuApplications from "./MenuApplications"
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from "../Hooks/useLocalStorage";

export interface IApp {
  id: string,
  title: string,
  description: string,
}
const MenuApplicationsPage = () => {

  const [apps, setApps] = useLocalStorage<IApp[]>("applications", []);

  const addApp = (app: IApp) => {
    const newApp = {
      id: uuidv4(),
      title: app.title,
      description: app.description
    }
    setApps((prevApps) => [...prevApps, newApp]);
  };

  const deleteApp = (id: string) => {
    const appsUpdated = apps.filter(app => app.id !== id);
    setApps(appsUpdated);
  };

  return (
    <div className=" flex justify-center w-full min-h-screen bg-general-fund">
      <MenuApplications >
        <ApplicationForm addApp={addApp} />
        <ListApplications
          apps={apps}
          deleteApp={deleteApp}
        />
      </MenuApplications>
    </div>
  )
}

export default MenuApplicationsPage