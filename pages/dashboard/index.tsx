import React from 'react'
import Layout from '../../components/Layout'
import Charts from '../../screens/Chart'

const dashboard = () => {
  return (
    <Layout isDetailPage={false} >
        <div style={{marginTop:"20px"}}>
      <h1>Dashboard Page</h1>
      <Charts />
        </div>
    </Layout >
  )
}

export default dashboard
