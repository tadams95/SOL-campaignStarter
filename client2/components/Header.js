import React from "react";
import { Menu } from "semantic-ui-react";


// handleItemClick = (e, { name }) => this.setState({ activeItem: name })

const Header = (props) => {
  return (
    <div>
      <Menu style={{marginTop: "10px"}}>
        <Menu.Item
          name="CrowdStarter"
          //   active={activeItem === "browse"}
          //   onClick={this.handleItemClick}
        />
         <Menu.Menu position='right'>
          <Menu.Item
            name='Campaigns'
            // active={activeItem === 'signup'}
            // onClick={this.handleItemClick}
          >
            Campaigns
          </Menu.Item>

          <Menu.Item
            name='add'
            // active={activeItem === 'help'}
            // onClick={this.handleItemClick}
          >
            +
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      {props.children}
    </div>
  );
};

export default Header;
