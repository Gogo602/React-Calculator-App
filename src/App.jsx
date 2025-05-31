import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  
//handle onchange when a button is clicked
  const handleChange = (event) => {
    setValue(event.input.value)
    setValue(event.input.answer)
  }

  //AC clear the input area
  const handleClear = () => {
    setValue('')
  }

  //Delete a number at a time from the input area
  const handleDelete = () => {
    setValue((value.toString().slice(0, -1)))
  }

  //get a value from the keyboard and display it in the input
  const clicked = (event) => {
    const newValue = event.target.value
    setValue(value + newValue)
  }
 
  //performs the actual calculation
  const calculate = () => {
    try {
      let result = eval(value);
      setValue(result.toString())
    } catch (error) {
      setValue('Syntax Error', error)
    }
  }
  
  return (
    <>
      <div className='flex items-center justify-center min-h-screen'>
        <div className='border border-gray-400 p-5 rounded-md'>
            <div className='border border-gray-200 p-5 rounded-md'>
                <div>
                    <div>
                      <input type="text" className='w-full outline-none border border-gray-200 px-4 py-1 text-end font-bold text-lg gap-1' value={value} onChange={handleChange} readOnly/>
                    </div>
                    <div className='grid grid-cols-4 gap-3 mt-5 font-bold'>
                      <button onClick={handleClear} className='bg-blue-500 px-3 py-1 rounded-md'>C</button>
                      <button value='/' onClick={clicked} className='bg-blue-500 px-3 py-1 rounded-md'>/</button>
                      <button value='*' onClick={clicked} className='bg-blue-500 px-3 py-1 rounded-md'>*</button>
                      <button onClick={handleDelete} className='bg-blue-500 px-3 py-1 rounded-md'>Del</button>
                      <button value='7' onClick={clicked} className='bg-blue-500 px-3 py-1 rounded-md'>7</button>
                      <button value='8' onClick={clicked} className='bg-blue-500 px-3 py-1 rounded-md'>8</button>
                      <button value='9' onClick={clicked} className='bg-blue-500 px-3 py-1 rounded-md'>9</button>
                      <button value='-' onClick={clicked} className='bg-blue-500 px-3 py-1 rounded-md'>-</button>
                      <button value='4' onClick={clicked} className='bg-blue-500 px-3 py-1 rounded-md'>4</button>
                      <button value='5' onClick={clicked} className='bg-blue-500 px-3 py-1 rounded-md'>5</button>
                      <button value='6' onClick={clicked} className='bg-blue-500 px-3 py-1 rounded-md'>6</button>
                      <button value='+' onClick={clicked} className='bg-blue-500 px-3 py-1 rounded-md'>+</button>
                      <button value='1' onClick={clicked} className='bg-blue-500 px-3 py-1 rounded-md'>1</button>
                      <button value='2' onClick={clicked} className='bg-blue-500 px-3 py-1 rounded-md'>2</button>
                      <button value='3' onClick={clicked} className='bg-blue-500 px-3 py-1 rounded-md'>3</button>
                      <button onClick={calculate} className='bg-blue-500 px-3 py-1 rounded-md row-span-2'>=</button>
                      <button value='%' onClick={clicked} className='bg-blue-500 px-3 py-1 rounded-md'>%</button>
                      <button value='0' onClick={clicked} className='bg-blue-500 px-3 py-1 rounded-md'>0</button>
                      <button value='.' onClick={clicked} className='bg-blue-500 px-3 py-1 rounded-md'>.</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
