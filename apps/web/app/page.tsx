import { trpc } from './trpc';

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: 'Terry' });
  return <div>{greeting}</div>;
}
