// this file is to just create a fake DOM objects and renders them into tha page

let mockDom = {
  type: "article",
  children: [
    {
      type: "text",
      text: "Good Morning",
    },
    {
      type: "h2",
      children: [
        {
          type: "text",
          text: "Good Evening",
        },
      ],
    },
  ],
};

const renderDom = (fakeDom, rootElement) => {
  let newDomNode =
    fakeDom.type === "text"
      ? document.createTextNode(fakeDom.text)
      : document.createElement(fakeDom.type);
  if (fakeDom.children) {
    fakeDom.children.forEach((child) => {
      renderDom(child, newDomNode);
    });
  }
  rootElement.appendChild(newDomNode);
};

const parentNode = document.getElementById("main");
renderDom(mockDom, parentNode);
