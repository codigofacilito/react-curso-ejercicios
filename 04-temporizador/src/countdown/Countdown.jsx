import { useEffect, useState } from "react";

function Countdown(){
  let [targetSeconds, setTargetSeconds] = useState(null);

  let [seconds, setSeconds] = useState(0);

  let parseForm = (event) => {
    event.preventDefault();
    let seconds = event.target.seconds.value;
    setTargetSeconds(seconds);
  };

  useEffect(() => {
    if (targetSeconds === null) {
      return;
    }

    setSeconds(0);

    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetSeconds]);

  if (targetSeconds === null) {
    return(
      <>
        <p>¿Cuántos segundos quieres contar?</p>
        <form action="#" onSubmit={ ev => parseForm(ev) }>
          <input name="seconds" type="number" />
          <button type="submit">Iniciar</button>
        </form>
      </>
    )
  }

  if((seconds + 1) > targetSeconds){
    return(
      <>
        <p>¡Terminó!</p>
        <button onClick={ () => setTargetSeconds(null) }>Reiniciar!!</button>
      </>
    )
  }

  return(
    <p>Quedan {targetSeconds - seconds} segundos</p>
  );
}

export default Countdown;