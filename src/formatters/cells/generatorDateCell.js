import generatorCellNumber from '../../commons/generatorCellNumber';

export default (index, value, rowIndex, dateStyle) => (`<c r="${generatorCellNumber(index, rowIndex)}" s="${dateStyle}"><v>${dateStyle === 1 ? parseInt((value - new Date(1900, 1, 1)) / (24 * 60 * 60 * 1000), 10) : value}</v></c>`);
