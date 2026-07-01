import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = (isSimpleClick = false) => {
    setCount(currentCount => {
      const nextCount = currentCount + 1;

      if (isSimpleClick) {
        return nextCount;
      }

      return nextCount % 5 === 0 ? nextCount + 100 : nextCount;
    });
  };

  const add100 = (isSimpleClick = false) => {
    if (isSimpleClick) {
      setCount(currentCount => currentCount + 100);
    }
  };

  // DON'T change the code below
  const increase = () => {
    if (count % 5 === 0) {
      add100();
    }

    addOne();
  };

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${count}`}</h1>

      <button
        type="button"
        className="App__add-one"
        onClick={() => addOne(true)}
      >
        Add 1
      </button>

      <button
        type="button"
        className="App__add-100"
        onClick={() => add100(true)}
      >
        Add 100
      </button>

      <button type="button" className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
