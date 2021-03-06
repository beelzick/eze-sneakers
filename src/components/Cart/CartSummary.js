import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { ImHome } from '@react-icons/all-files/im/ImHome'
import { BiPackage } from '@react-icons/all-files/bi/BiPackage'
import styles from './CartProduct.module.css'
import { HiOutlineArrowNarrowRight } from '@react-icons/all-files/hi/HiOutlineArrowNarrowRight'
import makeStyles from '@mui/styles/makeStyles';
import BuyButton from './BuyButton'

const useStyles = makeStyles((theme) => ({
    summaryContainer: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(2),
        }
    }
}))

const summaryFont = { fontWeight: 400, fontFamily: 'Roboto, sans-serif' }

export default function CartSummary({ subtotal }) {
    const classes = useStyles()

    return (
        <Grid container className={classes.summaryContainer}>
            <Grid item xs={12}>
                <Typography variant='h4' component='h2' gutterBottom>
                    Summary
                </Typography>
                <Grid container >
                    <Grid item xs={6}>
                        <Typography variant='h6' component='h3' gutterBottom sx={summaryFont}>
                            Subtotal
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h6' component='h3' gutterBottom align='right' sx={summaryFont}>
                            {subtotal.toFixed(2)} $
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant='h6' component='h3' gutterBottom sx={summaryFont}>
                            Shipping
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h6' component='h3' gutterBottom align='right' sx={summaryFont}>
                            {subtotal ? (subtotal < 100 ? '10.00 $' : 'Free') : '0.00 $'}
                        </Typography>
                    </Grid>
                </Grid>
                <Box className={styles.total} sx={summaryFont}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant='h6' component='h3' gutterBottom sx={summaryFont}>
                                Total
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='h6' component='h3' gutterBottom align='right' sx={summaryFont}>
                                {subtotal ? (subtotal < 100 ? (subtotal + 10) : subtotal).toFixed(2) : '0.00'} $
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Typography variant='caption' component='span' mt={0.5}>
                    Free delivery <strong>from 100 $</strong>
                </Typography>
                <BuyButton subtotal={subtotal} />
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        height: '20vh'
                    }}
                >
                    <BiPackage fontSize={60} />
                    <Box mx={5}>
                        <HiOutlineArrowNarrowRight fontSize={40} />
                    </Box>
                    <ImHome fontSize={52.5} />
                </Box>
            </Grid>
            <Grid
                item xs={12}
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
            </Grid>
        </Grid>
    )
}