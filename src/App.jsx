import React, { useLayoutEffect, useState, useRef } from "react";

function App() {
  return (
    <div>
      {/* Example 1 */}
      <ExampleOne />

      {/* Example 2 */}
      <ExampleTwo />

      {/* Example 3 */}
      <ExampleThree />

      {/* Example 4 */}
      <ExampleFour />

      {/* Example 5 */}
      <ExampleFive />

      {/* Example 6 */}
      <ExampleSix />

      {/* Example 7 */}
      <ExampleSeven />

      {/* Example 8 */}
      <ExampleEight />

      {/* Example 9 */}
      <ExampleNine />

      {/* Example 10 */}
      <ExampleTen />
    </div>
  );
}

// Example 1 - Basic useLayoutEffect
function ExampleOne() {
  useLayoutEffect(() => {
    console.log("Example 1: useLayoutEffect is running");
  });

  return (
    <div>
      <h2>useLayoutEffect Example 1</h2>
      <p>Open the browser console.</p>
    </div>
  );
}

// Example 2 - useLayoutEffect with useState
function ExampleTwo() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log("Example 2 - Count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>useLayoutEffect Example 2</h2>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

// Example 3 - Measuring an element
function ExampleThree() {
  const boxRef = useRef();

  useLayoutEffect(() => {
    const height = boxRef.current.getBoundingClientRect().height;

    console.log("Example 3 - Box height:", height);
  });

  return (
    <div
      ref={boxRef}
      style={{
        width: "300px",
        padding: "20px",
        backgroundColor: "lightblue",
        color: "black",
        marginTop: "20px",
      }}
    >
      <h2>useLayoutEffect Example 3</h2>

      <p>This box is being measured.</p>
    </div>
  );
}

// Example 4 - Changing style with useLayoutEffect
function ExampleFour() {
  const boxRef = useRef();

  useLayoutEffect(() => {
    boxRef.current.style.backgroundColor = "lightgreen";
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: "300px",
        padding: "20px",
        marginTop: "20px",
        backgroundColor: "lightgray",
        color: "black",
      }}
    >
      <h2>useLayoutEffect Example 4</h2>

      <p>The color is changed by useLayoutEffect.</p>
    </div>
  );
}

// Example 5 - Measuring after state change
function ExampleFive() {
  const [width, setWidth] = useState(200);
  const boxRef = useRef();

  useLayoutEffect(() => {
    const actualWidth = boxRef.current.getBoundingClientRect().width;

    console.log("Example 5 - Actual width:", actualWidth);
  }, [width]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>useLayoutEffect Example 5</h2>

      <div
        ref={boxRef}
        style={{
          width: `${width}px`,
          padding: "20px",
          backgroundColor: "lightblue",
          color: "black",
        }}
      >
        Box width: {width}px
      </div>

      <button onClick={() => setWidth(width + 50)}>
        Increase Width
      </button>
    </div>
  );
}

// Example 6 - Measuring position
function ExampleSix() {
  const boxRef = useRef();
  const [left, setLeft] = useState(0);

  useLayoutEffect(() => {
    const position = boxRef.current.getBoundingClientRect().left;

    setLeft(position);

    console.log("Example 6 - Box left position:", position);
  }, []);

  return (
    <div style={{ marginTop: "20px", marginBottom: "40px" }}>
      <h2>useLayoutEffect Example 6</h2>

      <div
        ref={boxRef}
        style={{
          width: "300px",
          padding: "20px",
          backgroundColor: "lightyellow",
          color: "black",
          border: "2px solid black",
        }}
      >
        <p>My position is being measured.</p>
      </div>

      <p>Left position: {left}px</p>
    </div>
  );
}

// Example 7 - Conditional rendering and measuring
function ExampleSeven() {
  const [showBox, setShowBox] = useState(false);
  const boxRef = useRef();

  useLayoutEffect(() => {
    if (showBox && boxRef.current) {
      const height = boxRef.current.getBoundingClientRect().height;

      console.log("Example 7 - Box height:", height);
    }
  }, [showBox]);

  return (
    <div style={{ marginTop: "20px", marginBottom: "40px" }}>
      <h2>useLayoutEffect Example 7</h2>

      <button onClick={() => setShowBox(!showBox)}>
        {showBox ? "Hide Box" : "Show Box"}
      </button>

      {showBox && (
        <div
          ref={boxRef}
          style={{
            width: "300px",
            padding: "30px",
            marginTop: "20px",
            backgroundColor: "lightpink",
            color: "black",
          }}
        >
          <h2>Hello!</h2>

          <p>This box appeared conditionally.</p>
        </div>
      )}
    </div>
  );
}

// Example 8 - useLayoutEffect and useEffect
function ExampleEight() {
  const boxRef = useRef();

  useLayoutEffect(() => {
    console.log("useLayoutEffect: Box is ready");
  }, []);

  React.useEffect(() => {
    console.log("useEffect: Box is ready");
  }, []);

  return (
    <div style={{ marginTop: "20px", marginBottom: "40px" }}>
      <h2>useLayoutEffect Example 8</h2>

      <div
        ref={boxRef}
        style={{
          width: "300px",
          padding: "20px",
          backgroundColor: "lightblue",
          color: "black",
        }}
      >
        <p>Check the browser console.</p>
      </div>
    </div>
  );
}

// Example 9 - Moving an element
function ExampleNine() {
  const boxRef = useRef();

  useLayoutEffect(() => {
    boxRef.current.style.transform = "translateX(200px)";
  }, []);

  return (
    <div style={{ marginTop: "20px", marginBottom: "40px" }}>
      <h2>useLayoutEffect Example 9</h2>

      <div
        ref={boxRef}
        style={{
          width: "150px",
          padding: "20px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        I moved!
      </div>
    </div>
  );
}

// Example 10 - Measure width and height together
function ExampleTen() {
  const boxRef = useRef();

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const box = boxRef.current.getBoundingClientRect();

    setSize({
      width: box.width,
      height: box.height,
    });

    console.log("Example 10 - Width:", box.width);
    console.log("Example 10 - Height:", box.height);
  }, []);

  return (
    <div style={{ marginTop: "20px", marginBottom: "40px" }}>
      <h2>useLayoutEffect Example 10</h2>

      <div
        ref={boxRef}
        style={{
          width: "300px",
          padding: "30px",
          backgroundColor: "lightgreen",
          border: "2px solid black",
          color: "black",
        }}
      >
        <h2>My Box</h2>

        <p>My size is being measured.</p>
      </div>

      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
    </div>
  );
}

export default App;