import { useNavigate } from 'react-router-dom';
import './ExploreSection.css';

const ExploreSection: React.FC = () => {
  const history = useNavigate();

  const navigateToMasterVilla = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    history('/master-villa');
  };

  return (
    <div className="exploreContainer">
      <div className="sticky-circle_wrap">
        <div className="sticky-circle">
          <div className="sticky-circle-element" id="stickyy-circle">
            <img
              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c3945288009a5554ac39cb_fa5a9a59840835.5a313db584588.jpg"
              loading="lazy"
              width="960"
              sizes="100vw"
              alt=""
              srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c3945288009a5554ac39cb_fa5a9a59840835.5a313db584588-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c3945288009a5554ac39cb_fa5a9a59840835.5a313db584588-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c3945288009a5554ac39cb_fa5a9a59840835.5a313db584588-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c3945288009a5554ac39cb_fa5a9a59840835.5a313db584588-p-1600.jpg 1600w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c3945288009a5554ac39cb_fa5a9a59840835.5a313db584588.jpg 1920w"
              className="sticky-circle-img"
            />
          </div>
        </div>
        <div
          data-w-id="761d741a-9dc7-6304-8c5c-83152849a839"
          className="text-wrapper"
        >
          <div className="max-width-500">
            <h2 className="testing">Behind the scenes</h2>
            <p className="text-size-medium white center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <div className="_2-buttons-wrapper">
              <a
                href="/master-villa"
                target="_blank"
                className="primary-button w-inline-block"
                onClick={navigateToMasterVilla}
              >
                <div className="rb-border">
                  <div className="rb-gradient gradient-extra"></div>
                </div>
                <div className="rb-bg"></div>
                <div className="rb-gradient gradient-extra"></div>
                <div className="rb-content">
                  <div className="button-text">Explore Cabin</div>
                </div>
              </a>
              <a
                data-lenis-stop=""
                data-w-id="8cf4b209-d6f2-1fc8-368f-718115fb2012"
                href="#"
                className="primary-button book w-inline-block"
              >
                <div className="rb-border">
                  <div className="rb-gradient gradient-extra"></div>
                </div>
                <div className="rb-bg secondary"></div>
                <div className="rb-gradient gradient-extra"></div>
                <div className="rb-content">
                  <div className="button-text">Book Your Stay</div>
                </div>
              </a>
            </div>
          </div>
          <div
            data-w-id="772091d7-6255-7f23-9153-3b3e1a2122e2"
            className="overlay-gradient"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
