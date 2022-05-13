package org.ttt.snu.board.store.logic;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.xml.stream.events.Comment;

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
	public int deleteBoard(SqlSession sqlSession, Board board) {
		int result = sqlSession.delete("BoardMapper.deleteBoard", board);
		return result;
	}

	@Override
	public List<Comments> selectAllComments(SqlSession sqlSession, int boardNo, String sCode) {
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("boardNo", boardNo);
		paramMap.put("sCode", sCode);
		List<Comments> cList = sqlSession.selectList("BoardMapper.selectAllComments", paramMap); 
		//selectList("BoardMapper.selectAllComments", boardNo, sCode);
		return cList;
	}

	@Override
	public int insertComments(SqlSession sqlSession, Comments comments) {
		int result = sqlSession.insert("BoardMapper.insertComments", comments);
		return result;
	}

	@Override
	public int updateComments(SqlSession sqlSession, Comments comments) {
		int result = sqlSession.update("BoardMapper.updateComments", comments);
		return result;
	}

	@Override
	public int deleteComments(SqlSession sqlSession, Comments comments) {
		int result = sqlSession.delete("BoardMapper.deleteComments", comments);
		return result;
	}

}
