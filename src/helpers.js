export function replaceUmlauts(stringWithUmlauts) {
  stringWithUmlauts = stringWithUmlauts.replace('ä', 'ae');
  stringWithUmlauts = stringWithUmlauts.replace('ö', 'oe');
  stringWithUmlauts = stringWithUmlauts.replace('ü', 'ue');
  stringWithUmlauts = stringWithUmlauts.replace('ß', 'ss');
  
  return stringWithUmlauts;
}
