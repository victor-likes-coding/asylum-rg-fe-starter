import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

/**
 * The GraphLink function is a React component that renders a clickable image with accompanying text.
 * @returns a JSX element.
 */
function GraphLink({
  image,
  text,
  alt,
  link,
  containerClassName = '',
  imageContainerClassName = '',
  imageClassName = '',
}) {
  return (
    <div className={`graph-link-container ${containerClassName}`}>
      <div className={`image-container ${imageContainerClassName}`}>
        <a href={link}>
          <img
            src={image}
            alt={alt}
            className={`graph-clickable-image ${imageClassName}`}
          />
        </a>
      </div>
      <p className="graph-link-text">{text}</p>
    </div>
  );
}

/**
 * The `DataButton` component is a React component that renders a button with specified text, container
 * name, type, style, and callback function.
 * @returns a component with a div element with a className specified by the
 * containerName prop. Inside the div, there is a Button component with props for type, style, and
 * onClick (as callback). The text prop is used as the content of the Button component.
 */
function DataButton({ text, containerName, type, style, callback }) {
  return (
    <div className={containerName}>
      <Button type={type} style={style} onClick={callback}>
        {text}
      </Button>
    </div>
  );
}

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();
  const primaryButtonStyle = { backgroundColor: '#404C4A', color: '#FFFFFF' };

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section: Add code here for the graphs section for your first ticket */}
      <section className="graphs-section">
        <GraphLink
          containerClassName="grant-rates-by-office-graph-container"
          image={GrantRatesByOfficeImg}
          text="Search Grant Rates By Office"
        />

        <GraphLink
          containerClassName="grant-rates-by-nationality-container"
          image={GrantRatesByNationalityImg}
          imageClassName="gr-nationality-img smaller"
          text="Search Grant Rates By Nationality"
        />
        <GraphLink
          containerClassName="grant-rates-over-time-container"
          image={GrantRatesOverTimeImg}
          text="Search Grant Rates Over Time"
        />
      </section>
      <section className="more-buttons">
        <DataButton
          text="View the Data"
          containerName="view-more-data-btn-container"
          style={primaryButtonStyle}
          callback={() => history.push('/graphs')}
        />

        <DataButton
          text="Download the Data"
          containerName="view-more-data-btn-container"
          style={primaryButtonStyle}
          callback={() => history.push('/graphs')}
        />
      </section>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      <div>
        {/* Bottom Section: Add code here for the graphs section for your first ticket */}
        {/* <div className="bottom-section">*/}
        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
