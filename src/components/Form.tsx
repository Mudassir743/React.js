// import { FormEvent, useRef } from "react";

// const Form = () => {
//   const nameRef = useRef<HTMLInputElement>(null);
//   const ageRef = useRef<HTMLInputElement>(null);
//   const person = { name: "", age: 0 };
//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     if (nameRef.current !== null) person.name = nameRef.current.value;
//     if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
//     console.log(person);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-">
//         <label htmlFor="name " className="form-label">
//           Name{" "}
//         </label>
//         <input ref={nameRef} id="name" type="text" className="form-control" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age{"  "}
//         </label>
//         <input ref={ageRef} id="age " type="number" className="form-control" />
//       </div>
//       <button className="btn btn-primary">Submit </button>
//     </form>
//   );
// };

// export default Form;

// ========================== controlled component ==========================

import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
const Form = () => {
  const form = useForm();
  console.log(form);
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name{" "}
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age{"  "}
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          value={person.age}
          id="age "
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit </button>
    </form>
  );
};

export default Form;
