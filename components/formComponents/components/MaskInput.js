import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import {useTranslation} from "react-i18next";
import cx from "classnames";

const MyInputMask = ({ className, label, mask, readOnly, placeholder, type, size, field, form: { touched, errors }, ...props }) => {
  const {t} = useTranslation();
  const classes = cx(
    'form-field',
    touched[field.name] && errors[field.name] && 'form-field--error',
    size && `form-field--${size}`,
    field.value && 'form-field--active',
    className
  );

  MyInputMask.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(["text", "password", "number"]),
    className: PropTypes.string,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    size: PropTypes.oneOf(["default", "large", "small"]),
    mask: PropTypes.string
  };

  MyInputMask.defaultProps = {
    label: "",
    placeholder: "",
    type: "text",
    className: null,
    readOnly: false,
    size: "default",
  };

  return (
    <div className={classes}>
      {label && (
        <label className="form-field__label">{label}</label>
      )}
      <InputMask
        className="form-field__input form-control"
        mask={mask}
        readOnly={readOnly}
        {...{ placeholder, type }}
        {...field}
        {...props}
      />
      {touched[field.name] && errors[field.name] && (
        <div className="mod-main-input__error">{t(errors[field.name])}</div>
      )}
    </div>
  );
};

export default MyInputMask;
