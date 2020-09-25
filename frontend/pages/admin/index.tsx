import Layout from '../../components/Layout';
import { Container } from 'reactstrap';
import Admin from '../../components/auth/Admin';
const AdminIndex = () => {
  return (
    <Layout>
      <Container>
        <Admin>
          <h2>Admin Dashboard</h2>
        </Admin>
      </Container>
    </Layout>
  );
};

export default AdminIndex;
