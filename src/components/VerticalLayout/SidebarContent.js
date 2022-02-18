import PropTypes from "prop-types";
import React, { Component } from "react";

//Simple bar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

class SidebarContent extends Component {
  constructor(props) {
    super(props);
    this.refDiv = React.createRef();
  }

  componentDidMount() {
    this.initMenu();
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, ss) {
    if (this.props.type !== prevProps.type) {
      this.initMenu();
    }
  }

  initMenu() {
    new MetisMenu("#side-menu");

    let matchingMenuItem = null;
    const ul = document.getElementById("side-menu");
    const items = ul.getElementsByTagName("a");
    for (let i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  // componentDidUpdate() {}

  scrollElement = item => {
    setTimeout(() => {
      if (this.refDiv.current !== null) {
        if (item) {
          const currentPosition = item.offsetTop;
          if (currentPosition > window.innerHeight) {
            if (this.refDiv.current)
              this.refDiv.current.getScrollElement().scrollTop =
                currentPosition - 300;
          }
        }
      }
    }, 300);
  };

  activateParentDropdown = item => {
    item.classList.add("active");
    const parent = item.parentElement;

    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      this.scrollElement(item);
      return false;
    }
    this.scrollElement(item);
    return false;
  };

  render() {
    return (
      <React.Fragment>
        <SimpleBar className="h-100" ref={this.refDiv}>
          <div id="sidebar-menu">
            <ul className="metismenu list-unstyled" id="side-menu">
              <li>
                <Link to="/calendar" className="">
                  <i className="bx bx-calendar" />
                  <span>{this.props.t("Calendar")}</span>
                </Link>
              </li>

              <li className="menu-title">Pages</li>
              <li>
                <Link to="/#">
                  <i className="bx bx-user-circle" />
                  <span className="badge rounded-pill bg-success float-end">
                    {this.props.t("New")}
                  </span>
                  <span>{this.props.t("Authentication")}</span>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/login">{this.props.t("Login")}</Link>
                  </li>
                  <li>
                    <Link to="/register">{this.props.t("Register")}</Link>
                  </li>
                  <li>
                    <Link to="/recover-password">
                      {this.props.t("Recover Password")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/confirm-mail">
                      {this.props.t("Confirm Mail")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth-email-verification">
                      {this.props.t("Email Verification")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-file" />
                  <span>{this.props.t("Utility")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/pages-starter">
                      {this.props.t("Starter Page")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/pages-maintenance">
                      {this.props.t("Maintenance")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/pages-comingsoon">
                      {this.props.t("Coming Soon")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/pages-timeline">{this.props.t("Timeline")}</Link>
                  </li>
                  <li>
                    <Link to="/pages-faqs">{this.props.t("FAQs")}</Link>
                  </li>
                  <li>
                    <Link to="/pages-pricing">{this.props.t("Pricing")}</Link>
                  </li>
                  <li>
                    <Link to="/pages-404">{this.props.t("Error 404")}</Link>
                  </li>
                  <li>
                    <Link to="/pages-500">{this.props.t("Error 500")}</Link>
                  </li>
                </ul>
              </li>

              <li className="menu-title">{this.props.t("Components")}</li>

              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-tone" />
                  <span>{this.props.t("UI Elements")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/ui-alerts">{this.props.t("Alerts")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-buttons">{this.props.t("Buttons")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-cards">{this.props.t("Cards")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-carousel">{this.props.t("Carousel")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-dropdowns">{this.props.t("Dropdowns")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-offcanvas">{this.props.t("OffCanvas")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-grid">{this.props.t("Grid")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-images">{this.props.t("Images")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-lightbox">{this.props.t("Lightbox")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-modals">{this.props.t("Modals")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-rangeslider">
                      {this.props.t("Range Slider")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ui-session-timeout">
                      {this.props.t("Session Timeout")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ui-progressbars">
                      {this.props.t("Progress Bars")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ui-placeholders">{this.props.t("Placeholders")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-sweet-alert">
                      {this.props.t("Sweet-Alert")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ui-tabs-accordions">
                      {this.props.t("Tabs & Accordions")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ui-typography">
                      {this.props.t("Typography")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ui-toasts">{this.props.t("Toasts")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-video">{this.props.t("Video")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-general">{this.props.t("General")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-colors">{this.props.t("Colors")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-rating">{this.props.t("Rating")}</Link>
                  </li>
                  <li>
                    <Link to="/ui-notifications">
                      {this.props.t("Notifications")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ui-breadcrumb">
                      {this.props.t("Breadcrumb")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#">
                  <i className="bx bxs-eraser" />
                  <span className="badge rounded-pill bg-danger float-end">
                    10
                  </span>
                  <span>{this.props.t("Forms")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/form-elements">
                      {this.props.t("Form Elements")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/form-layouts">
                      {this.props.t("Form Layouts")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/form-validation">
                      {this.props.t("Form Validation")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/form-advanced">
                      {this.props.t("Form Advanced")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/form-editors">
                      {this.props.t("Form Editors")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/form-uploads">
                      {this.props.t("Form File Upload")}{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/form-xeditable">
                      {this.props.t("Form Xeditable")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/form-repeater">
                      {this.props.t("Form Repeater")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/form-wizard">{this.props.t("Form Wizard")}</Link>
                  </li>
                  <li>
                    <Link to="/form-mask">{this.props.t("Form Mask")}</Link>
                  </li>
                  <li>
                    <Link to="/dual-listbox">
                      {this.props.t("Transfer List")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-list-ul" />
                  <span>{this.props.t("Tables")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/tables-basic">
                      {this.props.t("Basic Tables")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/tables-datatable">
                      {this.props.t("Data Tables")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/tables-responsive">
                      {this.props.t("Responsive Table")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/tables-editable">
                      {this.props.t("Editable Table")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/tables-dragndrop">
                      {this.props.t("Drag & Drop Table")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bxs-bar-chart-alt-2" />
                  <span>{this.props.t("Charts")}</span>
                </Link>

                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/apex-charts">{this.props.t("Apex charts")}</Link>
                  </li>
                  <li>
                    <Link to="/chartist-charts">
                      {this.props.t("Chartist Chart")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/chartjs-charts">
                      {this.props.t("Chartjs Chart")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/e-charts">{this.props.t("E Chart")}</Link>
                  </li>
                  <li>
                    <Link to="/sparkline-charts">
                      {this.props.t("Sparkline Chart")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/charts-knob">{this.props.t("Knob Chart")}</Link>
                  </li>
                  <li>
                    <Link to="/re-charts">{this.props.t("Re Chart")}</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-aperture" />
                  <span>{this.props.t("Icons")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/icons-boxicons">{this.props.t("Boxicons")}</Link>
                  </li>
                  <li>
                    <Link to="/icons-materialdesign">
                      {this.props.t("Material Design")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/icons-dripicons">
                      {this.props.t("Dripicons")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/icons-fontawesome">
                      {this.props.t("Font awesome")}
                    </Link>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </SimpleBar>
      </React.Fragment>
    );
  }
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
  type: PropTypes.string,
};

export default withRouter(withTranslation()(SidebarContent));