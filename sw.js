self.addEventListener('push', () => {
	const options = {
		body: 'Your session is live now',
		icon: 'images/example.png',
		vibrate: [100, 50, 100],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: 1
		}
	};
	self.registration.showNotification('Hello world!', options);
});