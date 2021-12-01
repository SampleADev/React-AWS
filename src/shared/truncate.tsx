export const truncate = (str: string, allowLength: number) =>
  str.length > allowLength ? `${str.substring(0, allowLength)}...` : str;
