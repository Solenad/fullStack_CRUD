const NavBar = () => {
  return (
    <>
      <div className="bg-[#3640A3] rounded-b-lg p-2">
        <div className="flex justify-center">
          <h1 className="font-bold text-white text-2xl">LSCS Admin Page</h1>
        </div>
      </div>
    </>
  );
};

const Card = ({ name = "Officer", position = "Officer Position" }) => {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col items-center justify-center border-[#3640A3] border-2  shadow-md bg-white rounded-lg p-4">
          <div>
            <h1 className="text-[#3640A3] font-bold text-xl">{name}</h1>
            <h2 className="text-[#3640A3] text-lg">{position}</h2>
          </div>
          <div className="flex mt-4">
            <button className="flex text-center min-h-4 bg-green-500 text-white px-3 py-1 mx-1 rounded-lg">
              Edit
            </button>
            <button className="flex text-center bg-red-500 text-white px-3 py-1 mx-1 rounded-lg">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <div className="bg-[#F5F1FF] h-screen">
        <NavBar></NavBar>
        <div className="grid grid-cols-3 p-12">
          <Card
            officer={{ name: "Jose Simbillo", position: "Frontend Engineer" }}
          ></Card>
          <Card
            officer={{ name: "Jose Simbillo", position: "Frontend Engineer" }}
          ></Card>
        </div>
      </div>
    </>
  );
};

export default App;
