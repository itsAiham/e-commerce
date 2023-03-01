import { useLocalStorage } from "@vueuse/core";
const card = useLocalStorage("card", {});

export const useCounter = () =>
  useState("counter", () => card?.value.totalProducts || 0);

export const useProductsList = () =>
  useState("products", async () => await useProducts());
