
import { CircleChevronUp } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

const BackToTop = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 600 ? setShow(true) : setShow(false)
        })
    })
    const scrollToTop = () => {
        scroll.scrollToTop()

    }
    return show && <button onClick={() => scrollToTop()}
        className='bg-indigo-600  w-12 h-12 hover:bg-indigo-600  text-white rounded-full  fixed right-24 bottom-24 flex cursor-pointer justify-center items-center transition-all'>
        <CircleChevronUp className='w-6 h-6' />
    </button>
}

export default BackToTop