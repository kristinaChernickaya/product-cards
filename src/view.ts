import { ProductCard } from "./types";

export class View {
  constructor() {}

  elements = {
    productsList: document.querySelector(".productList"),
  };

  render(dataList: ProductCard[]) {
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
}
