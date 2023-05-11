

// test('校验引用值相等', () => {
// 	expect({ a: 1 }).toEqual({ a: 1 });
// });


describe('toBe', () => {
	test('校验原始值相等', () => {
		expect(3).toBe(3);
	});

	test('校验原始值不相等', () => {
		expect('3').not.toBe(3);
	});

	test('不能校验浮点数', () => {
		expect(0.1 + 0.2).not.toBe(0.3);
	});
})

