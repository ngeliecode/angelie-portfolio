import { translations } from '../../data/translations'
import './Intro.css'
import { useState } from 'react'

type IntroProps = {
  language: string
}

const Intro = ({ language }: IntroProps) => {
  const [showWelcome, setShowWelcome] = useState(true)

  const text = translations[language]

  return (
    <section className="intro">
      <div className="h-screen">
        {/* State is TRUE initially, so... */}
        {showWelcome ? (
          // ... show this ⬇
          <h1
            className="fade-in-out"
            // ... and set FALSE when animation done ✅
            onAnimationEnd={() => setShowWelcome(false)}
          >
            {text.welcome}
          </h1>
        ) : (
          // State is now FALSE, so show this ⬇
          <div className="scroll-indicator fade-in">Test</div>
        )}
      </div>

      <div className="h-screen">
        <h1>Second Intro page</h1>
      </div>
    </section>
  )
}

export default Intro
