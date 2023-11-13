import {BiSearchAlt} from "react-icons/bi";
import Header from '../header/BoardHeader';
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import '../../styles/board.scss';

function BoardHeader(){
    const [searchVal, setSearchVal] = useState('');
    let navigate = useNavigate();

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

    const navigateToMyPage = () => {
        navigate('/myPage');
    };

    //검색
    const changeSearch = e => {
        setSearchVal(e.target.value);
    };
    const search = () => {
        console.log('search value= ' + searchVal);
        navigate('/board');
        getBoardList(searchVal, 1);
    };

    return(
        <div>
            <div className="board-header">
                <Header />
            </div>
            <div className="header-section">
                <div className="header-text">
                    <h2>BOARD</h2>
                </div>
                {/*검색*/}
                <div className="search-box">
                    <form className="search">
                        <input
                            type="text"
                            placeholder="search posts"
                            value={searchVal}
                            onChange={changeSearch}
                        />
                        <button type="button" onClick={search}>
                            <BiSearchAlt />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BoardHeader;