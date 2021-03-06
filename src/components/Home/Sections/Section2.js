import Grid from '@mui/material/Grid'
import SwiperSneakers from '../Swipers/SwiperSneakers'
import NextLink from 'next/link'
import TypographyFade from '../../AnimatedComponents/TypographyFade'
import ButtonFade from '../../AnimatedComponents/ButtonFade'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import typographyTheme from '../../../helpers/typographyTheme'

let theme = createTheme({
    ...typographyTheme
})

theme = responsiveFontSizes(theme)

export default function Section2({ featuredSneakers }) {
    return (
        <section>
            <Grid container mt={6} sx={{ marginTop: { xs: '48px', lg: '78px' } }}>
                <Grid container direction='column'>
                    <ThemeProvider theme={theme}>
                        <TypographyFade
                            componentName='h1'
                            variant='h1'
                            align='center'
                            gutterBottom
                        >
                            EzeSneakers
                        </TypographyFade>
                        <TypographyFade
                            componentName='h2'
                            variant='h2'
                            align='center'
                        >
                            Save our planet by buying restored shoes
                        </TypographyFade>
                    </ThemeProvider>
                    <Grid my={8} container justifyContent='center' alignItems='center'>
                        <NextLink href='/sneakers' passHref >
                            <ButtonFade size='large' variant='contained' buttonText='show sneakers' />
                        </NextLink>
                    </Grid>
                    <SwiperSneakers sneakers={featuredSneakers} title='Featured' />
                </Grid>
            </Grid>
        </section>
    )
}