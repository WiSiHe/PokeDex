import React from "react";
import PropTypes from "prop-types";

// import arrowImg from "../../public/images/arrow.svg";

import Styles from "./styles";

const Select = ({ name, selected, options, onChange, label, full, disabled, ...props }) => {
  console.log("options", options);
  return (
    <Styles.Wrapper full={full}>
      {label && (
        <div>
          <Styles.Label htmlFor={name}>{label}</Styles.Label>
        </div>
      )}
      <Styles.Outer full={full}>
        {/* <Styles.Arrow>
          <img src={arrowImg} alt="" />
        </Styles.Arrow> */}
        <Styles.Select
          name={name}
          value={selected}
          onChange={onChange}
          disabled={disabled}
          {...props}
        >
          {options
            .filter((option) => !option.disabled)
            .map((option) => (
              <option
                key={`${name}-${option.value}`}
                value={option.value}
                disabled={option.notSelectable}
              >
                {option.text}
              </option>
            ))}
        </Styles.Select>
      </Styles.Outer>
      <Styles.Shadow />
    </Styles.Wrapper>
  );
};

Select.defaultProps = {
  label: "",
  disabled: false,
  full: false,
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.any.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  full: PropTypes.bool,
};

export default Select;
