export const createId = (text: string): string => {
  const id: string = new Date().getTime().toString(16);
  return `${id}${text}`;
};
