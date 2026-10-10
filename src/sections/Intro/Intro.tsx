import { translations } from '../../data/translations'
import './Intro.css'
import { useState, useEffect } from 'react'

type IntroProps = {
  language: string
}

const Intro = ({ language }: IntroProps) => {
  const [showWelcome, setShowWelcome] = useState(true)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    function handleScroll() {
      if (window.scrollY > 0) {
        setShowScrollIndicator(false)
      }
    }

    // Remove scroll listener even if the user leaves this page before scrolling.
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const text = translations[language]

  return (
    <section className="intro">
      <div className="h-screen">
        {showWelcome ? (
          <h1
            className="fade-in-out"
            onAnimationEnd={() => setShowWelcome(false)}
          >
            {text.welcome}
          </h1>
        ) : (
          // If true, show
          showScrollIndicator && (
            <div className="fade-in flex flex-col justify-between h-[90px]">
              <p className="uppercase text-[15px] font-medium">{text.scroll}</p>

              <div className="scroll-indicator">
                <div className="scroll-indicator-dot"></div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="h-screen">
        <h1>Second Intro page</h1>
      </div>
    </section>
  )
}

export default Intro
