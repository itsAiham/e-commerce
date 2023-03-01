import { useLocalStorage } from "@vueuse/core";

export const useUtilities = () => {
  function capitalizeSentence(sentence) {
    const arr = sentence.split(" ");
    let str = "";
    arr.forEach((word) => {
      str += word.charAt(0).toUpperCase() + word.slice(1) + " ";
    });
    return str;
  }

  function addToCard(item) {
    const card = useLocalStorage("card", {});

    card.value = {
      ...card.value,
      totalProducts: card.value.totalProducts + 1 || 1,
      [item.id]: {
        amount: card.value[item.id]?.amount + 1 || 1,
        receivedPrice: item.price,
      },
    };
  }

  return {
    capitalizeSentence,
    addToCard,
  };
};
