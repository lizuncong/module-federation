import React from 'react'
import Button from './Button.jsx'
const RemoteNewList = React.lazy(() => import('remote/NewsList'))

const App = () => {
  return (
      <div>
        <h1>远程组件NewsList</h1>
        <React.Suspense fallback="Loading NewList">
          <RemoteNewList />
        </React.Suspense>
        <div>本地组件：</div>
        <Button />
      </div>
  )
}


export default App
