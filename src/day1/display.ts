export default (entries: Array<number>, target: number): void => {
  if (entries) {
    const product = entries.reduce((acc: number, value: number) => acc * value, 1);
    console.log(
      `${entries.join(', ')} found that add up to ${target}.\n\nTheir product is ${product}.`,
    );
  } else {
    console.log('No entries found');
  }
};
