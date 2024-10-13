import { Model } from "./model";
import { View } from "./view";

const model = new Model();
const view = new View();

init();

async function init() {
  await model.loadingData();
  view.render(model.data);
  addListenerElement();
}

function addListenerElement() {
  view.elements.sortCategorySelect?.addEventListener(
    "change",
    sortProductController
  );
  view.elements.sortTypeSelect?.addEventListener(
    "change",
    sortProductController
  );
  view.elements.sortOrderSelect?.addEventListener(
    "change",
    sortProductController
  );
  view.elements.filterInput?.addEventListener(
    "input",
    filterProductsController
  );
  view.elements.form?.addEventListener("submit", resetFilterController);
}

function sortProductController() {
  const currentValues = view.getSelectValue();
  const sortData = model.sortProduct(currentValues);
  view.render(sortData);
}

function filterProductsController() {
  const curentValue = this.value.toLowerCase();
  console.log("sss", curentValue);
  model.filterSearchForLetter(curentValue);

  sortProductController();
}

function resetFilterController(e) {
  e.preventDefault();
  view.resetFilter();
  view.render(model.data);
  // filterProductsController();
}
