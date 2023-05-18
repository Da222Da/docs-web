type MessageType = "image" | "audio" | string;
type Message = {
	id: number;
	type: MessageType;
	content: string;
};

const message: Array<Message> = [
	{ id: 0, type: "text", content: "text 1" },
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
function getMessage(value: any, count?: number) {
	if (typeof value === "number") {
		return message.find((msg) => value === msg.id);
	} else {
		return message.filter((msg) => value === msg.type).splice(0, count);
	}
}

export default getMessage;
