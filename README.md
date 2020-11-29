
# useQueryFilter

## Motivation

Recently I worked with some react applications our team had needed to persist the filter's state in URL, and we wanted a react hook to turn this work more easily, but we can't find anyone to do this.

When the filter's state is persisted in URL the end-user receives a better experience. It's possible to use browser buttons to navigate in applications, also it's possible to refresh the browser tab and the result is the same because the filter's state is persisted in URL, another good point is that, whit this approach it's possible to persist pagination even because the pagination's state and filter's state should be the same.

## How this works

`useQueryFilter` use react hook to persist the filter state in a component state and the same state is pushed into the URL. Then every change in state is pushed into the URL and if the URL has some value or state when the component is mounting this Url state is propagated  into the component state.

## Let's see some examples of use:


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