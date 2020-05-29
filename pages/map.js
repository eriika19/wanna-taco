import React, { useEffect } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import { useDispatch, useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { Layout, MelpMap } from 'components';
import { getCategories } from '../redux/selectors';
import 'leaflet/dist/leaflet.css';

const MapPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const { all } = categories;

  /*
   * Use 'useEffect' to
   */
  useEffect(() => {}, []);

  return (
    <Layout>
      <Fade left>
        <section id='map-page' className={'section .m-t-xxl'}>
          <div className='container'>
            <h5 className='subtitle is-3 is-spaced'>Encuentra tu restaurante más cercano </h5>
            <div className='content has-text-centered has-lg-margin-top'>
              <MelpMap />
            </div>
          </div>
        </section>
      </Fade>
    </Layout>
  );
};

export default MapPage;