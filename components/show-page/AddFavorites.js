import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { IoMdHeartDislike } from '@react-icons/all-files/io/IoMdHeartDislike'
import { IoMdHeartEmpty } from '@react-icons/all-files/io/IoMdHeartEmpty'
import { IoMdHeart } from '@react-icons/all-files/io/IoMdHeart'
import { selectFavoritesIds } from '../../redux/slices/favoritesSlice';
import { useSession } from 'next-auth/react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { fetchFavorites } from '../../redux/slices/favoritesSlice';

export default function AddFavorites({ id }) {
    const { data: session } = useSession()
    const favoritesIds = useSelector(selectFavoritesIds)
    const [checked, setChecked] = useState(false)
    const [heartDislike, setHeartDislike] = useState(false)
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
    }, [favoritesIds])


    const handleAddClick = async () => {
        setChecked(true)
        const response = await axios.post('/api/user/favorites', reqData)
        response.data.sucess && (dispatch(fetchFavorites()))
    }
    const handleRemoveClick = async () => {
        setChecked(false)
        const response = await axios.delete('/api/user/favorites', { data: reqData })
        response.data.sucess && (dispatch(fetchFavorites()))
    }

    const handleMouseEnter = () => {
        setHeartDislike(true)
    }

    const handleMouseLeave = () => {
        setHeartDislike(false)
    }
    return <>
        {session && <Box mb={2}>
            {checked ? (
                <Button
                    type='button'
                    variant='outlined'
                    size='large'
                    color='primary'
                    endIcon={
                        heartDislike ? <IoMdHeartDislike /> : <IoMdHeart style={{ color: 'ef476f' }} />
                    }
                    className='w100'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleRemoveClick}
                >
                    Remove from favorites
                </Button>
            ) : (
                <Button
                    type='button'
                    variant='outlined'
                    size='large'
                    color='primary'
                    endIcon={<IoMdHeartEmpty />}
                    onClick={handleAddClick}
                    className='w100'

                >
                    Add to favorites
                </Button>
            )}
        </Box>}
    </>
}