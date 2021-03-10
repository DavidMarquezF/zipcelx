import formatRow from '../../../src/formatters/rows/formatRow';
import baseConfig from '../../baseConfig';

const expectedXML = '<row r="1"><c r="A1" t="inlineStr"><is><t>Test</t></is></c><c r="B1"><v>1000</v></c><c r="C1" s="1"><v>36544</v></c><c r="D1" s="2"><v>1000</v></c><c r="E1" s="3"><v>1000</v></c></row>';

describe('Format Row', () => {
  it('Should create one row from given data', () => {
    expect(formatRow(baseConfig.sheet.data[0], 0)).toBe(expectedXML);
  });
});
