// 函数重载，函数签名重载（function signature overload），是指对函数签名进行细分的一种编程技术，可以提高代码的可读性和可维护性，但是，需要注意合理使用，避免引起代码错误和混乱。
// function = 函数签名(function signature) + 函数体（function body）
// function signature，函数签名 = 函数名称 + 函数参数 + 函数参数类型 + 函数返回值类型

type MessageType = "image" | "audio" | string;
type Message = {
	id: number;
	type: MessageType;
	content: string;
};

let message: Array<Message> = [
	{ id: 0, type: "text", content: "你好" },
	{ id: 1, type: "image", content: "image 1" },
	{ id: 2, type: "image", content: "image 2" },
	{ id: 3, type: "audio", content: "audio 1" },
	{ id: 4, type: "audio", content: "audio 2" },
	{ id: 5, type: "audio", content: "audio 3" },
];

// 函数结构不清晰、可读性差、可维护性差。
// function getMessage(value: number | MessageType): Message | Array<Message> | undefined {
// 	if (typeof value === "number") {
// 		return message.find((msg) => value === msg.id);
// 	} else {
// 		return message.filter((msg) => value === msg.type);
// 	}
// }

function getMessage(value: number): Message | undefined; // 函数重载签名
function getMessage(value: MessageType, count?: number): Array<Message>; // 函数重载签名

// 函数签名
// 函数签名的参数类型与返回值类型一定得包含函数重载签名的参数类型与返回值类型
function getMessage(value: any, count?: number): any {
	if (typeof value === "number") {
		return message.find((msg) => value === msg.id);
	} else {
		return message.filter((msg) => value === msg.type).splice(0, count);
	}
}

console.log(getMessage(0));
console.log(getMessage(6));
getMessage("audio", 2).forEach((msg) => console.log(msg));
