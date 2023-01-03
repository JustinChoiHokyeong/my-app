import ReactDOM from "react-dom";

function App() {
  //js 코드는 함수 안에 들어가면 된다.
  const root = ReactDOM.createRoot(document.getElementById("root"));

  function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    root.render(element);
  }

  setInterval(tick, 1000);

  //html 코드는 return에 들어가면 된다.
  return <div id="root"></div>;
}

export default App;
