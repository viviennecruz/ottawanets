import React, { useState } from 'react';
// REACT BOOTSTRAP COMPONENTS
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { withTranslation, Trans } from "react-i18next";

// BOOTSTRAP LIBRARY
import 'bootstrap/dist/css/bootstrap.min.css';

import style from "./training.css";

import img13 from '../../assests/bballpic13.jpg';
import img14 from '../../assests/bballpic14.jpg';
import img15 from '../../assests/bballpic15.jpg';
import exercise from '../../assests/exercise.png';

const Training = ({ t }) => {

  const [ form, setForm ] = useState({})
  const [ errors, setErrors ] = useState({})

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
    // Check and see if errors exist, and remove them from the error object:
    if ( !!errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // get our new errors
    const newErrors = findFormErrors()
    // Conditional logic:
    if ( Object.keys(newErrors).length > 0 ) {
      // We got errors!
      setErrors(newErrors)
    } else {
      // No errors! Put any logic here for the form submission!
      alert("{ t('feedback1') }")
    }
  }

  const findFormErrors = () => {
    const { name, food, rating, comment } = form
    const newErrors = {}
    // name errors"
    if ( !name || name === '' ) newErrors.name = "{t('feedback2')}"
    else if ( name.length > 30 ) newErrors.name = "{t('feedback3')}"
    // food errors
    if ( !food || food === '' ) newErrors.food = "{t('feedback4')}"
    // rating errors
    if ( !rating || rating > 5 || rating < 1 ) newErrors.rating = 'must assign a rating between 1 and 5!'
    // comment errors
    if ( !comment || comment === '' ) newErrors.comment = "{t('feedback5')};"
    else if ( comment.length > 150 ) newErrors.comment = "{t('feedback6')};"

    return newErrors
  }
//   const { t } = this.props;
  return (
    <div>
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ img13 }
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ img14 }
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ img15 }
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        <Row id="main">
            <Col>
                <h2>
                    <Trans i18nKey="training.title1">
                    {t('title1')}
                    </Trans>
                    
                </h2>
                <Row>
                    <Col>
                        <h3 id="train">{t('desc')}</h3>
                    </Col>
                    <Col>
                        <img src={ exercise } alt="" id="girl"/>
                    </Col>
                </Row>
                
            </Col>
        </Row>

        <Row id="main">
            <Col>
                <h2>{t('title2')}</h2>
            </Col>
        </Row>
      <Form>
          <Row id="main">
              <Col>
              <Form.Group>
                <Form.Label>{t('fname')}</Form.Label>
                <Form.Control 
                    type='text' 
                    onChange={ e => setField('name', e.target.value) }
                    isInvalid={ !!errors.name }
                />
                <Form.Control.Feedback type='invalid'>{ errors.name }</Form.Control.Feedback>
            </Form.Group>
              </Col>
              <Col>
              <Form.Group>
                <Form.Label>{t('lname')}</Form.Label>
                <Form.Control 
                    type='text' 
                    onChange={ e => setField('name', e.target.value) }
                    isInvalid={ !!errors.name }
                />
                <Form.Control.Feedback type='invalid'>{ errors.name }</Form.Control.Feedback>
                </Form.Group>
              </Col>
          </Row>

            <Row id="main">
                <Col>
                    <Form.Group>
                        <Form.Label>{t('email')}</Form.Label>
                        <Form.Control 
                            type='email' 
                            onChange={ e => setField('name', e.target.value) }
                            isInvalid={ !!errors.name }
                        />
                        <Form.Control.Feedback type='invalid'>{ errors.name }</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>{t('phone')}</Form.Label>
                        <Form.Control 
                            type='phone' 
                            onChange={ e => setField('name', e.target.value) }
                            isInvalid={ !!errors.name }
                        />
                        <Form.Control.Feedback type='invalid'>{ errors.name }</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row id="main">
                <Col>
                    <Form.Group>
                        <Form.Label>{t('q1')}</Form.Label>
                        <Form.Control 
                            as='select' 
                            onChange={ e => setField('food', e.target.value) }
                            isInvalid={ !!errors.food }
                            >
                            <option value=''>{t('opt1')}</option>
                            <option value='chicken parm'>{t('opt2')}</option>
                            <option value='BLT'>{t('opt3')}</option>
                            <option value='steak'>{t('opt4')}</option>
                        </Form.Control>
                        <Form.Control.Feedback type='invalid'>{ errors.food }</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>   
                <Form.Group>
                        <Form.Label>{t('q2')}</Form.Label>
                        <Form.Control 
                            as='select' 
                            onChange={ e => setField('food', e.target.value) }
                            isInvalid={ !!errors.food }
                            >
                            <option value=''>{t('opt1')}</option>
                            <option value='chicken parm'>{t('option1')}</option>
                            <option value='BLT'>{t('option2')}</option>
                            <option value='steak'>{t('option3')}</option>
                        </Form.Control>
                        <Form.Control.Feedback type='invalid'>{ errors.food }</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row id="main">
                <Col>
                    <Form.Group>
                        <Form.Label>{t('q3')}</Form.Label>
                        <Form.Control 
                            as='textarea' 
                            onChange={ e => setField('comment', e.target.value) }
                            isInvalid={ !!errors.comment }
                            />
                            <Form.Control.Feedback type='invalid'>{ errors.comment }</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row id="main">
                <Col>
                    <Button variant="outline-dark" type='submit' onClick={ handleSubmit }>{t('training:submit')}</Button>
                </Col>
            </Row>
        
      </Form>
    </div>
  )
}

export default withTranslation(["training"])(Training);