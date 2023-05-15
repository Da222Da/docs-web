// 函数重载（function signature overload）: 用于函数体相同，但实现细节又不同的情况。
// function signature，函数签名 = 函数名称 + 函数参数 + 函数参数类型 + 函数返回值类型
// 函数重载（function signature overload）规则：

type MessageType = 'image' | 'audio' | string;
type Message = {
	id: number,
	type: MessageType,
	content: string
}

let message: Array<Message> = [
	{ id: 0, type: 'text', content: '你好' },
	{ id: 1, type: 'image', content: 'image 1' },
	{ id: 2, type: 'image', content: 'image 2' },
	{ id: 3, type: 'audio', content: 'audio 1' },
	{ id: 4, type: 'audio', content: 'audio 2' },
	{ id: 5, type: 'audio', content: 'audio 3' },
];

// 函数结构不清晰、可读性差、可维护性差。
function getMessage(value: number | MessageType): Message | Array<Message> | undefined {
	if (typeof value === 'number') {
		return message.find((msg) => value === msg.id);
	} else {
		return message.filter((msg) => value === msg.type);
	}
}

console.log(getMessage(0));
console.log(getMessage(6));
console.log(getMessage('audio'));

