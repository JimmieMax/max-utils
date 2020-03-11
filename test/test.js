/*
 * @Desc: Test Case
 * @Author: Jimmie
 * @Date: 2019-12-16 18:26:18
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 */
'use strict';
const {
    expect,
    assert
} = require('chai');

const {
    parseTime,
    deepClone,
    debounce,
    type,
    numberAddDot,
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

describe('function type', () => {
    it('type "str" should return string', () => {
        expect(type("str")).to.equal('string');
    })
    it('type 666 should return number', () => {
        expect(type(666)).to.equal('number');
    })
    it('type {} should return object', () => {
        expect(type({})).to.equal('object');
    })
    it('type [] should return array', () => {
        expect(type([])).to.equal('array');
    })
    it('type null should return null', () => {
        expect(type(null)).to.equal('null');
    })
    it('type function(){} should return function', () => {
        expect(type(function(){})).to.equal('function');
    })
})

describe('function numberAddDot', () => {
    it('numberAddDot 10000000 should return 100,000,000', () => {
        expect(numberAddDot(10000000)).to.equal('10,000,000');
    })
    it('numberAddDot 10000000 should return number', () => {
        expect(numberAddDot(10000000, '`')).to.equal('10`000`000');
    })
})