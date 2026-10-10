import { translations } from '../../data/translations'
import './Intro.css'

type IntroProps = {
  language: string
}

const Intro = ({ language }: IntroProps) => {
  const text = translations[language]

  return (
    <section className="intro h-screen">
      <div className="intro-text">
        <h1 className="fade-in-out">{text.welcome}</h1>
        <h2 className="fade-in">Next text</h2>
      </div>
    </section>
  )
}

export default Intro
