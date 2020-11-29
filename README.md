
# useQueryFilter

## Motivation

Recently I worked with some react applications our team had needed to persist the filter's state into URL, and we wanted a react hook to turn this work more easily, but we can't find anyone to do this.

When the filter's state is persisted in the URL the end-user receives a better experience. It's possible to use browser buttons to navigate in applications, also it's possible to refresh the browser tab and the result is the same because the filter's state is persisted in the URL, another good point is that, whit this approach it's possible to persist pagination even because the pagination's state and filter's state should be the same.

## How it's works

`useQueryFilter` uses react hook to persist the filter state in a component state and the same state is pushed into the URL. Then every state change is pushed into the URL and if the URL has some value or state when the component is mounting this Url state is propagated into the component state.

## Let's see some examples of use:

### useQueryFilter


```jsx
   const initialValues = {
      keywords:'',
      sort:'az'
   }

   const [filter, set, reset] = useQueryState(initialValues)

   <input name="keywords" onChange={e=>set({keywords:e.target.value})}/>

   <select onChange={e=>set({sort:e.target.value})}>
      <option value="az">A - Z</option>
      <option value="za">Z - A</option>
   </select>
```

### useFilterContext

`useFilterContext` is helpful when is necessary to share the filter state with another component, in the same example is very common to have a filter component, a table component, and a pagination component, in this case, should have a container component and into this component, `useFilterContext` should be used like this example:


```jsx
   const initialValues = {
      keywords:'',
      sort:'az'
   }

   function Container(){

      const filter = useQueryState(initialValues)

      return (
         <FilterContext.Provider value={filter}>
            <Filter/>
            <List/>
            <Pagination/>
         </FilterContext.Provider>
      )
   }
```
```jsx

   function Filter(){

      const [filter,{set}] = useFilterContext()

      return(
         <>
            <input name="keywords" onChange={e=>set({keywords:e.target.value})}/>

            <select onChange={e=>set({sort:e.target.value})}>
               <option value="az">A - Z</option>
               <option value="za">Z - A</option>
            </select>
         </>
      )
   }
```
```jsx
   function List(){

      const [filter,{set}] = useFilterContext()

      return(<>...</>)
   }
```

```jsx
   function Pagination(){

      const [filter,{set}] = useFilterContext()

      return(<>...</>)
   }
```