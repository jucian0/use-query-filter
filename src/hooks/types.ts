export type FilterContextType<TInputs> = [
   TInputs,
   {
      set: (values: Partial<TInputs> | ((values: TInputs) => TInputs)) => void
      reset: (fn: (e: TInputs) => void) => void
   },
]