import { NavBar } from "./components/NavBar";
import { Card } from "./components/Card";
import { Form } from "./components/Form";
import { useFetch } from "./hooks/useFetch.tsx";
import { useState } from "react";

const App = () => {
  const position = "Frontend Engineer";
  const { data: officers } = useFetch(`http://localhost:3000/officers`);
  const [openForm, setOpenForm] = useState(false);
  const positions = officers.map((officers) => officers.position);
  const uniquePositions = [...new Set(positions)];

  return (
    <>
      <div className="bg-[#F5F1FF] min-h-screen font-Mulish">
        <NavBar></NavBar>
        {openForm ? <Form></Form> : null}
        <div className="flex flex-col items-center justify-center my-2">
          <div className="flex items-center mt-6">
            <h1 className="text-blue-600 font-bold text-2xl mx-2">Officers:</h1>
            <button
              className="bg-green-600 text-white rounded-xl px-1 py-1 hover:bg-green-700"
              onClick={() => {
                setOpenForm(!openForm);
              }}
            >
              Add
            </button>
          </div>
          <div className="my-5">
            {uniquePositions.map((position, index) => {
              return (
                <>
                  <button
                    key={index}
                    className="text-blue-600 border-2 border-blue-600 rounded-lg p-1 hover:bg-blue-600 hover:text-white transition-all mx-2"
                  >
                    {position}
                  </button>
                </>
              );
            })}
          </div>
          <div className="grid grid-cols-3 gap-8 my-6">
            {officers.map((officer) => {
              return (
                <>
                  <Card
                    officer={{
                      name: officer.name,
                      position: officer.position,
                      grade: officer.grade,
                    }}
                  ></Card>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
