import React from 'react'
import Gallery from './galler'

describe('<Gallery />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Gallery />)
  })
})