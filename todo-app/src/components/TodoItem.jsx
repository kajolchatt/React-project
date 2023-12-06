function TodoItem(props) {
    return (
        <div className="container ">
            <div className="row kg-row">
                <div className="col-6"><h4>{props.content}</h4></div>
                <div className="col-4"><h5>{props.date}</h5></div>
                <div className="col-2"><button type="button" className="btn btn-danger kg-button">Delete</button></div>
            </div>

        </div>);
} 
export default TodoItem