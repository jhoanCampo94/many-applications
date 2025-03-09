import { useState } from "react";
import ApplicationForm from "./ApplicationForm"
import ListApplications from "./ListApplications"
import MenuApplications from "./MenuApplications"

export interface IApp {
  title: string,
  description: string,
}
const MenuApplicationsPage = () => {

  const [apps, setApps] = useState<IApp[]>([]);

  const addApp = (app: IApp) => {
    setApps((prevApps) => [...prevApps, app]);
  };

  return (
    <div className=" flex justify-center w-full min-h-screen bg-general-fund">
      <MenuApplications >
        <ApplicationForm addApp={addApp} />
        <ListApplications apps={apps} />
      </MenuApplications>
    </div>
  )
}

export default MenuApplicationsPage