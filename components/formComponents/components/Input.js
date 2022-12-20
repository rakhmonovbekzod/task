import PropTypes from 'prop-types';
import classnames from "classnames";

const Input = (props) => {

    const { size, className, validateName,defaultValue, form, field, name, disabled, ...rest } = props;

    let { touched, errors } = form;
    
    const classes = classnames(
        'form-control',
        `${size}`,
        className,
        touched[field.name] && errors[field.name] && 'error',
        touched[validateName] && errors[validateName] && 'error',
        size && `${size}`,
        disabled && 'disabled',
        !errors[field.name] && field.value && 'active',

    )


    return (
        <>
            <div className={`${field.name ? 'custom_input_wrapper' : ''}`}>
                <input  type="text" className={classes} {...rest} name={name} {...field} />
                <div className="error_block">
                    {touched[field.name] && errors[field.name] && (
                        <div className="mod-main-input__error">{errors[field.name]}</div>
                    )}
                    {touched[validateName] && errors[validateName] && (
                        <div className="mod-main-input__error">{errors[validateName]}</div>
                    )}
                </div>

            </div>
        </>
    )
}


Input.propTypes = {
    size: PropTypes.oneOfType(['small', 'default', 'large']),
    className: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    validateName: PropTypes.string,
    field: PropTypes.shape({
        name: PropTypes.string
    }),
    name: PropTypes.string,
    form: PropTypes.shape({
        touched:PropTypes.object,
        errors:PropTypes.object
    })
}

Input.defaultProps = {
    size: 'default',
    onChange: () => { },
    field: {},
    form: {
        touched: {},
        errors: {}
    }
};

export default Input;