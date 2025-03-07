import ApplicationForm from "./ApplicationForm"
import ListApplications from "./ListApplications"
import MenuApplications from "./MenuApplications"


const MenuApplicationsPage = () => {
  return (
    <div className=" flex justify-center w-full min-h-screen bg-general-fund">
      <MenuApplications >
        <ApplicationForm />
        <ListApplications />
      </MenuApplications>
    </div>
  )
}

export default MenuApplicationsPage