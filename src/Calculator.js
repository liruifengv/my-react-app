import React from 'react'
import PropTypes from 'prop-types'

function BoilingVerdict (props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

BoilingVerdict.propTypes = {
  celsius: PropTypes.any.isRequired
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.props.onTemperatureChange(e.target.value)
  }

  render () {
    const scale = this.props.scale
    const temperature = this.props.temperature
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    )
  }
}

TemperatureInput.propTypes = {
  onTemperatureChange: PropTypes.any.isRequired,
  scale: PropTypes.any.isRequired,
  temperature: PropTypes.any.isRequired
}

function toCelsius (fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit (celsius) {
  return (celsius * 9 / 5) + 32
}

function tryConvert (temperature, convert) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

export default class Calculator extends React.Component {
  constructor (props) {
    super(props)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.state = { temperature: '', scale: 'c' }
  }

  handleCelsiusChange (temperature) {
    this.setState({ scale: 'c', temperature })
  }

  handleFahrenheitChange (temperature) {
    this.setState({ scale: 'f', temperature })
  }

  render () {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    )
  }
}
