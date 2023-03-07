import { useLocalStorage } from "@vueuse/core";

const card = useLocalStorage("card", {
  items: [],
});
const PRECISION = 100; // round float to 2-digit xx,xx

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
    card.value = {
      ...card.value,
      totalProducts: card.value.totalProducts + 1 || 1,
      totalPrice:
        Math.round(
          (card.value.totalPrice + parseFloat(item.price) ||
            parseFloat(item.price)) * PRECISION
        ) / PRECISION,
      [item.id]: {
        title: item.title,
        image: item.image,
        amount: card.value[item.id]?.amount + 1 || 1,
        reservingPrice: item.price,
      },
    };
  }

  function removeFromCart(item) {
    card.value = {
      ...card.value,
      totalPrice:
        Math.round(
          (card.value.totalPrice -
            card.value[item].amount * card.value[item].reservingPrice) *
            PRECISION
        ) / PRECISION,
      totalProducts: card.value.totalProducts - card.value[item].amount,
    };
    delete card.value[item];
  }

  return {
    capitalizeSentence,
    addToCard,
    removeFromCart,
  };
};
