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
	public List<Board> printAll(PageInfo pi) {
		// TODO Auto-generated method stub
		return null;
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
	public List<Comments> printAllComments(Comments comments) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int registerBoard(Board board) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int modifyBoard(Board board) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int removeBoard(int boardNo) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int registerComments(Comments comments) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int modifyComments(Comments comments) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int removeComments(int commentNo) {
		// TODO Auto-generated method stub
		return 0;
	}

}
