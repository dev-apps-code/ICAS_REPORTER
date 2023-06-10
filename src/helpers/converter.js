export const hexToRgba = hex => {
  var c;
  c = hex.substring(1).split('');
  if (c.length == 3) {
    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
  }
  c = '0x' + c.join('');
  return (
    'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',0.4)'
  );
};
