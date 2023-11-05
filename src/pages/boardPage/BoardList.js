import Header from '../../layout/Header';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

//게시판(board)페이지:헤더+게시글 리스트 보여주는 컴포넌트
//게시글 등록(글쓰기) 버튼 추가
//페이징 추가
//검색 기능 추가

const BoardList = () => {
    const navigate = useNavigate();
    const [boardList, setBoardList] = useState([]);
    const [pageList, setPageList] = useState([]);

    //페이징
    const [curPage, setCurPage] = useState(0);
    const [prevBlock, setPrevBlock] = useState(0);
    const [nxtBlock, setNxtBlock] = useState(0);
    const [lastBlock, setLastBlock] = useState(0);

    const [search, setSearch] = useState({
        page: 1,
        sk: '',
        sv: '',
    });

    const getBoardList = async () => {
        if (search.page === curPage) return; //현재 페이지와 클릭한 페이지가 같은 때 return

        const queryString = Object.entries(search)
            .map(e => e.join('='))
            .join('&');

        //게시글 목록 데이터에 할당해줌
        const resp = await (
            await axios.get('//localhost:8080/board?' + queryString)
        ).data;

        setBoardList(resp.data); //boardList 변수에 할당해줌
        // console.log(boardList);
        const pngn = resp.pagination;
        // console.log(pngn);
        const { nxtBlock, prevBlock, startPage, endPage, totalPageNum } = pngn;

        const tempPages = [];
        for (let i = startPage; i <= endPage; i++) tempPages.push(i);

        setPageList(tempPages);
    };

    const moveToWrite = () => {
        navigate('/newPost');
    };

    const onClick = e => {
        let val = e.target.value;
        setSearch({
            ...search,
            page: val,
        });
        getBoardList();
    };

    const onChange = e => {
        const { val, name } = e.target;
        setSearch({
            ...search,
            [name]: val,
        });
    };

    const onSearch = () => {
        if (search.sk !== '' && search.sv !== '') {
            setSearch({
                ...search,
                page: 1,
            });
            setCurPage(0);
            getBoardList();
        }
    };

    useEffect(() => {
        getBoardList();
    }, [ search ]);
    return (
        <div>
            <Header />
            <div>
                <button onClick={moveToWrite}> 글쓰기 </button>
            </div>
            <ul>
                {boardList.map(board => {
                    return (
                        //상세보기(postDetailPage)로 이동
                        <li key={board.idx}>
                            <Link to={`/board/${board.idx}`}>
                                {board.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <div>
                {/*<button onClick={onClick} value={1}>*/}
                {/*    &lt;&lt;*/}
                {/*</button>*/}
                <button onClick={onClick} value={prevBlock}>
                    &lt;
                </button>
                {pageList.map((page, index) => (
                    <button key={index} onClick={onClick} value={page}>
                        {page}
                    </button>
                ))}
                <button onClick={onClick} value={nxtBlock}>
                    &gt;
                </button>
            </div>
            <br />
            <div>
                <select name="sk" onChange={onChange}>
                    <option value="">-선택-</option>
                    <option value="title">제목</option>
                    <option value="contents">내용</option>
                </select>
                <input type="text" name="sv" id="" onChange={onChange} />
                <button onClick={onSearch}>검색</button>
            </div>
        </div>
    );
};

export default BoardList;
