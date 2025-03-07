interface IMenuApplicationsProps {
  children: React.ReactNode;
}

const MenuApplications = ({ children }: IMenuApplicationsProps) => {
  return (
    <div className="flex flex-row w-4/5 items-center justify-center gap-8">
      {children}
    </div>
  )
}

export default MenuApplications