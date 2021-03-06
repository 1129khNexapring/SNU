package org.ttt.snu.board.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.board.domain.Board;
import org.ttt.snu.board.domain.Comments;
import org.ttt.snu.board.domain.PageInfo;
import org.ttt.snu.board.service.BoardService;
import org.ttt.snu.board.store.BoardStore;

@Service
public class BoardServiceImpl implements BoardService {
	
	@Autowired
	private SqlSession sqlSession;
	
	@Autowired
	private BoardStore bStore;

	@Override
	public int getListCount() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Board> printAll() {
		List<Board> boardList = bStore.selectAll(sqlSession);
		return boardList;
	}

	@Override
	public List<Board> printAllSearch(PageInfo pi) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int printOneByNo(Integer boardNo) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int viewCount(Integer boardNo) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Comments> printAllComments(int boardNo, String sCode) {
		List<Comments> cList = bStore.selectAllComments(sqlSession, boardNo, sCode);
		return cList;
	}

	@Override
	public int registerBoard(Board board) {
		int result = bStore.insertBoard(sqlSession, board);
		return result;
	}

	@Override
	public int modifyBoard(Board board) {
		int result = bStore.updateBoard(sqlSession, board);
		return result;
	}

	@Override
	public int removeBoard(Board board) {
		int result = bStore.deleteBoard(sqlSession, board);
		return result;
	}
	
	@Override
	public int updateBoardCnt(Board board) {
		int result = bStore.updateBoardCnt(sqlSession, board);
		return result;
	}

	@Override
	public int registerComments(Comments comments) {
		int result = bStore.insertComments(sqlSession, comments);
		return result;
	}

	@Override
	public int modifyComments(Comments comments) {
		int result = bStore.updateComments(sqlSession, comments);
		return result;
	}

	@Override
	public int removeComments(Comments comments) {
		int result = bStore.deleteComments(sqlSession, comments);
		return result;
	}

	

}
