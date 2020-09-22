import { Row, Col } from 'reactstrap';

const Footer = (props) => {
  return (
    <div>
      <Row className="text-center py-3 bg-light">
        <Col xs="6" sm="4">
          <h4>Footer 1</h4>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rhoncus neque sed urna volutpat, et rhoncus felis
              pretium.
            </p>
          </div>
        </Col>
        <Col xs="6" sm="4">
          <h4>Footer 2</h4>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rhoncus neque sed urna volutpat, et rhoncus felis
              pretium.
            </p>
          </div>
        </Col>
        <Col sm="4">
          <h4>Footer 3</h4>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rhoncus neque sed urna volutpat, et rhoncus felis
              pretium.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
