import { useParams } from "react-router-dom";
import Calculator from "./Calculator/Calculator";
import NotFoundApp from "./NotFoundApp";
import ApiRickAndMorthy from "./FreeApis/ApiRickAndMorthy";
import CounterClick from "./CounterClick/CounterClick";
import DiscoverWord from "./DiscoverWord/DiscoverWord";
import { IApp } from "../components/MenuApplicationPage/MenuApplicationsPage";
import GenericAppComponent from "./GenericAppComponent";

const componentMap: Record<string, React.FC> = {
  "calculadora": Calculator,
  "api-de-rick-and-morthy": ApiRickAndMorthy,
  "contador-de-clicks": CounterClick,
  "descubre-la-palabra": DiscoverWord,
};
const ApplicationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const apps = JSON.parse(localStorage.getItem("apps") || "[]");

  const currentApp = apps.find((app: IApp) => app.slug === id);

  if (!currentApp) return <NotFoundApp />;

  const Component = componentMap[currentApp.slug] ?? null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-general-fund">
      {Component ? (
        <Component />
      ) : (
        <GenericAppComponent title={currentApp.title} />
      )}
    </div>
  );
};

export default ApplicationDetail;
