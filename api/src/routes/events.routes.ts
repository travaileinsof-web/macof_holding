import { Hono } from 'hono';
import { streamSSE } from 'hono/streaming';
import { eventEmitter } from '../services/events';

export const eventsRoutes = new Hono();

eventsRoutes.get('/', (c) => {
  return streamSSE(c, async (stream) => {
    // Ping to keep the connection alive
    const interval = setInterval(() => {
      stream.writeSSE({ event: 'ping', data: 'ping' }).catch(() => {});
    }, 15000);

    const onInvalidate = async (data: { entity: string }) => {
      try {
        await stream.writeSSE({ event: 'invalidate', data: JSON.stringify(data) });
      } catch (err) {
        console.error('SSE Write Error:', err);
      }
    };

    eventEmitter.on('invalidate', onInvalidate);

    stream.onAbort(() => {
      clearInterval(interval);
      eventEmitter.off('invalidate', onInvalidate);
    });

    // Wait until the connection is aborted
    await new Promise(() => {});
  });
});
