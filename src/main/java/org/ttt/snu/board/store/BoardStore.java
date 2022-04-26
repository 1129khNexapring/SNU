package org.ttt.snu.board.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.board.domain.Board;
import org.ttt.snu.board.domain.Comments;
import org.ttt.snu.board.domain.PageInfo;

public interface BoardStore {
	
	// 게시판 영역
	public int selectListCount(SqlSession sqlSession, int boardNo);
	public List<Board> selectAll(SqlSession sqlSession, Board board);
	public List<Board> selectAllSearch(SqlSession sqlSession, PageInfo pi);
	public Board selectOneByNo(SqlSession sqlSession, Integer boardNo);
	public int updateCount(SqlSession sqlSession, Integer boardNo);
	
	public int insertBoard(SqlSession sqlSession, Board board);
	public int updateBoard(SqlSession sqlSession, Board board);
	public int deleteBoard(SqlSession sqlSession, int boardNo);
	
	// 댓글 영역
	public List<Comments> selectAllComments(SqlSession sqlSession, Comments comments);
	
	public int insertComments(SqlSession sqlSession, Comments comments);
	public int updateComments(SqlSession sqlSesion, Comments comments);
	public int deleteComments(SqlSession sqlSession, int commentNo);
	

}
