type Officer = {
  name: string;
  position: string;
  grade: number;
};

export const Card = ({ officer }: { officer: Officer }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center border-[#3640A3] border-2  shadow-md bg-white rounded-lg p-4 max-w-xs">
        <div>
          <h1 className="text-[#3640A3] font-bold text-xl">{officer.name}</h1>
          <h2 className="text-[#3640A3] text-lg">{officer.position}</h2>
          <h2 className="text-[#3640A3] text-lg">Grade: {officer.grade}</h2>
        </div>
        <div className="flex mt-4">
          {/* <button className="flex text-center min-h-4 bg-green-500 text-white px-3 py-1 mx-1 rounded-lg max-w-sm">
            Edit
          </button>
          <button className="flex text-center bg-red-500 text-white px-3 py-1 mx-1 rounded-lg max-w-sm">
            Delete
          </button> */}
        </div>
      </div>
    </>
  );
};
