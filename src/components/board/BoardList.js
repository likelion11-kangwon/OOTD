import { Link } from 'react-router-dom';
import Card from './Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/board.scss';

const BoardList = () => {
    const [boardList, setBoardList] = useState([]);

    useEffect(() => {
        const getBoardList = async () => {
            try {
                const resp = await axios.get('http://localhost:8090/posts', {
                    withCredentials: true,
                });
                setBoardList([...resp.data]);
            } catch (err) {
                console.log('Error fetching data:', err);
            }
        };

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
                                    {...boardList}
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
