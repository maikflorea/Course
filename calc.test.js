let calculator = require('/calculator');

test('addition 1 + 2 should de equals to 3', () => {
    expect(calculator.add(1,2)).toBe(3);
});

