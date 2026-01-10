import './App.css'
import MyButton from './components/ui/button/Button'
import Input from './components/ui/input/Input'

function App() {

  return (
    <>
    <div> 
    <MyButton title='This is a button'></MyButton>
    </div>
    <div className='px-16 py-12'>
    <Input text='Please write here!'></Input>
    </div>
    </>
  )
}

export default App
