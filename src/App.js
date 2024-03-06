import { useState } from 'react';
import Text from 'text';

function App() {
  const [countPotatoes, setCountPotatoes] = useState(0);

  const onClickPlus = (e) => {
    setCountPotatoes(countPotatoes + 1);
  }
  const onClickMinus = (e) => {
    if (countPotatoes > 0) {
      setCountPotatoes(countPotatoes - 1);
    }
  }

  return (
    <>
      <button onClick={onClickPlus}>+</button>
      <Text>{countPotatoes}</Text>
      {countPotatoes > 0 && <button onClick={onClickMinus}>-</button>}
    </>
  );
}

export default App;
