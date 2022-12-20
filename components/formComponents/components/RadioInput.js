import PropTypes from 'prop-types';
import classnames from "classnames";

const RadioInput = (props) => {

    const { size, className, validateName, form, field, label, disabled, ...rest } = props;
    const classes = classnames('form-check-input', `${size}`, className)
    let { touched, errors } = form;

    return <>
        <div className='radio_input_wrapper'>
            <label>
                <input {...field} className={classes} type="radio"  {...rest} />
                <span className="ml-10"  >{label}</span>
            </label>
        </div>
    </>
}

RadioInput.propTypes = {
    size: PropTypes.oneOfType(['small', 'default', 'large']),
    className: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    validateName: PropTypes.string,
    field: PropTypes.shape({
        name: PropTypes.string
    }),
    form: PropTypes.shape({
        touched: PropTypes.object,
        errors: PropTypes.object
    })
}

RadioInput.defaultProps = {
    size: 'default',
    onChange: () => { },
    field: {
        name: ''
    },
    form: {
        touched: {},
        errors: {}
    }
};

export default RadioInput;