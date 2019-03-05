const colors = [
  '#cdffcd',
  '#ffcdcd',
  '#cdcdff',
  '#aeddae',
  '#ddaeae',
  '#aeaedd',
  '#99ee99',
  '#ee9999',
  '#9999ee',
  '#87ff87',
  '#ff8787',
  '#8787ff'
];

const generateTagColor = () => colors[Math.ceil(Math.random() * Math.floor(colors.length))];

export default generateTagColor;
