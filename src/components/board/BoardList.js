import { Link } from 'react-router-dom';
import Card from './Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/board.scss';

const BoardList = () => {
    const [boardList, setBoardList] = useState([]);
    const getBoardList = async () => {
        await axios
            .get('/api/post/pages')
            .then(resp => {
                console.log('success :)');
                console.log(resp.data);

                setBoardList([...resp.data]);
            })
            .catch(err => {
                console.log('err');
            });
    };

    useEffect(() => {
        getBoardList();
    }, []);

    return (
        <div>
            <div className="board-container">
                <div className="row">
                    {boardList.map((boardList, id) => {
                        return (
                            <Link to={`/board/${boardList.id}`}>
                                <Card
                                    id={boardList.id}
                                    title={boardList.title}
                                    username={boardList.username}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BoardList;
