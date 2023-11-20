
const Point = ({color}) => {
    return (
        <div style={{position: "absolute"}}>
            <p
                style={{
                    position: "absolute",
                    right:'40px',
                    bottom: '-5px',
                    border: `1px solid ${color}`,
                    height: '25px',
                    borderRadius: '50%',
                    background: color
                }}
            >

            </p>
        </div>
    );
};

export default Point;