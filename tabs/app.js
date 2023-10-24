const tabs = document.querySelectorAll("[data-tab-selector]");
const tabsContent = document.querySelectorAll("[data-tab-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabSelector);
    tabsContent.forEach((content) => content.classList.remove("active"));
    tabs.forEach((tab) => tab.classList.remove("active"));
    target.classList.add("active");
  });
});
