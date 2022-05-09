package org.ttt.snu.notice.domain;

import java.sql.Date;

public class Notice {
	private int noticeNo;
	private String noticeTitle;
	private String noticeContent;
	private String noticeDate;
	private int noticeCount;
	private String aCode;
	private String noticeWriter;
	private String nFileName;
	private String nFileReName;
	private String nFilePath;
	private String nExtension;
	
	public Notice() {}

	public Notice(int noticeNo, String noticeTitle, String noticeContent, String noticeDate, int noticeCount,
			String aCode, String noticeWriter, String nFileName, String nFileReName, String nFilePath,
			String nExtension) {
		super();
		this.noticeNo = noticeNo;
		this.noticeTitle = noticeTitle;
		this.noticeContent = noticeContent;
		this.noticeDate = noticeDate;
		this.noticeCount = noticeCount;
		this.aCode = aCode;
		this.noticeWriter = noticeWriter;
		this.nFileName = nFileName;
		this.nFileReName = nFileReName;
		this.nFilePath = nFilePath;
		this.nExtension = nExtension;
	}

	public int getNoticeNo() {
		return noticeNo;
	}

	public void setNoticeNo(int noticeNo) {
		this.noticeNo = noticeNo;
	}

	public String getNoticeTitle() {
		return noticeTitle;
	}

	public void setNoticeTitle(String noticeTitle) {
		this.noticeTitle = noticeTitle;
	}

	public String getNoticeContent() {
		return noticeContent;
	}

	public void setNoticeContent(String noticeContent) {
		this.noticeContent = noticeContent;
	}

	public String getNoticeDate() {
		return noticeDate;
	}

	public void setNoticeDate(String noticeDate) {
		this.noticeDate = noticeDate;
	}

	public int getNoticeCount() {
		return noticeCount;
	}

	public void setNoticeCount(int noticeCount) {
		this.noticeCount = noticeCount;
	}

	public String getaCode() {
		return aCode;
	}

	public void setaCode(String aCode) {
		this.aCode = aCode;
	}

	public String getNoticeWriter() {
		return noticeWriter;
	}

	public void setNoticeWriter(String noticeWriter) {
		this.noticeWriter = noticeWriter;
	}

	public String getnFileName() {
		return nFileName;
	}

	public void setnFileName(String nFileName) {
		this.nFileName = nFileName;
	}

	public String getnFileReName() {
		return nFileReName;
	}

	public void setnFileReName(String nFileReName) {
		this.nFileReName = nFileReName;
	}

	public String getnFilePath() {
		return nFilePath;
	}

	public void setnFilePath(String nFilePath) {
		this.nFilePath = nFilePath;
	}

	public String getnExtension() {
		return nExtension;
	}

	public void setnExtension(String nExtension) {
		this.nExtension = nExtension;
	}

	@Override
	public String toString() {
		return "Notice [noticeNo=" + noticeNo + ", noticeTitle=" + noticeTitle + ", noticeContent=" + noticeContent
				+ ", noticeDate=" + noticeDate + ", noticeCount=" + noticeCount + ", aCode=" + aCode + ", noticeWriter="
				+ noticeWriter + ", nFileName=" + nFileName + ", nFileReName=" + nFileReName + ", nFilePath="
				+ nFilePath + ", nExtension=" + nExtension + "]";
	}

	
	 
}
