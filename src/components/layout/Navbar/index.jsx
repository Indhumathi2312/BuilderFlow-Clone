"use client";
import img_69177c744539a98178eb3a41_logo_white_builderflow_webflow_template from "@/assets/images/69177c744539a98178eb3a41_logo-white-builderflow-webflow-template.png";
import img_69177c74cab7eda30138d1c3_logo_builderflow_webflow_template from "@/assets/images/69177c74cab7eda30138d1c3_logo-builderflow-webflow-template.png";

export default function Navbar() {
  return (
    <div data-animation="default" className="header-main-wrapper w-nav" data-easing2="ease" data-wf--headers-global--header---style="is-position-sticky" data-easing="ease" data-collapse="medium" data-w-id="8dbec37f-1298-beb0-698a-0094c7949f34" role="banner" data-duration="400">
      <div data-w-id="61a36a31-e9dc-de0c-6bc0-0ed1a0c0da08" className="header-main">
        <div className="w-layout-blockcontainer container-default w-container">
          <div className="header-column-wrapper">
            <a href="#hero" className="logo-link w-inline-block">
              <div data-wf--ui-element---logo-theme--logo---theme="is-light">
                <div className="logo-light">
                  <img src={img_69177c74cab7eda30138d1c3_logo_builderflow_webflow_template.src} loading="lazy" width="136" height="32" alt="Logo - Builderflow Webflow Template" className="width-100"/>
                </div>
                <div className="logo-dark">
                  <img src={img_69177c744539a98178eb3a41_logo_white_builderflow_webflow_template.src} loading="lazy" width="136" height="32" alt="Logo - Builderflow Webflow Template" className="width-100"/>
                </div>
              </div>
            </a>
            
            <div className="header-column-right is-gap-sm">
              <nav role="navigation" className="header-nav w-nav-menu">
                <div className="header-nav-container">
                  <ul role="list" className="header-list">
                    <li className="header-list-item">
                      <a href="#hero" className="link w-inline-block">
                        <div className="control-group"><div>Home</div></div>
                      </a>
                    </li>
                    <li className="header-list-item">
                      <a href="#use-cases" className="link w-inline-block">
                        <div className="control-group"><div>Use Cases</div></div>
                      </a>
                    </li>
                    <li className="header-list-item">
                      <a href="#process" className="link w-inline-block">
                        <div className="control-group"><div>How it works</div></div>
                      </a>
                    </li>
                    <li className="header-list-item">
                      <a href="#features" className="link w-inline-block">
                        <div className="control-group"><div>Features</div></div>
                      </a>
                    </li>
                    <li className="header-list-item">
                      <a href="#testimonials" className="link w-inline-block">
                        <div className="control-group"><div>Testimonials</div></div>
                      </a>
                    </li>
                    <li className="header-list-item">
                      <a href="#blog" className="link w-inline-block">
                        <div className="control-group"><div>Blog</div></div>
                      </a>
                    </li>
                    <li className="header-list-item visibility-visible-landscape">
                      <div className="flex-horizontal is-align-left-stretch">
                        <a href="/company-pages/pricing" className="button w-inline-block">
                          <div className="button-group">
                            <div className="item-icon-left"><div className="custom-icon-set"></div></div>
                            <div>Get started</div>
                          </div>
                          <div className="button-group absolute">
                            <div className="item-icon-left"><div className="custom-icon-set"></div></div>
                            <div>Get started</div>
                          </div>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
              
              <div className="visibility-hidden-landscape flex-vertical">
                <a href="/company-pages/pricing" className="button w-inline-block">
                  <div className="button-group">
                    <div className="item-icon-left"><div className="custom-icon-set"></div></div>
                    <div>Start creating</div>
                  </div>
                  <div className="button-group absolute">
                    <div className="item-icon-left"><div className="custom-icon-set"></div></div>
                    <div>Start creating</div>
                  </div>
                </a>
              </div>
              
              <div className="hamburger-menu w-nav-button">
                <div className="hamburger-menu-flex">
                  <div className="hamburger-menu-line is-top"></div>
                  <div className="hamburger-menu-line is-bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
