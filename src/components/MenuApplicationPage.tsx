import { ReactNode } from "react"

interface IMenuApplicationPageProps {
  children: ReactNode;
}


const MenuApplicationPage = ({children}:IMenuApplicationPageProps) => {
  return (
    <section className="w-full h-screen p-20 border-4 flex flex-col">
      {children}
    </section>
  )
}

export default MenuApplicationPage