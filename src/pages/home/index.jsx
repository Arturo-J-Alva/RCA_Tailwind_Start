import React from 'react'
import Layout from '../../globalComponents/layout'
import { Helmet } from 'react-helmet'

const Home = () => {
    return (
        <Layout>
            <Helmet>
                <title>Inicio | RCA</title>
                <meta name="description" content="Inicio" />
            </Helmet>
            Holi!
        </Layout>
    )
}

export default Home
