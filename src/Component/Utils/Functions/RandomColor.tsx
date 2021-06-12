const colors = [
  '#ffc107',
  '#f54748',
  '#4aa96c',
  '#e1701a',
  '#f21170',
  '#1cc5dc',
  '#81b214',
  '#ce1212',
  '#f39189',
  '#e48257',
  '#693c72',
  '#845ec2',
  '#af0069',
  '#184d47',
  '#fd3a69',
  '#120078',
  '#f55c47',
  '#52057b',
  '#335d2d',
  '#40a8c4',
  '#fb9300',
];

export const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
