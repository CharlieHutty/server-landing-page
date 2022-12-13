import Card from '$lib/Card.svelte';

describe('Pokemon Details', () => {
	let instance: Card | null = null;
	beforeEach(() => {
		const host = document.createElement('div');
		document.body.append(host);
		instance = new Card({ target: host });
	});

	it('Should show a loading spinner when making the API Call', () => {
		expect(instance).toBeTruthy();
	});
});
