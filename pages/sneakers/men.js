import { connectToDatabase } from '../../lib/mongodb'
import SneakerPage from '../../src/components/SneakersPage/SneakersPage'
import Head from 'next/head'

export default function Men({ sneakers }) {
    return (
        <>
            <Head>
                <title>Men | EzeSneakers</title>
                <meta name='description' content='Professionally restored sneakers for men. Save our planet by buying restored shoes.' />
            </Head>
            <SneakerPage sneakers={sneakers} title='For Men' apiName='man' />
        </>
    )
}

export async function getStaticProps() {
    const { db } = await connectToDatabase()

    const sneakersData = await db.collection('products').aggregate([
        { $match: { gender: 'man' } },
        { $limit: 18 }
    ]).toArray()


    const sneakers = JSON.parse(JSON.stringify(sneakersData))
    return {
        props: {
            sneakers
        }
    }
}


