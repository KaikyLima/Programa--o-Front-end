import './Box.css'

const Box = ({children, colorTex}) => {
    return (
        <div className='boxContainer'>
            <p style={{color: colorTex}}>
                {children}
            </p>

        </div>
    );
}

export default Box;