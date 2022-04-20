package org.ttt.snu.board.domain;

import java.sql.Date;

public class Comments {
	
	private int commentNo;
	private String commentContent;
	private Date commentDate;
	public String pCode;
	public String sCode;
	public int boardNo;
	
	public Comments() {}

	public Comments(int commentNo, String commentContent, Date commentDate, String pCode, String sCode, int boardNo) {
		super();
		this.commentNo = commentNo;
		this.commentContent = commentContent;
		this.commentDate = commentDate;
		this.pCode = pCode;
		this.sCode = sCode;
		this.boardNo = boardNo;
	}

	public int getCommentNo() {
		return commentNo;
	}

	public void setCommentNo(int commentNo) {
		this.commentNo = commentNo;
	}

	public String getCommentContent() {
		return commentContent;
	}

	public void setCommentContent(String commentContent) {
		this.commentContent = commentContent;
	}

	public Date getCommentDate() {
		return commentDate;
	}

	public void setCommentDate(Date commentDate) {
		this.commentDate = commentDate;
	}

	public String getpCode() {
		return pCode;
	}

	public void setpCode(String pCode) {
		this.pCode = pCode;
	}

	public String getsCode() {
		return sCode;
	}

	public void setsCode(String sCode) {
		this.sCode = sCode;
	}

	public int getBoardNo() {
		return boardNo;
	}

	public void setBoardNo(int boardNo) {
		this.boardNo = boardNo;
	}

	@Override
	public String toString() {
		return "Comments [commentNo=" + commentNo + ", commentContent=" + commentContent + ", commentDate="
				+ commentDate + ", pCode=" + pCode + ", sCode=" + sCode + ", boardNo=" + boardNo + "]";
	}
	
	
}
