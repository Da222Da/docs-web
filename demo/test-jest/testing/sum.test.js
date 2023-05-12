const sum = require('../sum');

beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('sum should return the sum of two numbers', () => {
	expect(sum(2, 3)).toBe(5);
});



