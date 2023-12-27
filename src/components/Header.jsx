import React from 'react'

function Header() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <p className="w-28 text-3xl antialiased font-bold text-white"><span className='orange_gradient'>Sum</span>mar<span className='green_gradient'>ize</span></p>

            <button
             type="button"
             onClick={() => window.open(`https://github.com/Sidd1826`)}
             className="black_btn"
            >
                Github
            </button>
        </nav>
        <h1 className="head_text">
        Crafting Creative Summaries for Articles <br className="max-md:hidden" />
            <span className="orange_gradient">OpenAI GPT-4</span>

        </h1>
        <h2 className="desc">
            Summarize any article with <span className="orange_gradient">Summarize</span>, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.
        </h2>
    </header>
  )
}
// exporting header

export default Header