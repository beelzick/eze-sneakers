import { combineReducers } from 'redux'
import loadingReducer from './slices/loadingSlice'
import loginDialogReducer from './slices/loginDialogSlice'
import registerErrorReducer from './slices/registerErrorSlice'
import favoritesSlice from './slices/favoritesSlice'
import cartSlice from './slices/cartSlice'
import selectedSizeSlice from './slices/selectedSizeSlice'
import sizeErrorSlice from './slices/sizeErrorSlice'
import demoDialogSlice from './slices/demoDialogSlice'
import selectionMenusSlice from './slices/selectionMenusSlice'
import linkGeneratorSlice from './slices/linkGeneratorSlice'
import accordionSlice from './slices/accordionSlice'
import drawerSlice from './slices/drawerSlice'
import drawerClassSlice from './slices/drawerClassSlice'
import drawerCategoryClassSlice from './slices/drawerCategoryClassSlice'
import searchDialogSlice from './slices/searchDialogSlice'

const reducers = combineReducers({
    loading: loadingReducer,
    loginDialog: loginDialogReducer,
    registerError: registerErrorReducer,
    favorites: favoritesSlice,
    selectedSize: selectedSizeSlice,
    cart: cartSlice,
    sizeError: sizeErrorSlice,
    demoDialog: demoDialogSlice,
    selectionMenus: selectionMenusSlice,
    linkGenerator: linkGeneratorSlice,
    accordion: accordionSlice,
    drawer: drawerSlice,
    drawerClass: drawerClassSlice,
    drawerCategoryClass: drawerCategoryClassSlice,
    searchDialog: searchDialogSlice
})

export default reducers