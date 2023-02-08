import { checkError, client } from './client';

export async function getStories() {
  const resp = await client.from('stories').select('*');
  return checkError(resp);
}
