import React from "react";
import clx from "classnames";
import styles from "./Footer.module.scss";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { className } = props;

  const footerClasses = clx(styles.Footer, {
    [className!]: className,
  });

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-main-inner container">
          <div className="footer-body">
            <div className="footer-column">
              <h2 className="visually-hidden">Information about website update</h2>
              <div>
                <p>Last Updated 2024-05-20</p>
              </div>
            </div>
            <div className="footer-column">
              <h2 className="visually-hidden">Socials</h2>
              <div className="footer-contacts">
                <ul className="footer-contacts-list">
                  <li className="footer-contacts-item">
                    <a href="#" className="footer-contacts-link">
                      Linkedin
                    </a>
                  </li>
                  <li className="footer-contacts-item">
                    <a href="#" className="footer-contacts-link">
                      Instagram
                    </a>
                  </li>
                  <li className="footer-contacts-item">
                    <a href="#" className="footer-contacts-link">
                      Twitter
                    </a>
                  </li>
                  <li className="footer-contacts-item">
                    <a href="#" className="footer-contacts-link">
                      Reading
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-column">
              <h2 className="visually-hidden">Collaboration Invitation</h2>
              <div className="footer-contacts">
                <h3>Let's build something together.</h3>
                <ul className="footer-contacts-list">
                  <li className="footer-contacts-item">
                    <a className="footer-contacts-link" href="mailto:varivonchikartem.work@gmail.com">
                      varivonchikartem.work@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-extra"></div>
    </footer>
  );
};
