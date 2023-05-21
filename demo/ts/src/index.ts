// 单例设计模式
// 定义：一个 class 类，有且只能声明一个实例对象。

// console.log("Hello world!");


// localStorage.setItem('count', '30')
// localStorage.setItem('userinfo', JSON.stringify({ username: 'lisi', age: 23 }));

// var value = localStorage.getItem('userinfo')
// console.log(value != null ? JSON.parse(value) : null);

// class MyLocalStorage {
//     getItem(key: string) {
//         var value = localStorage.getItem(key);
//         return value != null ? JSON.parse(value) : null;
//     }
//     setItem(key: string, value: any): void {
//         if(typeof value !== 'string') {
//             value = JSON.stringify(value);
//         }
//         localStorage.setItem(key, value)
//     }
// }

// var myLocalStorage = new MyLocalStorage();

// myLocalStorage.setItem('count', '30');
// myLocalStorage.setItem('userinfo', { username: 'lisi', age: 23 });

// console.log(myLocalStorage.getItem('count'));
// console.log(myLocalStorage.getItem('userinfo'));
