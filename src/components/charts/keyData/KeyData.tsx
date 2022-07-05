import PropTypes from "prop-types"
import KeyCard from "./keyCard/KeyCard"
import caloriesIcon from "../../../assets/images/calories-icon.svg"
import carbsIcon from "../../../assets/images/carbs-icon.svg"
import fatIcon from "../../../assets/images/fat-icon.svg"
import proteinIcon from "../../../assets/images/protein-icon.svg"
import "./KeyData.css"

export type keyDataProps = {
  data: {
    calorieCount: string
    proteinCount: string
    carbohydrateCount: string
    lipidCount: string
  }
}

/**
 * It takes data and returns a div with four cards inside
 */
function KeyData({ data }: keyDataProps) {
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = data

  return (
    <div className="key-data-charts__container">
      <KeyCard icon={caloriesIcon} text={calorieCount} legend="Calories" />
      <KeyCard icon={proteinIcon} text={proteinCount} legend="Proteines" />
      <KeyCard icon={carbsIcon} text={carbohydrateCount} legend="Glucides" />
      <KeyCard icon={fatIcon} text={lipidCount} legend="Lipides" />
    </div>
  )
}

export default KeyData

KeyData.defaultProps = {
  data: {
    calorieCount: undefined,
    proteinCount: undefined,
    carbohydrateCount: undefined,
    lipidCount: undefined,
  },
}

KeyData.propTypes = {
  data: PropTypes.shape({
    calorieCount: PropTypes.string.isRequired,
    proteinCount: PropTypes.string.isRequired,
    carbohydrateCount: PropTypes.string.isRequired,
    lipidCount: PropTypes.string.isRequired,
  }),
}
