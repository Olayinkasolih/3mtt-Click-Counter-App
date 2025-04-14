import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const limit = 10; // You can set your own threshold

  const increment = () => {
    if (count < limit) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Click Counter App</h2>
      <p style={styles.counter}>Count: {count}</p>
      {count === limit && <p style={styles.warning}>You've reached the limit!</p>}
      <div style={styles.buttons}>
        <button onClick={increment} style={styles.button}>Increase</button>
        <button onClick={decrement} style={styles.button}>Decrease</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif'
  },
  counter: {
    fontSize: '24px',
    margin: '20px 0'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  warning: {
    color: 'red',
    fontWeight: 'bold'
  }
};

export default ClickCounter;
