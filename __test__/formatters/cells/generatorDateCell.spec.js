import generatorDateCell from '../../../src/formatters/cells/generatorDateCell';

export const expectedXML = '<c r="A1" s="1"><v>1000</v></c>';

describe('Cell of type Date', () => {
  it('Should create a new xml markup cell', () => {
    expect(generatorDateCell(0, 1000, 1, 1)).toBe(expectedXML);
  });
});
