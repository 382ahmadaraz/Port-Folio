import './button.css'

function Button(props) {
    return(
        <>
            <button type="button">{props.title}</button >
        </>
    )
}

export default Button;