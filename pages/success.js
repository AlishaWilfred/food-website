import React from 'react'
import Layout from '../components/Layout'
import OrderModal from '../components/OrderModal'

export default function Success() {
  return (
    <Layout>

        <OrderModal opened={true} payment={1}/>
    </Layout>
  )
}
