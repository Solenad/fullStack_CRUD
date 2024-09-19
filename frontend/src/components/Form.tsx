import { useState } from "react";
import { usePost } from "../hooks/usePost";
import axios from "axios";

export const Form = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [grade, setGrade] = useState(0);

  // const formSubmit = (event) => {
  //   event.preventDefault();
  //   usePost(name, position, grade);
  // };

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center">
        <form
          action=""
          className="bg-white border-2 border-blue-600 text-blue-600 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center"
        >
          <h1 className="font-bold text-2xl">Add Officer</h1>
          <div className="flex my-6">
            <label htmlFor="name" className="mx-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-2 border-blue-600 rounded-lg p-1"
              onChange={(e) => {
                setName(e.target.value);
                console.log(name);
              }}
            />
          </div>
          <div className="flex my-6 items-center">
            <label htmlFor="name" className="mx-1">
              Position
            </label>
            <select
              id="name"
              name="name"
              className="border-2 border-blue-600 rounded-lg p-2"
              onChange={(e) => {
                setPosition(e.target.value);
                console.log(position);
              }}
            >
              <option value="Senior Frontend Engineer">
                Senior Frontend Engineer
              </option>
              <option value="Frontend Engineer">Frontend Engineer</option>
              <option value="Senior Backend Engineer">
                Senior Backend Engineer
              </option>
              <option value="Frontend Engineer">Backend Engineer</option>
              <option value="UI/UX Design Lead">UI/UX Design Lead</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="UI/UX Design Lead">Project Manager</option>
            </select>
          </div>
          <div className="flex my-6">
            <label htmlFor="name" className="mx-1">
              Grade
            </label>
            <input
              type="number"
              id="grade"
              name="grade"
              min={1}
              max={100}
              className="border-2 border-blue-600 rounded-lg p-1"
              onChange={(e) => {
                setGrade(e.target.value);
                console.log(grade);
              }}
            />
          </div>
          <div className="mt-6">
            <button className="bg-red-600 text-white rounded-lg hover:bg-red-700 p-1 transition-all mx-1">
              Cancel
            </button>
            <button
              className="bg-green-600 text-white rounded-lg hover:bg-green-700 p-1 transition-all mx-1"
              onClick={(e) => {
                const apiUrl = "http://localhost:3000/officers";
                const postData = {
                  name: name,
                  position: position,
                  grade: grade,
                };
                axios
                  .post(apiUrl, postData)
                  .then((response) => {
                    console.log(response);
                  })
                  .catch((err) => console.log(err));
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
