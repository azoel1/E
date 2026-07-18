// Listen for messages from the page
self.addEventListener('message', (event) => {
  self.registration.showNotification("Game Alert!", {
    body: event.data,
    requireInteraction: true
  });
});

