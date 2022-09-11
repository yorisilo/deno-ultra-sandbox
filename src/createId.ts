export const createId = (): string => {
  const id: string = new Date().getTime().toString(16);
  return `${id}`;
};
