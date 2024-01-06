import React from 'react'
import Layout from '../../components/Layout'
import Dashboard from '../../screens/Charts/FirstChart'

const dashboard = () => {
  return (
    <Layout isDetailPage={false} >
        <div style={{marginTop:"20px"}}>
      <Dashboard />
        </div>
    </Layout >
  )
}

export default dashboard
