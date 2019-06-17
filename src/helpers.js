export function replaceUmlauts(stringWithUmlauts) {
  let stringWithoutUmlauts = stringWithUmlauts.replace('ä', 'ae').replace('ö', 'oe').replace('ü', 'ue').replace('ß', 'ss');
  
  return stringWithoutUmlauts;
}
