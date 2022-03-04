import { unitConversion } from '../../helpers/helpers'
import KeyCard from '../KeyCard/KeyCard'
import caloriesIcon from '../../assets/images/calories-icon.svg'
import carbsIcon from '../../assets/images/carbs-icon.svg'
import fatIcon from '../../assets/images/fat-icon.svg'
import proteinIcon from '../../assets/images/protein-icon.svg'
import './KeyData.css'

const KeyData = ({ keyData }) => {
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = keyData

  return (
    <div className="key-data__charts">
      <KeyCard
        icon={caloriesIcon}
        text={`${unitConversion(calorieCount)}Cal`}
        legend="Calories"
      />
      <KeyCard
        icon={proteinIcon}
        text={`${unitConversion(proteinCount)}g`}
        legend="Proteines"
      />
      <KeyCard
        icon={carbsIcon}
        text={`${unitConversion(carbohydrateCount)}g`}
        legend="Glucides"
      />
      <KeyCard
        icon={fatIcon}
        text={`${unitConversion(lipidCount)}g`}
        legend="Lipides"
      />
    </div>
  )
}

export default KeyData
