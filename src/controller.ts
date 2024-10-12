import { Model } from "./model";
import { View } from "./view";

const model = new Model();
const view = new View();

init();

async function init() {
  await model.loadingData();
  view.render(model.data);
}
