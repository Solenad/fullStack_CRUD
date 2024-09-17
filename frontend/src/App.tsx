const NavBar = () => {
  return (
    <>
      <div className="bg-[#3640A3] p-2">
        <div className="flex justify-center">
          <h1 className="font-bold text-yellow-200 text-2xl">LSCS</h1>
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
      </div>
    </>
  );
};

export default App;
