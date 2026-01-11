import './App.css'
import Button from './components/ui/button/Button'
import Input from './components/ui/input/Input'
import Card from './components/ui/card/Card'
import Dialog from './components/ui/dialog/Dialog'
import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div> 
    <Button title='This is a button'></Button>
    </div>
    <div className='py-12'>
    <Input text='Please write here!'></Input>
    </div>
    <div className='py-12'>
    <Card> 
      <h2>Card Title</h2>
      <p>This is card content</p>
      <Button title='This is another button'></Button>
    </Card>
    </div>
    <div className='py 12'>
    <Button onClick={() => setIsOpen(true)} title="Open Dialog" />
    <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <h2>Dialog Title</h2>
      <p>Dialog content here</p>
    </Dialog>
    </div>
    </>
  )
}

export default App
