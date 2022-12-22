const initalState = [
    {
        boardId : 1, 
        userEmail: "test1111@nav.com",
        title : "첫 게시물입니다",
        content : "문자만들어갈수 있는 공간입니다",
        view : 0,
        like : 1, // 좋아요를 누른 사람의 리스트
    },
    {
        boardId : 2, 
        userEmail: "test2222@nav.com",
        title : "두번째 게시물",
        content : "두번째 글입니다",
        view : 0,
        like : 1, // 좋아요를 누른 사람의 리스트
    },
]

function board (state=initalState, action) {
    switch(action.type) {
        case "modifyBoard":
            const modifyboard = state.map((board)=>(board.boardId == action.payload.boardId ? action.payload : board))
        return modifyboard;
        default :
            return state; 
    }
}

// 액션함수
export const modifyBoard = (board)=>({type:"modifyBoard", payload:board})

export default board;