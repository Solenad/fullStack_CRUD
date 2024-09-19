import axios from "axios";

export const usePost = (name: string, position: string, grade: number) => {
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
};
