import { checkError, client } from './client';

export async function getStories() {
  const resp = await client.from('stories').select('*');
  return checkError(resp);
}

export async function createNewStory(title, name, entry) {
  const resp = await client.from('stories').insert({ title, name, entry });
  return checkError(resp);
}

export async function getStoryByID(id) {
  const resp = await client.from('stories').select('*').match({ id }).single();
  return checkError(resp);
}

export async function updateStory(id, title, name, entry) {
  const resp = await client.from('stories').update({ title, name, entry }).match({ id });
  return checkError(resp);
}

export async function deleteStoryByID(id) {
  const resp = await client.from('stories').delete().match({ id }).single();
  return checkError(resp);
}
