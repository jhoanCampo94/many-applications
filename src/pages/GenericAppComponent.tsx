const GenericAppComponent = ({ title }: { title: string }) => (
  <div className="text-center">
    <h1 className="text-3xl font-bold">{title}</h1>
    <p className="text-gray-600 mt-4">Esta aplicación aún no tiene funcionalidad implementada.</p>
  </div>
);

export default GenericAppComponent;
