import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from '@test/components'

export default function Home() {
  return (
    <div className={styles.container}>
     <Button 
       onClick={() => console.log("button clicked!")}
     >
       Click me
     </Button>
    </div>
  )
}
