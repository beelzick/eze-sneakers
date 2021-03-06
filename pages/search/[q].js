import SneakersSearchPage from '../../src/components/SneakersPage/SneakersSearchPage'
import { connectToDatabase } from '../../lib/mongodb'
import Head from 'next/head'

export default function QueryPage({ sneakers, q }) {
    return (
        <>
            <Head>
                <title>Search results for {q}</title>
                <meta name='robots' content='noindex' />
            </Head>
            <SneakersSearchPage sneakers={sneakers} q={q} title={`Results for "${q}"`} />
        </>
    )
}

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const { db } = await connectToDatabase()
    const { q } = context.params

    const sneakersData = await db.collection('products').aggregate([
        {
            $search: {
                index: 'products',
                compound: {
                    should: [
                        { autocomplete: { query: q, path: 'name', fuzzy: { maxEdits: 2, } } },
                        { autocomplete: { query: q, path: 'price', fuzzy: { maxEdits: 2, } } },
                        { autocomplete: { query: q, path: 'rating', fuzzy: { maxEdits: 2, } } },
                        { autocomplete: { query: q, path: 'gender', fuzzy: { maxEdits: 2, } } },
                        { autocomplete: { query: q, path: 'tags', fuzzy: { maxEdits: 2, } } },
                    ]
                }
            },
        },
        { $limit: 18 }
    ]).toArray()

    const sneakers = JSON.parse(JSON.stringify(sneakersData))

    return {
        props: {
            sneakers,
            q
        }
    }
}