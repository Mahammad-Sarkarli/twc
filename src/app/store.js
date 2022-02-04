/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import { configureStore } from '@reduxjs/toolkit'
import navigationReducer from './../features/navigation/navigationSlice'
import footerReducer from './../features/footer/footerSlice'

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    footer: footerReducer,
  },
})
