package org.ttt.snu.book.domain;


public class Book {
	private int bsNo;
	private String bsTitle;
	private String bsContent;
	private String bsDate;
	private String bsStatus;
	private int bsCount;
	private String sCode;
	
	public Book() {}

	public Book(int bsNo, String bsTitle, String bsContent, String bsDate, String bsStatus, int bsCount, String sCode) {
		super();
		this.bsNo = bsNo;
		this.bsTitle = bsTitle;
		this.bsContent = bsContent;
		this.bsDate = bsDate;
		this.bsStatus = bsStatus;
		this.bsCount = bsCount;
		this.sCode = sCode;
	}

	public int getBsNo() {
		return bsNo;
	}

	public void setBsNo(int bsNo) {
		this.bsNo = bsNo;
	}

	public String getBsTitle() {
		return bsTitle;
	}

	public void setBsTitle(String bsTitle) {
		this.bsTitle = bsTitle;
	}

	public String getBsContent() {
		return bsContent;
	}

	public void setBsContent(String bsContent) {
		this.bsContent = bsContent;
	}

	public String getBsDate() {
		return bsDate;
	}

	public void setBsDate(String bsDate) {
		this.bsDate = bsDate;
	}

	public String getBsStatus() {
		return bsStatus;
	}

	public void setBsStatus(String bsStatus) {
		this.bsStatus = bsStatus;
	}

	public int getBsCount() {
		return bsCount;
	}

	public void setBsCount(int bsCount) {
		this.bsCount = bsCount;
	}

	public String getsCode() {
		return sCode;
	}

	public void setsCode(String sCode) {
		this.sCode = sCode;
	}

	@Override
	public String toString() {
		return "Book [책코드=" + bsNo + ", 책제목=" + bsTitle + ", 내용=" + bsContent + ", 등록일=" + bsDate
				+ ", 게시글상태=" + bsStatus + ", 조회수=" + bsCount + ", 학번=" + sCode + "]";
	}
	
	
}
