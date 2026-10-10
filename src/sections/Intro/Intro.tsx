import { translations } from '../../data/translations'
import './Intro.css'

type IntroProps = {
  language: string
}

const Intro = ({ language }: IntroProps) => {
  const text = translations[language]

  return (
    <section className="intro">
      <div className="h-screen">
        <h1 className="fade-in-out">{text.welcome}</h1>
      </div>

      <div className="h-screen">
        <h1>Second Intro page</h1>
      </div>
    </section>
  )
}

export default Intro
