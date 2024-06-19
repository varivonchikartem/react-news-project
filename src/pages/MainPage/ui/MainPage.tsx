import React from "react";
import clx from "classnames";
import styles from "./MainPage.module.scss";
import { PageWrapper } from "../../../widgets/PageWrapper/index.";
import { Link } from "react-router-dom";

interface MainPageProps {
  className?: string;
}

const MainPage: React.FC<MainPageProps> = (props) => {
  const { className } = props;

  const mainpageClasses = clx(styles.MainPage, {
    [className!]: className,
  });

  return (
    <div className={mainpageClasses}>
      <section className={styles.intro}>
        <div className="wrapper">
          <div className={styles.main_page_inner}>
            <h1 className={styles.main_page_title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita?
            </h1>
            <p className={styles.main_page_subtitle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium mollitia itaque laudantium
              deleniti porro!
            </p>
          </div>
        </div>
      </section>
      <section className={styles.new_releases}>
        <div className="wrapper">
          <header className={styles.new_releases_panel}>
            <h2 className={styles.new_releases_panel_title}>New Releases</h2>
            <Link className={styles.new_releases_panel_link} to="#">
              View All Stories
            </Link>
          </header>

          <ul className="projects-list">
            <li className="projects-item">
              <figure>
                <div className="projects-image-block">
                  <img
                    className="projects-image"
                    src="https://www.josephz.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fazuki.6b42d3cf.jpg&w=3840&q=75"
                    alt="Azuki Project Image"
                    width="2495"
                    height="1625"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <h3 className="projects-title">Azuki</h3>
                  <p className="projects-subtitle ">Lorem ipsum</p>
                </figcaption>
              </figure>
            </li>
            <li className="projects-item">
              <figure>
                <div className="projects-image-block">
                  <img
                    className="projects-image"
                    src="https://www.josephz.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollector-status.8e21eac7.jpg&w=3840&q=75"
                    alt="Azuki Project Image"
                    width="2495"
                    height="1625"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <h3 className="projects-title">Azuki</h3>
                  <p className="projects-subtitle">Lorem ipsum</p>
                </figcaption>
              </figure>
            </li>
            <li className="projects-item">
              <figure>
                <div className="projects-image-block">
                  <img
                    className="projects-image"
                    src="https://www.josephz.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcursor.fe5b7ee8.jpg&w=3840&q=75"
                    alt="Azuki Project Image"
                    width="2495"
                    height="1625"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <h3 className="projects-title">Azuki</h3>
                  <p className="projects-subtitle">Lorem ipsum</p>
                </figcaption>
              </figure>
            </li>
            <li className="projects-item">
              <figure>
                <div className="projects-image-block">
                  <img
                    className="projects-image"
                    src="https://www.josephz.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnatural.63553f68.jpg&w=3840&q=75"
                    alt="Azuki Project Image"
                    width="2495"
                    height="1625"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <h3 className="projects-title">Azuki</h3>
                  <p className="projects-subtitle">Lorem ipsum</p>
                </figcaption>
              </figure>
            </li>
            <li className="projects-item">
              <figure>
                <div className="projects-image-block">
                  <img
                    className="projects-image"
                    src="https://www.josephz.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplane.8c50393a.jpg&w=3840&q=75"
                    alt="Azuki Project Image"
                    width="2495"
                    height="1625"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <h3 className="projects-title">Azuki</h3>
                  <p className="projects-subtitle">Lorem ipsum</p>
                </figcaption>
              </figure>
            </li>
            <li className="projects-item">
              <figure>
                <div className="projects-image-block">
                  <img
                    className="projects-image"
                    src="https://www.josephz.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fskiff.a96af1d4.jpg&w=3840&q=75"
                    alt="Azuki Project Image"
                    width="2495"
                    height="1625"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <h3 className="projects-title">Azuki</h3>
                  <p className="projects-subtitle">Lorem ipsum</p>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
