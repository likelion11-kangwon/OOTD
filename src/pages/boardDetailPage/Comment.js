const Comment = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.userId}</td>
            <td>{props.contents}</td>
        </tr>
    );
};

export default Comment;