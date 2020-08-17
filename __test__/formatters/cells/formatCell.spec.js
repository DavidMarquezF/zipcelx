import { WARNING_INVALID_TYPE } from '../../../src/commons/constants';
import formatCell from '../../../src/formatters/cells/formatCell';
import baseConfig from '../../baseConfig';

const cells = baseConfig.sheet.data[0];

console.warn = jest.genMockFn();

describe('Format Cell', () => {
  describe('Create a cell of type sting', () => {
    const expectedXML = '<c r="A1" t="inlineStr"><is><t>Test</t></is></c>';

    it('Should fallback to string if invalid type was supplied', () => {
      const cell = Object.assign({}, cells[0], { type: 'formula' });
      formatCell(cell);
      expect(console.warn).toBeCalledWith(WARNING_INVALID_TYPE);
      expect(formatCell(cell, 0, 1)).toBe(expectedXML);
    });

    it('Create cell', () => {
      expect(formatCell(cells[0], 0, 1)).toBe(expectedXML);
    });
  });

  describe('Create a cell of type number', () => {
    const expectedXML = '<c r="B1"><v>1000</v></c>';
    it('Create cell', () => {
      expect(formatCell(cells[1], 1, 1)).toBe(expectedXML);
    });
  });

  describe('Create a cell of type date', () => {
    const expectedXML = '<c r="B1" s="1"><v>1000</v></c>';
    it('Create cell', () => {
      expect(formatCell(cells[2], 1, 1)).toBe(expectedXML);
    });
  });

  describe('Create a cell of type time', () => {
    const expectedXML = '<c r="B1" s="2"><v>1000</v></c>';
    it('Create cell', () => {
      expect(formatCell(cells[3], 1, 1)).toBe(expectedXML);
    });
  });

  describe('Create a cell of type datetime', () => {
    const expectedXML = '<c r="B1" s="3"><v>1000</v></c>';
    it('Create cell', () => {
      expect(formatCell(cells[4], 1, 1)).toBe(expectedXML);
    });
  });
});
