import PropTypes from 'prop-types';
import classnames from "classnames";

const Button = (props) => {

    const { size, className, text, children, ...rest } = props;

    const classes = classnames(
        'form_button btn',
        `${size}`,
        className
    )

    return (
        <>
            <button className={classes} {...rest} >{text}{children}</button>
        </>
    )

}

Button.propTypes = {
    size: PropTypes.oneOfType(['small', 'default', 'large']),
    className: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onClick:PropTypes.func
}

Button.defaultProps = {
    size: 'default',
    onClick: () => {}
};

export default Button;