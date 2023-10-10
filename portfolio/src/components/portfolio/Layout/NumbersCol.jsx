import { useState, useEffect } from "react";

const NumbersCol = () => {
  // Crear una variable de estado para guardar el alto de la pantalla
  const [height, setHeight] = useState(window.innerHeight*0.97);

  // Crear una función para manejar el evento resize
  function handleResize() {
    // Actualizar el valor del alto de la pantalla
    setHeight(window.innerHeight*0.93);
  }

  // Usar el hook useEffect para agregar y eliminar el listener del evento resize
  useEffect(() => {
    // Agregar el listener cuando el componente se monte
    window.addEventListener("resize", handleResize);

    // Devolver una función de limpieza que elimine el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let numSize = Math.floor(height/26);


  const numbers = [];
  for (let i = 0; i < numSize; i++) {
    numbers.push(i + 1);
  }
  return (
    <div className="md:flex flex-col pl-2 hidden">
      {numbers.map((number) => (
        <div key={number}>{number}</div>
      ))}
    </div>
  );
};

export default NumbersCol;
