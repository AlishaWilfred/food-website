import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import logo from "../assets/foodie-logo.webp"
import Services from '../components/Services'
import { client } from '../lib/client'
import Menu from '../components/Menu'
export default function Home({pizzas}) {

  return (
  <Layout>
    <div className={styles.container}>
      <Head>
        <title>Food Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={logo} />
      </Head>

      <main>
    <Banner/>
    <Services/>
    <Menu pizzas={pizzas}/>
      </main>

  
    </div>
    </Layout>
  )
}


export const getServerSideProps=async()=>{
  const query='*[_type=="pizza"]'
  const pizzas=await client.fetch(query)
  return{
    props:{
      pizzas
    }
  }
}