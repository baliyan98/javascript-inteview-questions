const rootId = document.getElementById("root");
console.log(React);
console.log(ReactDOM);
let VALUE = 1;
const rootElement = ReactDOM.createRoot(rootId);
rootElement.render(React.createElement(VALUE === 1 ? AppOne : AppTwo));

function AppOne() {
  return React.createElement(
    "section",
    null,
    React.createElement(
      "div",
      null,
      React.createElement("h2", null, "Hi There from App 1")
    )
  );
}

function AppTwo() {
  return React.createElement(
    "section",
    null,
    React.createElement(
      "div",
      null,
      React.createElement("h2", null, "Hi There from App 2")
    )
  );
}

function rerender() {
  VALUE = 2;
  rootElement.render(React.createElement(VALUE === 1 ? AppOne : AppTwo));
}
