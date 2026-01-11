import './App.css'
import Button from './components/ui/button/Button'
import Input from './components/ui/input/Input'
import Card from './components/ui/card/Card'

function App() {

  return (
    <>
    <div> 
    <Button title='This is a button'></Button>
    </div>
    <div className='px-16 py-12'>
    <Input text='Please write here!'></Input>
    </div>
    <div className='px-16 py-12'>
    <Card> 
      <h2>Card Title</h2>
      <p>This is card content</p>
      <Button title='This is another button'></Button>
    </Card>
    </div>
    </>
  )
}

export default App
