import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiSearch } from 'react-icons/bi';



function FormExample() {
  return (
    <Navbar className="bg-body-tertiary p-3">
      <Form inline className="mx-auto">
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Control type="text" placeholder="Buscar Zapatillas"/>
          </Col>
          <Col xs="auto">
            <Button type="submit"><BiSearch /></Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default FormExample;
