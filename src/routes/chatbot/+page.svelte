<script>
	import { writable } from 'svelte/store';

	let message = '';
	let messages = writable([]);
	let botResponses = [
		'Hallo! Welkom bij de Openbare Bibliotheek Amsterdam. Waarmee kan ik u vandaag helpen?',
		'Dat klinkt goed! Kunt u mij de titel of het onderwerp geven waarin u geïnteresseerd bent?',
		'Ik kan daar zeker bij helpen! Zoekt u naar een specifiek boek of wilt u een lijst van aanbevelingen?',
		'Dat boek is te vinden op de tweede verdieping, bij de sectie Literatuur. Wilt u nog iets anders weten?',
		'Graag gedaan! Als u nog andere vragen heeft, aarzel niet om contact op te nemen. Fijne dag verder en we hopen u snel weer te zien in de OBA!'
	];

	function sendMessage() {
		messages.update((currentMessages) => {
			let updatedMessages = [...currentMessages, { text: message, sender: 'user' }];
			message = '';

			setTimeout(() => {
				let botResponseIndex = currentMessages.length / 2;
				let botResponse = botResponses[botResponseIndex];
				messages.update((currentMessages) => [
					...currentMessages,
					{ text: botResponse, sender: 'bot' }
				]);
			}, 1000);

			return updatedMessages;
		});
	}
</script>

<main>
	<div class="chatbox">
		{#each $messages as msg (msg.text)}
			<div class={msg.sender}>
				<p>{msg.text}</p>
			</div>
		{/each}
	</div>

	<input
		bind:value={message}
		on:keydown={(e) => {
			if (e.key === 'Enter') {
				e.preventDefault();
				sendMessage();
			}
		}}
		placeholder="Type a message..."
	/>
	<button on:click={sendMessage}>Send</button>
</main>

<style>
	main {
		font-family: 'Poppins', sans-serif;
	}

	.chatbox {
		height: 90vh;
		border: 1px solid #ccc;
		padding: 10px;
		overflow-y: auto;

		display: flex;
		flex-direction: column;
	}

	.user,
	.bot {
		position: relative;
		margin: 10px 20px;
		padding: 10px;
		border-radius: 10px;
		max-width: 60%;
	}

	.user {
		text-align: right;
		background-color: #0064c8;
		align-self: flex-end;
		color: white;
	}

	.user::after {
		content: '';
		position: absolute;
		top: 0;
		right: -7px;
		width: 0;
		height: 0;
		border: 15px solid transparent;
		border-left-color: #0064c8;
		border-right: 0;
		border-bottom: 0;
		margin-top: -15px;
		margin-right: -15px;
	}

	.bot {
		text-align: left;
		background-color: #fff;

		align-self: flex-start;
	}

	.bot::after {
		content: '';
		position: absolute;
		top: 0;
		left: -7px;
		width: 0;
		height: 0;
		border: 15px solid transparent;
		border-right-color: #fff;
		border-left: 0;
		border-bottom: 0;
		margin-top: -15px;
		margin-left: -15px;
	}

	input,
	button {
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		border: none;
		border-radius: 4px;
	}

	button {
		color: #fff;
		background-color: #0064c8;
		cursor: pointer;
	}
</style>
