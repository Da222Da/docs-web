// getMessage.test.ts
import getMessage from '../src/function-signature-overload';

describe('测试：函数签名重载', () => {
	test('getMessage 在给定正确的id时应当返回消息对象', () => {
		expect(getMessage(0)).toEqual({ id: 0, type: 'text', content: 'text 1' });
	});
	test('getMessage 在给定正确的type和count时应当返回消息对象的数组', () => {
		expect(getMessage('image', 2)).toEqual([
			{ id: 1, type: 'image', content: 'image 1' },
			{ id: 2, type: 'image', content: 'image 2' },
		]);
	});
	test('getMessage 在给定无效的id时应当返回 undefined', () => {
		expect(getMessage(6)).toBeUndefined();
	});
	test('getMessage 在给定无效的type时应当返回空数组', () => {
		expect(getMessage('video')).toEqual([]);
	});
});
