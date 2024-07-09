import adaptive1 from '../images/russiantravel.jpg'
import adaptive2 from '../images/gitarist.jpg'

const EmailRegex = "^\\S+@\\S+\\.\\S+$"
const MaxScreen = 1171
const MediumScreen = 971
const SmallScreen = 650
const InitMoreMaxScreen = 16
const InitLessMaxScreen = 12
const InitMediumScreen = 8
const InitSmallScreen = 5
const StepMaxScreen = 4
const StepMediumScreen = 3
const StepSmallScreen = 2

const adaptive =[
  {
    name: 'Путешествия по России',
    link: 'https://g3n1ss.github.io/russian-travel/',
    img: adaptive1
  },
  {
    name: 'Портфолио Гитариста',
    link: 'https://g3n1ss.github.io/gitarist-portfolio/',
    img: adaptive2
  }
]

export {
  EmailRegex,
  MaxScreen,
  MediumScreen,
  SmallScreen,
  InitMoreMaxScreen,
  InitLessMaxScreen,
  InitMediumScreen,
  InitSmallScreen,
  StepMaxScreen,
  StepMediumScreen,
  StepSmallScreen,
  adaptive
}