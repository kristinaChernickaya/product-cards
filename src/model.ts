import { TProductCard, TSelectValue } from "./types";

export class Model {
  data: TProductCard[];
  filterData: TProductCard[];

  constructor() {
    this.data = [];
    this.filterData = [];
  }

  loadingData = () => {
    return new Promise<void>((resolve, reject) => {
      fetch("data.json")
        .then((result) => result.json())
        .then((result) => {
          this.data = result;
          this.filterData = [...this.data];
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
      filterData = this.filterData.filter((product) => {
        return product.category === sortCategoryValue;
      });
    } else {
      filterData = [...this.filterData];
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

  filterSearchForLetter(curentValue: string) {
    if (curentValue === "") {
      this.filterData = [...this.data];
    } else {
      this.filterData = this.data.filter((product) => {
        return product.name.toLowerCase().includes(curentValue);
      });
    }
  }
}
