import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ChangePasswordForm from '../src/components/Forms/ChangePasswordForm';
import { useSession, getSession } from "next-auth/react"
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoadingPage from '../src/components/Loadings/LoadingPage';
import Box from '@mui/material/Box'
import Head from 'next/head'

export default function ChangePassword() {
    const router = useRouter()
    const { data: session } = useSession()

    useEffect(() => {
        if (!session) {
            router.push('/')
        }
    }, [session, router])

    if (session) {
        return (
            <>
                <Head>
                    <title>Change Password | EzeSneakers</title>
                    <meta name='robots' content='noindex' />
                </Head>
                <Grid container justifyContent='center' alignItems='center' sx={{ minHeight: '70vh' }}>
                    <Grid item xs={10} sm={7} md={6} lg={4} xl={4}>
                        <Grid container direction='column' justifyContent='center' alignItems='center' className='h-100' >
                            <Typography variant='h6' component='p'>
                                EzeSneakers
                            </Typography>
                            <Box mb={3}>
                                <Typography variant='h4' component='h1' align='center'>
                                    Set New Password
                                </Typography>
                            </Box>
                            <ChangePasswordForm />
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    } else {
        return <LoadingPage />
    }

}

export async function getServerSideProps(context) {
    return {
        props: {
            session: await getSession(context)
        },
    }
}