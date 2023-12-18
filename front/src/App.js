import React, { useState, useEffect, useRef } from "react";
import Grid from "./component/grid";
import Page from "./component/page";
import Box from "./component/box";
// import PostList from "./container/post-list";

function App() {
  //4.
  const scrollPositionRef = useRef(0);
  const handleScroll = () => {
    console.log(scrollPositionRef);
    scrollPositionRef.current = window.scrollY;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //3.

  // const prevValueRef = useRef("null");
  // const [value, setValue] = useState(0);

  // useEffect(() => {
  //   console.log(value, "value");
  //   console.log(prevValueRef, "prevValueRef");

  //   prevValueRef.current = value;
  // }, [value]);

  // const handleIncrement = () => {
  //   setValue(value + 1);
  // };
  // const handleDecrement = () => {
  //   setValue(value - 1);
  // };
  //   console.log("render");

  //2. Приклад фокусу на певному інпуті

  // const inputRef = useRef(null);
  // useEffect(() => {
  //   if (inputRef && inputRef.current) inputRef.current.focus(); //Фокус на введенны після завантаження компонента
  // }, []);

  //1.Приклад привязки кнопки до картинки

  // const firstCatRef = useRef(null);
  // const secondCatRef = useRef(null);
  // const thirdCatRef = useRef(null);

  // function handleScrollBy(ref) {
  //   console.log(ref);
  //   if (ref && ref.current) {
  //     const offsetTop = ref.current.offsetTop;
  //     window.scrollBy({
  //       top: offsetTop,
  //       behavior: "smooth",
  //     });
  //   }
  // }

  return (
    //4.

    <Page>
      <button onClick={handleScroll}>Click</button>
      <p style={{ height: 10000 }}></p>
    </Page>

    //3.

    // <Page>
    //   <Grid>
    //     <Box>
    //       <p>Current value: {value}</p>
    //       <p>Previous Value: {prevValueRef.current}</p>
    //     </Box>
    //     <Box>
    //       <button onClick={handleIncrement}>Increment</button>
    //     </Box>
    //     <Box>
    //       <button onClick={handleDecrement}>Decrement</button>
    //     </Box>
    //   </Grid>
    // </Page>

    //2. Приклад фокусу на певному інпуті

    // <Page>
    //   <Grid>
    //     <Box>
    //       <input ref={inputRef} placeholder="Введіть пошту..." />
    //     </Box>
    //     <Box>
    //       <input placeholder="Введіть пароль..." />
    //     </Box>
    //   </Grid>
    // </Page>

    //1. Приклад привязки кнопки до картинки
    // <Page>
    //   <Grid>
    //     <button onClick={() => handleScrollBy(firstCatRef)}>Tom</button>
    //     <button onClick={() => handleScrollBy(secondCatRef)}>Maru</button>
    //     <button onClick={() => handleScrollBy(thirdCatRef)}>Jellylorum</button>
    //   </Grid>
    //   <div>
    //     <ul style={{ display: "grid", gap: "500px", marginBottom: "500px" }}>
    //       <li>
    //         <img
    //           src="https://placekitten.com/g/200/200"
    //           alt="Tom"
    //           ref={firstCatRef}
    //         />
    //       </li>
    //       <li>
    //         <img
    //           src="https://placekitten.com/g/300/200"
    //           alt="Maru"
    //           ref={secondCatRef}
    //         />
    //       </li>
    //       <li>
    //         <img
    //           src="https://placekitten.com/g/250/200"
    //           alt="Jellylorum"
    //           ref={thirdCatRef}
    //         />
    //       </li>
    //     </ul>
    //   </div>
    // </Page>
  );
}

export default App;
