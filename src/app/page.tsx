import Builder from './components/builder';
import styles from './page.module.css'

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home`, { method: 'POST' });

  if (!res.ok) {
    return { body: { page: null } }
  }

  return res.json()
}

export default async function Home() {
  const { body: { page } } = await getData() as any;

  return (
    <main className={styles.main}>
      {page ? Object.keys(page).map(key => <Builder key={key} component={key} page={page} />) : null}
    </main>
  )
}
