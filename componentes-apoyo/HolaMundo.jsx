import React from "react";

export default () => {
  const hello = "Hola Mundo!";
  const isTrue = true;
  return (
    <div className="HolaMundo">
      <h1>{hello}</h1>
      <h2>Curso Especial de React</h2>
      <img src="https://arepa.s3.amazonaws.com/react.png" alt="reactImg" />
      {isTrue ? <h4>Esto es verdadero</h4> : <h4>Esto es Falso</h4>}
      {isTrue && <h4>Soy verdadero!</h4>}
    </div>
  );
};
