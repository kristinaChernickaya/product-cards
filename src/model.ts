import { TProductCard, TSelectValue } from "./types";

export class Model {
  data: TProductCard[];

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

  sortProduct(dataValue: TSelectValue) {
    const { sortCategoryValue, sortTypeValue, sortOrderValue } = dataValue;

    let filterData;
    if (sortCategoryValue !== "all") {
      filterData = this.data.filter((product) => {
        return product.category === sortCategoryValue;
      });
    } else {
      filterData = [...this.data];
    }

    return filterData.sort((a, b) => {
      switch (sortTypeValue) {
        case "date":
          return sortOrderValue !== "ask"
            ? Date.parse(a.date) - Date.parse(b.date)
            : Date.parse(b.date) - Date.parse(a.date);
        case "price":
          return sortOrderValue !== "ask"
            ? a.price - b.price
            : b.price - a.price;
        case "alphabet":
          const priceA = a.name.toLowerCase();
          const priceB = b.name.toLowerCase();

          if (sortOrderValue !== "ask") {
            if (priceA < priceB) {
              return 1;
            } else if (priceA > priceB) {
              return -1;
            } else {
              return 0;
            }
          } else {
            if (priceA > priceB) {
              return 1;
            } else if (priceA < priceB) {
              return -1;
            } else {
              return 0;
            }
          }
      }
    });
  }
}
