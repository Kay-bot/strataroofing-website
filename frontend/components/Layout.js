import { Container } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
