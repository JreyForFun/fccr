import { useState } from 'react';

function Name() {
  const [name, setName] = useState('John Rey');
  const [age, setAge] = useState(18);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <button onclik={()=> setAge(age + 1)}>Increade Age</button>
      <button onClick={() => setName('Jane Doe')}>Peng</button>
    </div>
  )
}

export default Name;

