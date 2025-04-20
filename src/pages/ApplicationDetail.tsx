import { useParams } from "react-router-dom";
import Calculator from "./Calculator/Calculator"
import NotFoundApp from "./NotFoundApp";

const componentMap: Record<string, React.FC> = {
  "calculadora": Calculator,
}
const ApplicationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const normalizeId = id?.toLowerCase() || "";

  const Component = componentMap[normalizeId] || NotFoundApp;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-general-fund">
      <Component />
    </div>
  )
}

export default ApplicationDetail