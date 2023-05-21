// 封装 localStorage
class MyLocalStorage {
	private static intance: MyLocalStorage;
	private constructor() {}
	public static getIntance(): MyLocalStorage {
		if (!MyLocalStorage.intance) {
			MyLocalStorage.intance = new MyLocalStorage();
		}
		return MyLocalStorage.intance;
	}
	getItem(key: string) {
		var value = localStorage.getItem(key);
		return value != null ? JSON.parse(value) : null;
	}
	setItem(key: string, value: any): void {
		if (typeof value !== "string") {
			value = JSON.stringify(value);
		}
		localStorage.setItem(key, value);
	}
}

export default MyLocalStorage;
