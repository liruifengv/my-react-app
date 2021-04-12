import React from 'react'

const numbers = [1, 2, 3, 4, 5]
export const listItems = numbers.map((number, index) =>
  <li key={ index }>{number}</li>
)
