'use client'
import Button from './components/Button.jsx'
import Counter from './components/Counter.jsx'
import Menu from './components/Menu.jsx'
export default function Home() {

  const fun = ()=>{
    alert('hello')
  }

  return (
  <main>
    <Counter/>

    <Button text={'Open'} functionAsProp={fun}/>

    <Button text={'Close'}/>

    <Menu text={'This are menu items'}>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </Menu>
    
  </main>
  

  )
}
