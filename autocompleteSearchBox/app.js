const mockResults = [
  "Javascript",
  "webDevelopment",
  "Learn Vanilla Javascript",
  "Learn Modern web development",
];

const inputSearchBar = document.getElementById("search-bar");
const resultBar = document.getElementsByClassName("result-status");

inputSearchBar.onkeyup = () => {
  let results = [];
  const value = inputSearchBar.value;
  if (value.length > 0) {
    results = mockResults.filter((val) =>
      val.toLowerCase().includes(value.toLowerCase())
    );
    console.log("results are ", results);
  }
  showResults(results);
};

const showResults = (results) => {
  const content = results.map((val) => {
    return "<li>" + val + "</li>";
  });
  console.log("contetn is ", content);
  resultBar.innerHTML = "<ul>" + content.join("") + "</ul>";
  console.log("result bar  is ", resultBar);
};
