export default function renderColor(internalData) {
  const graphColors = [];
  var internalDataLength = internalData.length;
  let i = 0;
  while (i <= internalDataLength) {
    var randomR = Math.floor(Math.random() * 130 + 100);
    var randomG = Math.floor(Math.random() * 130 + 100);
    var randomB = Math.floor(Math.random() * 130 + 100);

    var graphBackground =
      "rgb(" + randomR + ", " + randomG + ", " + randomB + ")";
    graphColors.push(graphBackground);

    i++;
  }
  return graphColors;
}
