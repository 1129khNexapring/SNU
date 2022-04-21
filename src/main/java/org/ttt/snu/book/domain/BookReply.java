package org.ttt.snu.book.domain;

import java.sql.Date;

public class BookReply {
	private int bsReplyNo;
	private String bsReplyContent;
	private Date bsrCreateDate;
	private Date bsrUpdateDate;
	private int bsNo;
	
	BookReply() {}

	public BookReply(int bsReplyNo, String bsReplyContent, Date bsrCreateDate, Date bsrUpdateDate, int bsNo) {
		super();
		this.bsReplyNo = bsReplyNo;
		this.bsReplyContent = bsReplyContent;
		this.bsrCreateDate = bsrCreateDate;
		this.bsrUpdateDate = bsrUpdateDate;
		this.bsNo = bsNo;
	}

	public int getBsReplyNo() {
		return bsReplyNo;
	}

	public void setBsReplyNo(int bsReplyNo) {
		this.bsReplyNo = bsReplyNo;
	}

	public String getBsReplyContent() {
		return bsReplyContent;
	}

	public void setBsReplyContent(String bsReplyContent) {
		this.bsReplyContent = bsReplyContent;
	}

	public Date getBsrCreateDate() {
		return bsrCreateDate;
	}

	public void setBsrCreateDate(Date bsrCreateDate) {
		this.bsrCreateDate = bsrCreateDate;
	}

	public Date getBsrUpdateDate() {
		return bsrUpdateDate;
	}

	public void setBsrUpdateDate(Date bsrUpdateDate) {
		this.bsrUpdateDate = bsrUpdateDate;
	}

	public int getBsNo() {
		return bsNo;
	}

	public void setBsNo(int bsNo) {
		this.bsNo = bsNo;
	}

	@Override
	public String toString() {
		return "BookReply [댓글번호=" + bsReplyNo + ", 댓글내용=" + bsReplyContent + ", 작성날짜="
				+ bsrCreateDate + ", 수정날짜=" + bsrUpdateDate + ", 게시글번호=" + bsNo + "]";
	}
	
	
}
