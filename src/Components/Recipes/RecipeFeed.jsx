import React, { Component } from 'react'
import { Recipe } from './Recipe';
import { Segment } from 'semantic-ui-react'

class RecipeFeed extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <div>
        {recipes.map(recipe => (
          <Segment raised>
            <Recipe 
              key={recipe.id}
              recipe={recipe}
            />
          </Segment>
        ))}
      </div>
    )
  }
}

export default RecipeFeed



// {events.map(event => (
//   <EventListItem
//     key={event.id}
//     event={event}
//     deleteEvent={deleteEvent}
//   />
// ))}