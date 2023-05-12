describe('checked:原始值', () => {
	test('1.校验原始值相等', () => {
		const a = { name: 'John' }
		expect(3).toBe(3);
		expect(a).toBe(a);
		expect(3).toEqual(3);
	});

	test('2.校验原始值不相等', () => {
		expect('3').not.toBe(3);
	});

	test('3.不能校验浮点数', () => {
		expect(0.1 + 0.2).not.toBe(0.3);
	});

	test('4.检测 null', () => {
		const n = null;
		expect(n).toBeNull();
	})

	test('5.检测 undefined', () => {
		const n = undefined;
		expect(n).toBeUndefined();
	})

	test('6.if true', () => {
		expect(1 && 1).toBeTruthy();
	})

	test('7.if false', () => {
		expect(0 || 0).toBeFalsy();
	})

	test('8. 对比数字大小', () => {
		const value = 2 + 2;
		expect(value).toBeGreaterThan(3);
		expect(value).toBeGreaterThanOrEqual(3.5);
		expect(value).toBeLessThan(5);
		expect(value).toBeLessThanOrEqual(4.5);

		expect(value).toBe(4);
		expect(value).toEqual(4);
	})

	test('7.string', () => {
		expect('team').toMatch(/team/);
		expect('Christoph').toMatch(/stop/);
	})
})

describe('checked:引用值', () => {
	test('1.递归检验对象里面的每一个值', () => {
		const obj = { a: 1, b: 2 };
		expect(obj).toEqual({ a: 1, b: 2 });
	})

	test('2.检查可迭代对象中是否包含某一项', () => {
		const shoppingList = [
			'diapers',
			'kleenex',
			'trash bags',
			'paper towels',
			'milk',
		];
		expect(shoppingList).toContain('diapers');
	})


})


