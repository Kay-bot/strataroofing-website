import Layout from '../components/Layout';
import { Container } from 'reactstrap';
import Carousel from '../components/Carousel';
const Index = () => {
  return (
    <Layout>
      <Carousel />
      <Container>
        <div>
          <h1>Hello World</h1>
        </div>
      </Container>
    </Layout>
  );
};

export default Index;
