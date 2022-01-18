export function getClass(data: Record<string, boolean>) {
  return Object.entries(data)
    .map((item) => (item[1] ? item[0] : null))
    .filter((item) => item !== null)
    .join(' ');
}

export const makeId = (length: number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
