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
}

function sortProductController() {
  const currentValues = view.sortSelectValue();
  const sortData = model.sortProduct(currentValues);
  console.log(sortData);
  view.render(sortData);
}

function filterProductsController() {
  const curentValue = this.value.toLowerCase();
  model.filterSearchForLetter(curentValue);
  sortProductController();
}
