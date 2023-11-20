import './Button.scss'

const Button = ({ value }) => {
    return (
        <button className='btn__component'>
            {value}
        </button>
    );
};

export default Button;