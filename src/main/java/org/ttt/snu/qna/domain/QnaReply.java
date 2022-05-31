package org.ttt.snu.qna.domain;

public class QnaReply {
	private int qnaReplyNo;
	private String qnaReplyContent;
	private String qnaReplyDate;
	private String aCode;
	private int qnaNo;
	
	public QnaReply() {}

	
		
	@Override
	public String toString() {
		return "QnaReply [qnaReplyNo=" + qnaReplyNo + ", qnaReplyContent=" + qnaReplyContent + ", qnaReplyDate="
				+ qnaReplyDate + ", aCode=" + aCode + ", qnaNo=" + qnaNo + "]";
	}

	

	public int getQnaReplyNo() {
		return qnaReplyNo;
	}



	public void setQnaReplyNo(int qnaReplyNo) {
		this.qnaReplyNo = qnaReplyNo;
	}



	public String getQnaReplyContent() {
		return qnaReplyContent;
	}



	public void setQnaReplyContent(String qnaReplyContent) {
		this.qnaReplyContent = qnaReplyContent;
	}



	public String getQnaReplyDate() {
		return qnaReplyDate;
	}



	public void setQnaReplyDate(String qnaReplyDate) {
		this.qnaReplyDate = qnaReplyDate;
	}



	public String getaCode() {
		return aCode;
	}



	public void setaCode(String aCode) {
		this.aCode = aCode;
	}



	public int getQnaNo() {
		return qnaNo;
	}



	public void setQnaNo(int qnaNo) {
		this.qnaNo = qnaNo;
	}



	public QnaReply(int qnaReplyNo, String qnaReplyContent, String qnaReplyDate, String aCode, int qnaNo) {
		super();
		this.qnaReplyNo = qnaReplyNo;
		this.qnaReplyContent = qnaReplyContent;
		this.qnaReplyDate = qnaReplyDate;
		this.aCode = aCode;
		this.qnaNo = qnaNo;
	}

	
	
}
