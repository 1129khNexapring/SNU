package org.ttt.snu.qna.domain;

public class Qna {
	private int qnaNo;
	private String qnaTitle;
	private String qnaContent;
	private String qnaDate;
	private String qnaStatus;
	private int qnaCount;
	private String sCode;
	
	public Qna() {}

	public Qna(int qnaNo, String qnaTitle, String qnaContent, String qnaDate, String qnaStatus, int qnaCount,
			String sCode) {
		super();
		this.qnaNo = qnaNo;
		this.qnaTitle = qnaTitle;
		this.qnaContent = qnaContent;
		this.qnaDate = qnaDate;
		this.qnaStatus = qnaStatus;
		this.qnaCount = qnaCount;
		this.sCode = sCode;
	}

	public int getQnaNo() {
		return qnaNo;
	}

	public void setQnaNo(int qnaNo) {
		this.qnaNo = qnaNo;
	}

	public String getQnaTitle() {
		return qnaTitle;
	}

	public void setQnaTitle(String qnaTitle) {
		this.qnaTitle = qnaTitle;
	}

	public String getQnaContent() {
		return qnaContent;
	}

	public void setQnaContent(String qnaContent) {
		this.qnaContent = qnaContent;
	}

	public String getQnaDate() {
		return qnaDate;
	}

	public void setQnaDate(String qnaDate) {
		this.qnaDate = qnaDate;
	}

	public String getQnaStatus() {
		return qnaStatus;
	}

	public void setQnaStatus(String qnaStatus) {
		this.qnaStatus = qnaStatus;
	}

	public int getQnaCount() {
		return qnaCount;
	}

	public void setQnaCount(int qnaCount) {
		this.qnaCount = qnaCount;
	}

	public String getsCode() {
		return sCode;
	}

	public void setsCode(String sCode) {
		this.sCode = sCode;
	}

	@Override
	public String toString() {
		return "Qna [qnaNo=" + qnaNo + ", qnaTitle=" + qnaTitle + ", qnaContent=" + qnaContent + ", qnaDate=" + qnaDate
				+ ", qnaStatus=" + qnaStatus + ", qnaCount=" + qnaCount + ", sCode=" + sCode + "]";
	}
	
	
}
