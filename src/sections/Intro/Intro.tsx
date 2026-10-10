import { translations } from '../../data/translations'
import Arrow from '../../components/Arrow/Arrow'
import './Intro.css'

type IntroProps = {
  language: string
}

const Intro = ({ language }: IntroProps) => {
  const text = translations[language]

  return (
    <section className="intro">
      <div className="h-screen">
        <h1>{text.welcome}</h1>

        <div>
          <p className="uppercase">{text.scroll}</p>
          <Arrow />
        </div>
      </div>

      <div className="h-screen">Second intro page</div>
    </section>
  )
}

export default Intro
