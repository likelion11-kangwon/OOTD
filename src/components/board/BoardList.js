import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { PictureBox, NumberBox } from '../paging';
import '../../styles/board.scss';

const BoardList = () => {
    const [boardList, setBoardList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();
    // TODO 테스트용 더미 데이터. 배포 전에 지우기
    const listData = [
        [
            {
                postId: 1,
                title: '제목이다아아',
                imageUrl:
                    'https://mobile.busan.com/nas/wcms/wcms_data/photos/2019/06/11/2019061107265195371_l.jpg',
                contents: '내용이다아아',
                category: 'clothes',
            },
            {
                postId: 2,
                title: '제목이다아아2',
                imageUrl:
                    'https://mobile.busan.com/nas/wcms/wcms_data/photos/2019/06/11/2019061107265195371_l.jpg',
                contents: '내용이다아아',
                category: 'clothes',
            },
            {
                postId: 3,
                title: '제목이다아아3',
                imageUrl:
                    'https://mobile.busan.com/nas/wcms/wcms_data/photos/2019/06/11/2019061107265195371_l.jpg',
                contents: '내용이다아아',
                category: 'clothes',
            },
            {
                postId: 4,
                title: '제목이다아아4',
                imageUrl:
                    'https://mobile.busan.com/nas/wcms/wcms_data/photos/2019/06/11/2019061107265195371_l.jpg',
                contents: '내용이다아아',
                category: 'clothes',
            },
        ],
        [
            {
                postId: 5,
                title: '제목이다아아',
                imageUrl:
                    'https://mobile.busan.com/nas/wcms/wcms_data/photos/2019/06/11/2019061107265195371_l.jpg',
                contents: '내용이다아아',
                category: 'clothes',
            },
            {
                postId: 6,
                title: '제목이다아아',
                imageUrl:
                    'https://mobile.busan.com/nas/wcms/wcms_data/photos/2019/06/11/2019061107265195371_l.jpg',
                contents: '내용이다아아',
                category: 'clothes',
            },
            {
                postId: 7,
                title: '제목이다아아',
                imageUrl:
                    'https://mobile.busan.com/nas/wcms/wcms_data/photos/2019/06/11/2019061107265195371_l.jpg',
                contents: '내용이다아아',
                category: 'clothes',
            },
            {
                postId: 8,
                title: '제목이다아아',
                imageUrl:
                    'https://mobile.busan.com/nas/wcms/wcms_data/photos/2019/06/11/2019061107265195371_l.jpg',
                contents: '내용이다아아',
                category: 'clothes',
            },
        ],
    ];
    const getBoardList = async () => {
        setBoardList(listData); // TODO 더미데이터 적용 지우기
        await axios
            .get('/api/post/pages')
            .then(resp => {
                console.log('success :)');
                console.log(resp.data);

                setBoardList(resp.data.postsSimple);
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
                <div className="picture-container">
                    {boardList.map((posts, idx) => {
                        if (currentPage === idx) {
                            return (
                                <>
                                    {posts.map((post, index) => {
                                        return (
                                            <PictureBox
                                                key={index}
                                                postId={index}
                                                imageUrl={post.imageUrl}
                                                title={post.title}
                                                navigate={navigate}
                                            />
                                        );
                                    })}
                                </>
                            );
                        }
                    })}
                </div>
                <div className="number-container">
                    {boardList.map((_, idx) => {
                        return (
                            <NumberBox
                                key={idx}
                                idx={idx}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BoardList;
