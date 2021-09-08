import { useEffect } from 'react';
import RegisterForm from '../components/forms/RegisterForm';
import styles from '../styles/login.module.css'
import { Grid, Box, Typography } from '@material-ui/core'
import { useSession, getSession } from "next-auth/react"
import AcessDenied from '../components/AcessDenied';
import { useRouter } from 'next/router';
import LoadingPage from '../components/LoadingPage';
export default function Register() {
    const router = useRouter()
    const { data: session } = useSession()
    useEffect(() => {
        if (session) {
            router.push('/')
        }
    }, [])
    if (!session) {
        return (
            <>
                <Grid container className={styles.pageContainer}>
                    <Grid item xs={4} />
                    <Grid item xs={4}>
                        <Box className='h100'>
                            <Grid container direction='column' justifyContent='center' alignItems='center' className='h100' >
                                <Typography variant='h6' component='p'>
                                    EzeSneakers
                                </Typography>
                                <Typography variant='h4' component='h1' gutterBottom align='center'>
                                    Become our member
                                </Typography>
                                <RegisterForm />
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={4} />
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