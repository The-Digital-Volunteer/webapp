import React, { useState } from 'react'
import { InfoWindow } from '@react-google-maps/api'
import Badge from 'react-bootstrap/Badge'
import { Button, Form } from 'react-bootstrap'
import DeliveryTimeSlot from './deliveryTimeSlot'

const MarkerInfoWindow = ({ marker, onCloseClick }) => {
  const { lat, lng, title, description, owner, type } = marker
  const [step, setStep] = useState(0)
  return (
    <InfoWindow
      position={{ lat, lng }}
      onCloseClick={onCloseClick}
    >
      <div className='marker-info-window-container'>
        <div className='h4'>
          <span className='mr-3'>
            <img
              src={require(`../../../assets/img/tasks/${type}.svg`)}
              alt='React Logo'
              width='35px'
            />
          </span>
          {title}
        </div>
        <p className='text-right'>
          <Badge
            className={`marker-type-${type} text-white fs-15`}
          >
            {owner}
          </Badge>
        </p>
        <div className='content-container mb-2'>
          {step === 0 ? (
            description
          ) : (
            <>
              <DeliveryTimeSlot timeSlots={marker.timeSlots} />
              <p
                style={{
                  fontWeight: '600',
                  fontSize: '16px',
                  lineHeight: '24px',
                  marginTop: '15px',
                }}
              >
                Would you like to add anything?
              </p>
              <Form.Control
                className='response-textarea'
                as='textarea'
                rows='3'
                placeholder={`Type your response to ${marker.owner}`}
              />
            </>
          )}
        </div>
        <Button
          className='helper-btn w-100'
          onClick={() => setStep(1)}
        >
          {step === 0 ? 'I can do this' : "I'm ready to help!"}
        </Button>
      </div>
    </InfoWindow>
  )
}

export default MarkerInfoWindow
