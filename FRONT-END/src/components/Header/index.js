import PropTypes from "prop-types";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

import { WrapperHeader } from "./style";

function Header({ name }) {
  return (
    <WrapperHeader>
      <PowerSettingsNewIcon fontSize="large" />

      <h1> Bem Vinda {name}</h1>
    </WrapperHeader>
  );
}
export default Header;
Header.prototype = {
  name: PropTypes.string.isRequired,
};
