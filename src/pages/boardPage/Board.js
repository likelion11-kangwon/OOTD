import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Card from '../../components/Card';

const Board = () => {
    const [boardList, setboardList] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8090/posts')
            .then(resp => {
                console.log('success :)');
                console.log(resp.data);
                setboardList([...resp.data]);
            })
            .catch(err => {
                console.log('err');
            });
    }, []);

    return (
        <div className='container'>
            <div className='row'>
                {
                    boardList.map(board => {
                        return <Card
                            key={boardList.id}
                            id={boardList.id}
                            img={boardList.img}
                            title={boardList.title}
                            author={boardList.author}
                        />
                    }
                }
            </div>
        </div>
    )
};
export default Board;
