export type TProductCard = {
  id: number;
  subtitle: string;
  name: string;
  price: number;
  date: string;
  category: string;
};

export type TSelectValue = {
  sortCategoryValue: "all" | "laptop" | "tablets" | "phones" | "headset";
  sortTypeValue: "date" | "price" | "alphabet";
  sortOrderValue: "ask" | "desc";
};
