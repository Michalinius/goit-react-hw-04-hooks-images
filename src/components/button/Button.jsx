
const Button = (props) => {

    return (
        <>
            {props.visible &&
                <button className="Button" onClick={() => { props.loadMore() }} type="button"> Load more </button>}
        </>
    )
}

export default Button;