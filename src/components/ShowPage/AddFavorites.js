import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { IoMdHeartEmpty } from '@react-icons/all-files/io/IoMdHeartEmpty'
import { selectFavoritesIds } from '../../redux/slices/favoritesSlice';
import { useSession } from 'next-auth/react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { fetchFavorites } from '../../redux/slices/favoritesSlice';
import { useSnackbar } from 'notistack'
import ButtonRemoveFav from './ButtonRemoveFav'

export default function AddFavorites({ id }) {
    const { enqueueSnackbar } = useSnackbar()
    const { data: session } = useSession()
    const favoritesIds = useSelector(selectFavoritesIds)
    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch()

    const reqData = {
        productId: id
    }

    useEffect(() => {
        favoritesIds.map(favId => {
            if (favId === id) {
                setChecked(true)
            }
        })
    }, [favoritesIds, id])


    const handleAddClick = async () => {
        setChecked(true)
        const response = await axios.post('/api/user/favorites', reqData)
        if (response.data.sucess) {
            dispatch(fetchFavorites())
            enqueueSnackbar('Added to favorites', {
                variant: 'success'
            })
        }
    }

    const handleRemoveClick = async () => {
        setChecked(false)
        const response = await axios.delete('/api/user/favorites', { data: reqData })
        if (response.data.sucess) {
            dispatch(fetchFavorites())
            enqueueSnackbar('Removed from favorites', {
                variant: 'success'
            })
        }
    }

    return (
        <>
            {session && (
                <Box mb={2}>
                    {checked ? (
                        <ButtonRemoveFav onClick={handleRemoveClick} />
                    ) : (
                        <Button
                            type='button'
                            variant='outlined'
                            size='large'
                            color='primary'
                            endIcon={<IoMdHeartEmpty />}
                            onClick={handleAddClick}
                            className='w-100'

                        >
                            Add to favorites
                        </Button>
                    )}
                </Box>
            )}
        </>
    )
}