export default (treeCounts: number[]): void => {
  const treesHit = treeCounts.join(', ');
  const product = treeCounts.reduce((acc, current) => current * acc, 1);

  console.log(
    `You hit ${treesHit} trees along the way!\n\nThe product of these numbers is ${product}.`,
  );
};
