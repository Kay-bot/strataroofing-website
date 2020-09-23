import Layout from '../components/Layout';
import { Container } from 'reactstrap';
import Carousel from '../components/Carousel';
import HowCanWeHelp from '../components/HowCanWeHelp';
const Index = () => {
  return (
    <Layout>
      <Carousel />
      <Container>
        <div>
          <HowCanWeHelp />
        </div>
      </Container>
    </Layout>
  );
};

export default Index;
