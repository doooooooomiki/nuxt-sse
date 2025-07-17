import { NYTIMES_API_INTERVAL } from '#shared/constants';

export default defineEventHandler(async (event) => {
  const eventStream = createEventStream(event);

  // Send data immediately
  try {
    const response = await fetchNewswire();
    eventStream.push(`Message @ ${JSON.stringify(response)}`);
  } catch (error) {
    eventStream.push(`Message @ ${JSON.stringify(error)}`);
  }

  // Start interval to send data every 60 seconds
  const interval = setInterval(async () => {
    try {
      const response = await fetchNewswire();
      await eventStream.push(`Message @ ${JSON.stringify(response)}`);
    } catch (error) {
      console.error(error);
      await eventStream.push(`Message @ ${JSON.stringify(error)}`);
    }
  }, NYTIMES_API_INTERVAL);

  // Handle stream closure
  eventStream.onClosed(async () => {
    clearInterval(interval);
    await eventStream.close();
  });

  return eventStream.send();
});
