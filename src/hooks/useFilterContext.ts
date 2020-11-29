import React from "react"
import { FilterContextType } from "./types"

export const FilterContext = React.createContext<FilterContextType<any>>([
   {},
   {
      set: () => { },
      delete: () => { },
   },
] as any)

export const FilterProvider = FilterContext.Provider
export const FilterConsumer = FilterContext.Consumer

export function useFilterContext<Values>() {
   const filter = React.useContext<FilterContextType<Values>>(FilterContext)

   if (!filter) {
      throw new Error(
         'Filter cannot be undefined, please verify you are calling useFilterContext() as child of a Filter',
      )
   }

   return filter
}