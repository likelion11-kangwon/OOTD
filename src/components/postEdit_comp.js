import './postEdit_comp.scss';

function PostEditComp({imgPath, title, contents}){
  return(
    <div className="postEdit">
      <div className="postInput" id="imgIn">
        <img src={imgPath} alt="게시물 이미지"/>
        <button className="imgSelect" type="button">이미지 선택</button>
      </div>
      <div className="postInput" id="categoryIn">
        <label htmlFor="category">Category</label>
        <div className="type-select">
          <button type="button">clothes</button>
          <button type="button">shoes</button>
          <button type="button">acc</button>
        </div>
      </div>
      <div className="postInput" id="titleIn">
        <label htmlFor="title">Title</label>
        <input 
          name="title" type="text" 
          placeholder="제목을 입력하세요" value={title}
        />
      </div>
      <div className="postInput" id="contentsIn">
        <label htmlFor="contents">Comment</label>
        <input 
          name="contents" type="text" 
          placeholder="문구를 입력하세요" value={contents}
        />
      </div>
    </div>
  )
}

export default PostEditComp;