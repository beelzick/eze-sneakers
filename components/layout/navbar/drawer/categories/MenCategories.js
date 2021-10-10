import CategoryPanel from '../CategoryPanel'
import { useSelector } from 'react-redux'
import { selectMenCategoryClass, setMenCategoryClass } from '../../../../../redux/slices/drawerCategoryClassSlice'
import { setMenClass } from '../../../../../redux/slices/drawerClassSlice'

export default function MenCategories() {
    const menCategoryClass = useSelector(selectMenCategoryClass)
    const brandFilters = ['adidas', 'nike', 'reebok']
    const collectionFilters = ['featured', 'new', 'most-rated']
    const seasonFilters = ['spring', 'summer', 'autumn', 'winter']
    const forFilters = ['training', 'outdoor', 'street']

    return <>
        <CategoryPanel
            categoryClass={menCategoryClass}
            backTo='Men'
            setCategoryClass={setMenCategoryClass}
            categoryName='brand'
            setPanelClass={setMenClass}
            linkFilters={brandFilters}
            linkGroup='men'
        />
        <CategoryPanel
            categoryClass={menCategoryClass}
            backTo='Men'
            setCategoryClass={setMenCategoryClass}
            categoryName='collection'
            setPanelClass={setMenClass}
            linkFilters={collectionFilters}
            linkGroup='men'
        />
        <CategoryPanel
            categoryClass={menCategoryClass}
            backTo='Men'
            setCategoryClass={setMenCategoryClass}
            categoryName='season'
            setPanelClass={setMenClass}
            linkFilters={seasonFilters}
            linkGroup='men'
        />
        <CategoryPanel
            categoryClass={menCategoryClass}
            backTo='Men'
            setCategoryClass={setMenCategoryClass}
            categoryName='for'
            setPanelClass={setMenClass}
            linkFilters={forFilters}
            linkGroup='men'
        />
    </>
}