export default (min: number, max: number) => (value?: string): boolean => {
  if (value?.length !== 4) {
    return false;
  }

  const year = parseInt(value, 10);
  return year >= min && year <= max;
};
