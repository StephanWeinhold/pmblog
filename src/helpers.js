export function replaceUmlauts(stringWithUmlauts) {
  const stringWithoutUmlauts = stringWithUmlauts.replace('ä', 'ae').replace('ö', 'oe').replace('ü', 'ue').replace('ß', 'ss');
  
  return stringWithoutUmlauts;
}
