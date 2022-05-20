package org.ttt.snu.qna.domain;

public class QnaReply {
	private int qnaReplyNo;
	private String qnaReplyContet;
	private String qnaReplyDate;
	private String aCode;
	private int qnaNo;
	
	public QnaReply() {}

	public QnaReply(int qnaReplyNo, String qnaReplyContet, String qnaReplyDate, String aCode, int qnaNo) {
		super();
		this.qnaReplyNo = qnaReplyNo;
		this.qnaReplyContet = qnaReplyContet;
		this.qnaReplyDate = qnaReplyDate;
		this.aCode = aCode;
		this.qnaNo = qnaNo;
	}

	public int getQnaReplyNo() {
		return qnaReplyNo;
	}

	public void setQnaReplyNo(int qnaReplyNo) {
		this.qnaReplyNo = qnaReplyNo;
	}

	public String getQnaReplyContet() {
		return qnaReplyContet;
	}

	public void setQnaReplyContet(String qnaReplyContet) {
		this.qnaReplyContet = qnaReplyContet;
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

	@Override
	public String toString() {
		return "QnaReply [qnaReplyNo=" + qnaReplyNo + ", qnaReplyContet=" + qnaReplyContet + ", qnaReplyDate="
				+ qnaReplyDate + ", aCode=" + aCode + ", qnaNo=" + qnaNo + "]";
	}
	
	
}
