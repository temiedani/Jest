const sum = require('./sum');

test('does the sum function work', () => {
    expect(
        sum(1, 2)
    ).toBe(3)
    expect(
        sum(-1, 3)
    ).toBe(2)
});