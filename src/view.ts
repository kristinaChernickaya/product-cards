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
    dataList.forEach((product) => {
      const markup = `
        <li>
          <span>${product.subtitle}</span>
          <h3>${product.name}</h3>
          <p>Price: <b> ${product.price}$</b></p>
          <p>${product.category}</p>
        </li>
      `;
      this.elements.productsList?.insertAdjacentHTML("afterbegin", markup);
    });
  }

  getElementValue() {
    return {
      sortCategoryValue: this.elements.sortCategorySelect?.value,
      sortTypeValue: this.elements.sortTypeSelect?.value,
      sortOrderValue: this.elements.sortOrderSelect?.value,
    };
  }
}
