import NextLink from 'next/link'
import { Link, Breadcrumbs } from '@mui/material'
import { signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { dialogOpen, dialogClose } from '../../../../redux/slices/loginDialogSlice'
import { useDispatch } from 'react-redux';
import { loadingStart, loadingStop } from '../../../../redux/slices/loadingSlice'
import { useSnackbar } from 'notistack'

export default function NavBreadcrumbs() {
    const { enqueueSnackbar } = useSnackbar()
    const dispatch = useDispatch()
    const { data: session, status } = useSession()

    useEffect(() => {
        if (status === 'authenticated') {
            dispatch(dialogClose())
        }
    }, [status, dispatch])

    if (status === 'loading') {
        return null
    }

    const handleLogout = async () => {
        dispatch(loadingStart())
        await signOut()
        dispatch(loadingStop())
        enqueueSnackbar('Successfully logged out', {
            variant: 'success'
        })
    }

    return (
        <Breadcrumbs
            color='secondary'
            sx={{ fontSize: '12px' }}
        >
            <NextLink href='/about' passHref>
                <Link color='secondary' underline='hover'>
                    About
                </Link>
            </NextLink>
            <NextLink href='/' passHref>
                <Link color='secondary' underline='hover'>
                    Home
                </Link>
            </NextLink>
            {!session && (
                <Link
                    underline='hover'
                    color='secondary'
                    sx={{ cursor: 'pointer' }}
                    onClick={() => dispatch(dialogOpen())}
                >
                    Log In
                </Link>
            )}
            {!session && (
                <NextLink href='/register' passHref>
                    <Link color='secondary' underline='hover' sx={{ marginRight: '13px' }}>
                        Join Us
                    </Link>
                </NextLink>
            )}
            {session && (
                <Link
                    underline='hover'
                    onClick={handleLogout}
                    color='secondary'
                    sx={{ cursor: 'pointer' }}
                >
                    Log out
                </Link>
            )}
        </Breadcrumbs>
    )
}