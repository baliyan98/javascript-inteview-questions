console.log("inside js file");
Array.prototype.forEach.call(
  document.querySelectorAll(".file-upload__button"),
  function (button) {
    const hiddenInput = button.parentElement.querySelector(
      ".file-upload__input"
    );
    const label = button.parentElement.querySelector(".file-upload__label");
    const defaultLabelText = "No file(s) selected";
    // sets default text for label
    label.textContent = defaultLabelText;
    label.title = defaultLabelText;
    button.addEventListener("click", function () {
      hiddenInput.click();
    });
    hiddenInput.addEventListener("change", function () {
      const fileNames = Array.prototype.map.call(
        hiddenInput.files,
        function (file) {
          return file.name;
        }
      );
      label.textContent = fileNames.join(", ") || defaultLabelText;
      label.title = label.textContent;
    });
  }
); // to have a support fo internet explorer also as it doesn't support array.forEach method
