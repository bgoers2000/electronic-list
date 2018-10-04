import React from 'react';

export class ManageAttendees extends React.Component {
  render() {
    return (
<div className='row'>
  <div className='col-md-6' style={{margin:'auto'}}>
    <form id="manageAttendeesForm" onSubmit={this.props.handleOnSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input name="name" type="text" className="form-control" placeholder="Name" />
      </div>
      <div className="form-group">
        <label>Favorite Color</label>
        <input name="color" type="text" className="form-control" placeholder="Color" />
      </div>
      <button onClick={this.props.handleOnClick} name='add' type="submit" className="btn btn-primary">Add Attendee</button>
      <button onClick={this.props.handleOnClick} name='remove' type="submit" className="btn btn-danger" style={{float:'right'}}>Remove Attendee</button>
      </form>
  </div>
</div>
    )}
}
