import React from "react";
import PropTypes from "prop-types";

import Styles from "./styles";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  handleImageLoaded() {
    this.setState({ loaded: true });
  }

  render() {
    const { src, alt } = this.props;
    const { loaded } = this.state;
    const imageStyle = !loaded ? { display: "none" } : {};

    return (
      <div className="imageHolder">
        {!loaded && <Styles.Placeholder />}
        <img
          src={src}
          alt={alt}
          style={imageStyle}
          onLoad={this.handleImageLoaded.bind(this)}
          loading="lazy"
        />
      </div>
    );
  }
}

Image.defaultProps = {
  size: "portrait",
  src: "",
  alt: "",
};

Image.propTypes = {
  size: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
