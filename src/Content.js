import React  from 'react'
import { Form, FormGroup, Input, Button, Label, Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Content extends React.Component {
  state = {
    number: 0,
    incrementNumber: 0
  }; 

  clickAdd = () => {
    this.setState({
      number: this.state.number + this.state.incrementNumber
    })
  }

  clickMinus = () => {
    this.setState({
      number: this.state.number - this.state.incrementNumber
    })
  }

  clickReset = () => {
    this.setState({
      number: 0
    })
  }

  setIncrement = () => {

  }

  inputChange = (event) => {
    event.preventDefault();
    if(isNaN(event.target.value)) {
      this.setState({
        incrementNumber: 0
      })    
    } else {
      this.setState({
        incrementNumber: parseInt(event.target.value)
      })
    }
  }

  selectAll = (event) => {
    event.preventDefault()
    event.target.focus()
    event.target.select()
  }

  render() { 
    return (
      <div className="Content">
        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Form>  
                <FormGroup row>
                  <Label xs={6}>Increment Number :</Label>
                  <Col xs={6}>
                    <Input id="increment" type="text" name="increment" placeholder="Increment Number" value={ this.state.incrementNumber } onChange={ this.inputChange } onClick={ this.selectAll }></Input>
                  </Col>
                </FormGroup>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Row>
                <Col sm="12">
                  <div className="counter__box">
                    <div className="counter__increment">
                      <h1 className="text-center">{ this.state.number }</h1>
                    </div>
                    <div className="counter__buttons">
                      <Row noGutters={true}>
                        <Col xs="4" sm="4">
                          <Button color="success" size="lg" block onClick={ this.clickAdd }>
                            <FontAwesomeIcon icon="plus" />
                          </Button>
                        </Col>
                        <Col xs="4" sm="4">
                          <Button color="secondary" size="lg" block onClick={ this.clickReset }>
                            <FontAwesomeIcon icon="sync" />
                          </Button>
                        </Col>
                        <Col xs="4" sm="4">
                          <Button color="danger" size="lg" block onClick={ this.clickMinus }>
                            <FontAwesomeIcon icon="minus" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
 
export default Content;