import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import styles from './Main.module.scss';

const Footer = (props) => {
  return (
    <div className={classnames('py-3 my-3', styles.footer)}>
      <div className="row mx-3">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <h4>About Us</h4>
          <hr></hr>
          <p>
            Strata Roofing specialises in roofing, siding and gutter replacement
            services. Strata Roofing team has all the neccessary training and
            equipment to ensure that every job is done safely, on time and
            adheress to OHS standards. Worry free you can count on Strata
            Roofing for hight quality services that come complete with our
            promise of reasonable rates.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <h4>Our Location</h4>
          <hr></hr>
          <p>
            <i class="fas fa-map-marker-alt"></i> 4.02, 44 Hampden road,
            Artarmon 2064, NSW , Sydney.
          </p>
          <p>
            <i class="fas fa-envelope-square"></i> service@strataroofing.com.au
          </p>
          <p>
            <i class="far fa-clock"></i> Mon - Fri: 9:00AM - 5:00PM
          </p>
        </div>
      </div>

      <p className="text-center pt-5">
        Copyright &copy; 2020 StrataRoofing.com. All Rights Reseved
      </p>
    </div>
  );
};

export default Footer;
