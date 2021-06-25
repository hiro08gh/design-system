import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dummy from '@test/components'

dummy(); 

export default function Home() {
  return (
    <div className={styles.container}>
      Test
    </div>
  )
}
