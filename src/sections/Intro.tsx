import { translations } from '../data/translations'

type IntroProps = {
  language: string
}

const Intro = ({ language }: IntroProps) => {
  const text = translations[language]

  return (
    <section className="h-screen">
      <h1>{text.welcome}</h1>
    </section>
  )
}

export default Intro
