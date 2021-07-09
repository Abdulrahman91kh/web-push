self.addEventListener('push', () => {
	const options = {};
	self.registration.showNotification('Hello world!', options);
});