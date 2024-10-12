import { ProductCard } from "./types";

export class Model {
  data: ProductCard[];

  constructor() {
    this.data = [];
  }

  loadingData = () => {
    return new Promise<void>((resolve, reject) => {
      fetch("data.json")
        .then((result) => result.json())
        .then((result) => {
          this.data = result;
          resolve();
        })
        .catch((err) => {
          console.log("Error: ", err);
          reject();
        });
    });
  };
}
