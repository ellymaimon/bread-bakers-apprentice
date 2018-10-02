import React, { Component } from 'react'
import { Recipe } from './Recipe';
import { Item } from 'semantic-ui-react'

class RecipeFeed extends Component {
  render() {
    return (
      <Item.Group>
        <Recipe />
      </Item.Group>
    )
  }
}

export default RecipeFeed
