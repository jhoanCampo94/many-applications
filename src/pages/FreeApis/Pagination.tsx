interface IPaginationProps {
  previous: string;
  next: string;
  onPrevious: () => void;
  onNext: () => void;
}

const Pagination = ({
  previous,
  next,
  onPrevious,
  onNext,
}: IPaginationProps) => {

  const handlePrevious = () => {
    onPrevious();
  }

  const handleNext = () => {
    onNext();  
  }

  return (
    <>
      {previous && (
        <button className="w-1/2 border-2 border-l-emerald-300 py-2 rounded-3xl
         hover:bg-emerald-300 hover:text-black hover:border-white cursor-pointer" onClick={handlePrevious}>
          Anterior
        </button>
      )}
      {next && (
        <button className="w-1/2 border-2 border-l-emerald-300 py-2 rounded-3xl
         hover:bg-emerald-300 hover:text-black hover:border-white cursor-pointer" onClick={handleNext}>
          Siguiente
        </button>
      )}
    </>
  );
};

export default Pagination;
