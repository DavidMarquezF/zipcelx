import { validTypes, CELL_TYPE_STRING, WARNING_INVALID_TYPE, CELL_TYPE_NUMBER, CELL_TYPE_DATE, CELL_TYPE_TIME, CELL_TYPE_DATETIME } from '../../commons/constants';
import generatorStringCell from './generatorStringCell';
import generatorNumberCell from './generatorNumberCell';
import generatorDateCell from './generatorDateCell';

export default (cell, index, rowIndex) => {
  if (validTypes.indexOf(cell.type) === -1) {
    console.warn(WARNING_INVALID_TYPE);
    cell.type = CELL_TYPE_STRING;
  }

  switch (cell.type) {
    case CELL_TYPE_STRING:
      return generatorStringCell(index, cell.value, rowIndex);
    case CELL_TYPE_NUMBER:
      return generatorNumberCell(index, cell.value, rowIndex);
    case CELL_TYPE_DATE:
      return generatorDateCell(index, cell.value, rowIndex, 1);
    case CELL_TYPE_TIME:
      return generatorDateCell(index, cell.value, rowIndex, 2);
    case CELL_TYPE_DATETIME:
      return generatorDateCell(index, cell.value, rowIndex, 3);
    default:
      return generatorStringCell(index, cell.value, rowIndex);
  }
};
