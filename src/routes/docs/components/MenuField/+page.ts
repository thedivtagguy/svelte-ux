import api from '$lib/components/MenuField.svelte?raw&sveld';
import source from '$lib/components/MenuField.svelte?raw';
import pageSource from './+page.svelte?raw';

export async function load() {
  return {
    meta: {
      api,
      source,
      pageSource,
    },
  };
}
