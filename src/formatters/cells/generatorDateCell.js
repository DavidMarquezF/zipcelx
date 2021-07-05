import generatorCellNumber from '../../commons/generatorCellNumber';

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const START_DATE = new Date(1900, 0, 0);
function getDate(value) {
  const valueUTC = Date.UTC(value.getFullYear(), value.getMonth(), value.getDate()); // In case the date is DST. he date on which the DST change happens will have a duration in milliseconds which is != 1000*60*60*24, so the typical calculation will fail.
  return Math.round((valueUTC - START_DATE) / MS_PER_DAY) + 1;
}

export default (index, value, rowIndex, dateStyle) => (`<c r="${generatorCellNumber(index, rowIndex)}" s="${dateStyle}"><v>${dateStyle === 1 ? getDate(value) : value}</v></c>`);
