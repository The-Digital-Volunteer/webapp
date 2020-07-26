import { inject, observer } from "mobx-react";
import React from "react";
import { withRouter } from 'react-router';

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// TODO: read from profile
import martha2 from "../../../assets/img/martha2.png";

class HeroRating2 extends React.Component {

  constructor( props ) {
    super( props )

    this.setComment = this.setComment.bind( this )
  }

  setRating( value )
  {
    const { rating } = this.props.ratings

    rating.value = value
  }

  setComment( event ) {
    const { rating } = this.props.ratings
    const { value } = event.target

    rating.comment = value
  }

  async save() {
    const { history, ratings, user } = this.props

    const result = await ratings.save( user.data.id, user.token )

    if( result.success ) {
      ratings.pendingLoaded = false // force reload

      history.push( '/ratings/pending' )
    }
  }

  render() {
    const { rating, ratingMessage } = this.props.ratings
    const { user, value } = rating

    return (
      <div id="rate_form" className="wrapper">
        <section>
          <div className="text-box">
            <h3> { user.firstName } { user.lastName }</h3>
            
          </div>

          {
            ratingMessage &&
            (
              <div className="alert alert-danger">
                { ratingMessage }
              </div>
            )
          }

          <div id="volunteer-info" className="mt-4">
            <div className="profile-list">
              <div className="profile_info">
          
              </div>
			  <div>
			  <img alt="volunteer pic" src={ martha2 }/>
			  <p>rate your looper </p>
			  </div>
              <div className="profile_info rating">
                <span className={
                    `rating_edit ${ value >= 10 ? 'rating_selected' : '' }`
                  }
                  onClick={ () => this.setRating(10) }
                />
                <span className={
                    `rating_edit ${ value >= 8 ? 'rating_selected' : '' }`
                  }
                  onClick={ () => this.setRating(8) }
                />
                <span className={
                    `rating_edit ${ value >= 6 ? 'rating_selected' : '' }`
                  }
                  onClick={ () => this.setRating(6) }
                />
                <span className={
                    `rating_edit ${ value >= 4 ? 'rating_selected' : '' }`
                  }
                  onClick={ () => this.setRating(4) }
                />
                <span className={
                    `rating_edit ${ value >= 2 ? 'rating_selected' : '' }`
                  }
                  onClick={ () => this.setRating(2) }
                />
              </div>
            </div>
          </div>
        </section>

              </div>
    )
  }
}

export default withRouter(
  inject('ratings', 'user')( observer(HeroRating2) )
)
