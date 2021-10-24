

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil 😃</p>
    }
    return <p>It wont boil 😞</p>
}

export default BoilingVerdict