import { checkError, client } from './client';

export async function getStories() {
  const resp = await client.from('stories').select('*');
  return checkError(resp);
}

export async function createNewStory(title, name, entry) {
  const resp = await client.from('stories').insert({ title, name, entry });
  return checkError(resp);
}

export async function updateStory(id, title, name, entry) {
  const resp = await client.from('stories').update({ title, name, entry }).match({ id });
  return checkError(resp);
}
