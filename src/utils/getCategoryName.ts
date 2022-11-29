export const getCategoryName = (category: string) => {
  return category
    .split("")
    .map((letter, index) => {
      return index === 0 ? letter.toUpperCase() : letter;
    })
    .join("");
};
