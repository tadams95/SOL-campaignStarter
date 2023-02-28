import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

// handleItemClick = (e, { name }) => this.setState({ activeItem: name })

const Header = (props) => {
  return (
    <div>
      <Menu style={{ marginTop: "10px" }}>
        <Link legacyBehavior route="/">
          <a className="item">CrowdStarter</a>
        </Link>
        <Menu.Menu position="right">
          <Link legacyBehavior route="/">
            <a className="item">Campaigns</a>
          </Link>

          <Link legacyBehavior route="/campaigns/new">
            <a className="item">+</a>
          </Link>
        </Menu.Menu>
      </Menu>
      {props.children}
    </div>
  );
};

export default Header;
