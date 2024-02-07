import { createClient } from 'redis';
import { RedisAdapter } from '../src';
import { testAdapter } from './testAdapter';

const client = createClient({ url: 'redis://localhost:6379' });
await client.connect();

const adapter = new RedisAdapter({ client });
await testAdapter(adapter);

process.exit(0);
