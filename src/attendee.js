import React from 'react';
import {Badge} from './badge.js'
import uuid from 'uuid'

export class Attendee extends React.Component {
  listBadges(arr){
    return (<Badge key={uuid.v4()} name={arr.name} color={arr.color} />)
  }
  render() {
    return (
<div className='row'>
  {this.props.attendees.map(this.listBadges)}
</div>
    )}
}
