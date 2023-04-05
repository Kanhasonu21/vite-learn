import React, { useState, useCallback, } from 'react'

function HomePage() {
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    console.log('called');
    setCount(prevState => prevState += 1);
  }

  const handleClick = useCallback(() => {
    setCount(prevState => prevState+1);
  }, [])

  const debounce = (fn, delay = 100) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(args);
      }, delay)
    }
  }

  function throttle(fn, delay) {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    };
  }


  const buttonClickDebounceWrapper = useCallback(debounce(onButtonClick, 500),[]);
  const buttonClickThrottleWrapper = useCallback(throttle(handleClick,500),[]);


  return (
    <div>
      {/* <input onChange={e => setCount(e.target.value)}/> */}
      <div>Clicked:{count}</div>
      <button onClick={buttonClickDebounceWrapper}>Call Debounce</button>
      <button onClick={buttonClickThrottleWrapper}>Call Throttle</button>
    </div>
  )
}

export default HomePage