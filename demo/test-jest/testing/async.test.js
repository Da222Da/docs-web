// 测试异步代码

// fetchData() 定义
function fetchData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('hello');
		}, 1000);
	});
}


test('1.test async function with promise', () => {
	return fetchData().then(data => {
		expect(data).toEqual('hello');
	});
});

test('同步测试：1+1=2', () => {
	expect(1 + 1).toEqual(2);
})


test('2.test async function with Modifiers', () => {
	// 注意！这里的 return 不能省略，否则测试会在 fetchData 解析之前被完成。
	return expect(fetchData()).resolves.toEqual('hello');
});

test('3.test async function with async/await', async () => {
	const data = await fetchData();
	expect(data).toEqual('hello');
});

