function Select(props) {
    const options = props.options
    return (
        <div className={props.className}>
            <select className={"select"} onClick={props.onClick} name={props.name} id="">
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select