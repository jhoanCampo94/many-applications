import { Link } from "react-router-dom";

const HeaderApplication = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to={"/"} className="text-2xl font-bold text-[var(--color-primary)] hover:text-[var(--color-hover)] transition">
            ManyApplications
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderApplication;