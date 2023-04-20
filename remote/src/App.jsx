import React from 'react'
import NewsList from './NewsList.jsx';
const Button = React.lazy(() => import('remote/Button'))

// https://blog.51cto.com/u_10887428/5148475

const App = () => {
  return (
      <div>
        <h1>本地组件NewsList</h1>
        <NewsList />
        <React.Suspense fallback="Loading Button">
          <Button />
        </React.Suspense>
      </div>
  )
}


export default App
