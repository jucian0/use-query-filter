export type FilterContextType<TInputs> = [
   TInputs,
   {
      set: (values: Partial<TInputs> | ((values: TInputs) => TInputs)) => Promise<TInputs>
      reset: (fn: (e: TInputs) => void) => Promise<TInputs>,
      query:string
   },
]