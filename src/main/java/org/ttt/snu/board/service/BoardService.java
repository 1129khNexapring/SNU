package org.ttt.snu.board.service;

import java.util.List;

import org.ttt.snu.board.domain.Board;
import org.ttt.snu.board.domain.Comments;
import org.ttt.snu.board.domain.PageInfo;

public interface BoardService {
	
	// 게시판 영역
	public int getListCount();
	public List<Board> printAll();
	public List<Board> printAllSearch(PageInfo pi);
	public int registerBoard(Board board);
	public int modifyBoard(Board board);
	public int removeBoard(String boardNo);
	
	// 댓글 영역
	public int printOneByNo(Integer boardNo);
	public int viewCount(Integer boardNo);
	public List<Comments> printAllComments(Comments comments);
	public int registerComments(Comments comments);
	public int modifyComments(Comments comments);
	public int removeComments(int commentNo);

	
}
