function Button(props) {
    return (
        <>
        <button onClick={props.onClick} className={props.className} href={props?.link}>
            {props.text}
        </button>
        </>
    )
}

export default Button