import { useState } from 'React';

function Counter(){
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>
        Haz hecho click {count} veces
      </p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  )
}

export default Counter;