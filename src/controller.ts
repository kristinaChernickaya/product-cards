import { Model } from "./model";
import { View } from "./view";

const model = new Model();
const view = new View();

init();

async function init() {
  await model.loadingData();
  view.render(model.data);
  addEventListeners();
}

function addEventListeners() {
  view.elements.filterInput?.addEventListener("change", sortProduct);
  view.elements.sortCategorySelect?.addEventListener("change", sortProduct);
  view.elements.sortTypeSelect?.addEventListener("change", sortProduct);
  view.elements.sortOrderSelect?.addEventListener("change", sortProduct);
}

function sortProduct() {
  const dataValue = view.getElementValue();
  const sortingData = model.sortProduct(dataValue);
  console.log(sortingData);
  view.render(sortingData);
}
