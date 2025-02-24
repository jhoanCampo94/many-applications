import './App.css'
import FormApps from './components/FormApps'
import MenuApplicationPage from './components/MenuApplicationPage'

function App() {

  return (
    <>
      <MenuApplicationPage>
        <div>
          <h1>Menú de aplicaciones</h1>
          <FormApps />
        </div>
      </MenuApplicationPage>
    </>
  )
}

export default App
