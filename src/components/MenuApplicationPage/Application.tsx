import { useState } from "react";
import Delete from "../Icons/Delete"
import { IApp } from "./MenuApplicationsPage"
import ModalDeleteApp from "../Modals/ModalDeleteApp";

interface IApplicationProps {
  app: IApp,
  deleteApp: (id: string) => void,
}

const Application = ({ app, deleteApp }: IApplicationProps) => {

  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  }

  return (
    <div className="flex flex-col justify-center flex-1 min-w-[240px] max-w-[240px] h-48 bg-white rounded-2xl shadow-lg shadow-shadow-primary p-4 relative">
      {
        showModal && (
          <ModalDeleteApp
            title="Eliminar Aplicación"
            description="¿Estas seguro de eliminar la aplicación?"
            labelButton="Eliminar"
            labelButtonCancel="Cancelar"
            onDelete={() => deleteApp(app.id)}
            onCancel={() => handleCancel()}
          />
        )
      }
      <div className="absolute top-2 right-2 cursor-pointer" onClick={handleDelete}>
        <Delete />
      </div>
      <h2 className="text-lg font-semibold text-gray-600">{app.title}</h2>
      <p className="text-gray-600">{app.description}</p>
    </div>
  )
}

export default Application