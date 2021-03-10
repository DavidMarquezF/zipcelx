import generatorDateCell from '../../../src/formatters/cells/generatorDateCell';

export const expectedXML = '<c r="A1" s="1"><v>36504</v></c>';

describe('Cell of type Date', () => {
  it('Should create a new xml markup cell', () => {
    //Date is 10/12/1999
    expect(generatorDateCell(0, new Date(1999, 11, 10), 1, 1)).toBe(expectedXML);
  });
});
