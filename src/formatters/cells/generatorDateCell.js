import generatorCellNumber from '../../commons/generatorCellNumber';

export default (index, value, rowIndex, dateStyle) => (`<c r="${generatorCellNumber(index, rowIndex)}" s="${dateStyle}"><v>${value}</v></c>`);
