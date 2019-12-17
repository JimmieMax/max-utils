'use strict';
const {
    expect,
    assert
} = require('chai');

const {
    parseTime,
    deepClone
} = require('../dist/index');

describe('function parseTime', () => {
    it('should return 2019-11-11 星期一 00:00:00', () => {
        const result = parseTime(new Date('2019,11,11'), '{y}-{m}-{d} 星期{a} {h}:{i}:{s}');
        expect(result).to.equal('2019-11-11 星期一 00:00:00');
    });
});

describe('function deepClone', () => {
    const originalData = {
        a: 1,
        b: 'old',
        c: [1, 2, 3]
    };
    const result = deepClone(originalData);
    result.b = 'new';
    result.c[3] = 4;
    it('originalData.a should equal result.a', () => {
        expect(originalData.a).to.equal(result.a);
    });
    it('originalData.b should return old', () => {
        expect(originalData.b).to.equal('old');
    });
    it('result.b should return new', () => {
        expect(result.b).to.equal('new');
    });
    it('originalData.c.length should return 3', () => {
        assert.lengthOf(originalData.c, 3);
    });
    it('result.c.length should return 4', () => {
        assert.lengthOf(result.c, 4);
    });
});