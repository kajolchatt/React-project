function TodoItem(props) {
    return (
        <div class="container ">
            <div class="row kg-row">
                <div class="col-6"><h4>{props.content}</h4></div>
                <div class="col-4"><h5>{props.date}</h5></div>
                <div class="col-2"><button type="button" class="btn btn-danger kg-button">Delete</button></div>
            </div>

        </div>);
}
export default TodoItem