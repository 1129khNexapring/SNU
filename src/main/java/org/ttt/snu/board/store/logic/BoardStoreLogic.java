package org.ttt.snu.board.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import org.ttt.snu.board.domain.Board;
import org.ttt.snu.board.domain.Comments;
import org.ttt.snu.board.domain.PageInfo;
import org.ttt.snu.board.store.BoardStore;

@Repository
public class BoardStoreLogic implements BoardStore {

	@Override
	public int selectListCount(SqlSession sqlSession, int boardNo) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Board> selectAll(SqlSession sqlSession) {
		List<Board> boardList = sqlSession.selectList("BoardMapper.selectAllBoard");
		return boardList;
	}

	@Override
	public List<Board> selectAllSearch(SqlSession sqlSession, PageInfo pi) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Board selectOneByNo(SqlSession sqlSession, Integer boardNo) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateCount(SqlSession sqlSession, Integer boardNo) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertBoard(SqlSession sqlSession, Board board) {
		int result = sqlSession.insert("BoardMapper.insertBoard", board);
		return result;
	}

	@Override
	public int updateBoard(SqlSession sqlSession, Board board) {
		int result = sqlSession.update("BoardMapper.updateBoard", board);
		return result;
	}

	@Override
	public int deleteBoard(SqlSession sqlSession, String boardNo) {
		int result = sqlSession.delete("BoardMapper.deleteBoard", boardNo);
		return result;
	}

	@Override
	public List<Comments> selectAllComments(SqlSession sqlSession, Comments comments) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insertComments(SqlSession sqlSession, Comments comments) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateComments(SqlSession sqlSesion, Comments comments) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteComments(SqlSession sqlSession, int commentNo) {
		// TODO Auto-generated method stub
		return 0;
	}

}
