import { PropTypes } from 'prop-types'
import { unitConversion } from '../../helpers/helpers'
import KeyCard from './KeyCard/KeyCard'
import caloriesIcon from '../../assets/images/calories-icon.svg'
import carbsIcon from '../../assets/images/carbs-icon.svg'
import fatIcon from '../../assets/images/fat-icon.svg'
import proteinIcon from '../../assets/images/protein-icon.svg'
import './KeyData.css'

/**
 * It takes in a keyData object and returns a div with four cards inside
 * @param {object} props
 * @param {object} props.keyData
 * @param {number} props.keyData.calorieCount
 * @param {number} props.keyData.proteinCount
 * @param {number} props.keyData.carbohydrateCount
 * @param {number} props.keyData.lipidCount
 * @returns {JSX.Element} A div with 4 KeyCard components.
 */
function KeyData({ keyData }) {
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = keyData
  return (
    <div className="key-data-charts">
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

KeyData.defaultProps = {
  keyData: {
    calorieCount: 0,
    proteinCount: 0,
    carbohydrateCount: 0,
    lipidCount: 0,
  },
}

KeyData.propTypes = {
  keyData: PropTypes.shape({
    calorieCount: PropTypes.number,
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
  }),
}
