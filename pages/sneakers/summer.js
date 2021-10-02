import { connectToDatabase } from '../../lib/mongodb'
import SneakerPage from '../../components/sneakers-page/SneakersPage'
import Head from 'next/head'

export default function Summer({ sneakers }) {
    return <>
        <Head>
            <title>Summer Collection | EzeSneakers</title>
            <meta description='Professionally restored sneakers ideal for summer. Save our planet by buying restored shoes.' />
        </Head>
        <SneakerPage sneakers={sneakers} title='Summer Collection' apiName='summer' />
    </>

}

export async function getStaticProps() {
    const { db } = await connectToDatabase()

    const sneakersData = await db.collection('products').aggregate([
        { $match: { tag: 'summer' } },
        { $limit: 20 }
    ]).toArray()

    const sneakers = JSON.parse(JSON.stringify(sneakersData))
    return {
        props: {
            sneakers
        }
    }
}
