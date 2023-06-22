/** @type {import('./$types').PageLoad} */
import { redirect } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
//   await new Promise(resolve => {
//     setTimeout(resolve, 2000);
// });
  const id = params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const guide = await res.json();

  if(res.ok) {
    return {
        guide
    };
  }
  throw redirect(301, '/guides')
}