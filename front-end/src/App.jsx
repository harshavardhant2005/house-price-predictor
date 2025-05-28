import React from 'react'
import "./style.css"

const App = () => {
  return <section className='bg-[#FAF3E0] h-[100vh] w-full '>
        {/* heading section  */}
        <header className='flex h-[10%] w-full justify-center items-center '>
            <h1 className='text-4xl font-bold text-[#2E7D32] font-poppins'>
                House price Predictor
            </h1>
        </header>

        {/* input fields */}
        <article className='flex h-[calc(100%-10%)] bg-red-400 '>
            <form action="">
                <label htmlFor="Number of bedroom">Number of bedroom</label>
                <input type="text" className='border-solid border-2 rounded-md' required/>
            </form>
        </article>
  </section>
}

export default App
