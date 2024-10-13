import { TProductCard } from "./types";

export class View {
  constructor() {}

  elements = {
    productsList: document.querySelector(".productList"),
    filterInput: document.querySelector("#filterInput"),
    sortCategorySelect: document.querySelector("#sortCategorySelect"),
    sortTypeSelect: document.querySelector("#sortTypeSelect"),
    sortOrderSelect: document.querySelector("#sortOrderSelect"),
  };

  render(dataList: TProductCard[]) {
    this.elements.productsList.innerHTML = "";
    dataList.forEach((product) => {
      const markup = `
        <li>
          <h3>${product.name}</h3>
          <span>${product.subtitle}</span>
          <p>Price: <b> ${product.price}$</b></p>
          <p>${product.category}</p>
        </li>
      `;
      this.elements.productsList?.insertAdjacentHTML("afterbegin", markup);
    });
  }

  sortSelectValue() {
    return {
      sortCategoryValue: this.elements.sortCategorySelect?.value,
      sortTypeValue: this.elements.sortTypeSelect?.value,
      sortOrderValue: this.elements.sortOrderSelect?.value,
    };
  }
}
