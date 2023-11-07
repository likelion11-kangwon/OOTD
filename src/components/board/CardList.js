const CardList = ({ boardList }) => {
    return (
        <div className='cardList'>
            {boardList.map((board) => {
                return <Card key={board.id} />;
            })}
        </div>
    );
};
