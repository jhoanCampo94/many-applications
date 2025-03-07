interface IMenuApplicationsProps {
  children: React.ReactNode;
}

const MenuApplications = ({ children }: IMenuApplicationsProps) => {
  return (
    <div className="flex w-full min-h-screen bg-gray-100 items-center justify-center">
      {children}
    </div>
  )
}

export default MenuApplications