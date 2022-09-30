const subtract = require('./subtract');

test('does the subtract function work', () => {
    expect(
        subtract(1, 2)
    ).toBe(-1)
    expect(
        subtract(-1, 3)
    ).toBe(-4)
    expect(
        subtract(0, 0)
    ).toBe(0)
});