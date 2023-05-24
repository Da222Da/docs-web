import React, { useState } from 'react';

export default function FeedbackForm() {
	const [text, setText] = useState('');
	const [states, setStates] = useState("default");

	async function handleSubmit(e) {
		e.preventDefault();
		setStates("sending");
		await sendMessage(text);
		setStates("finish");
	}
	const isSending = states === 'sending' ? true : false;
	const isFinish = states === 'finish' ? true : false;

	function sendMessage() {
		return new Promise((resolve) => {
			setTimeout(resolve, 2000);
		})

	}
	return <>
		<h3>How are you?</h3>
		<form onSubmit={handleSubmit}>
			<textarea placeholder='answer' disabled={isSending} value={text} onChange={e => setText(e.target.value)}></textarea>
			<br />
			<button type="sumbit" disabled={isSending || text == ""}>send</button>
		</form>
		{isSending && <p>Sending...</p>}
		{isFinish && <p>answer: {text}</p>}
	</>
}
