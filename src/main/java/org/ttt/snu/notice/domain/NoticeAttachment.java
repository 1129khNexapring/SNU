package org.ttt.snu.notice.domain;

public class NoticeAttachment {
	private int noticeaNo;
	private String noticeName;
	private String noticeReName;
	private String noticeExtension;
	private String noticePath;
	private int noticeNo;
	
	public NoticeAttachment() {}

	public NoticeAttachment(int noticeaNo, String noticeName, String noticeReName, String noticeExtension,
			String noticePath, int noticeNo) {
		super();
		this.noticeaNo = noticeaNo;
		this.noticeName = noticeName;
		this.noticeReName = noticeReName;
		this.noticeExtension = noticeExtension;
		this.noticePath = noticePath;
		this.noticeNo = noticeNo;
	}

	@Override
	public String toString() {
		return "NoticeAttachment [noticeaNo=" + noticeaNo + ", noticeName=" + noticeName + ", noticeReName="
				+ noticeReName + ", noticeExtension=" + noticeExtension + ", noticePath=" + noticePath + ", noticeNo="
				+ noticeNo + "]";
	}

	public int getNoticeaNo() {
		return noticeaNo;
	}

	public void setNoticeaNo(int noticeaNo) {
		this.noticeaNo = noticeaNo;
	}

	public String getNoticeName() {
		return noticeName;
	}

	public void setNoticeName(String noticeName) {
		this.noticeName = noticeName;
	}

	public String getNoticeReName() {
		return noticeReName;
	}

	public void setNoticeReName(String noticeReName) {
		this.noticeReName = noticeReName;
	}

	public String getNoticeExtension() {
		return noticeExtension;
	}

	public void setNoticeExtension(String noticeExtension) {
		this.noticeExtension = noticeExtension;
	}

	public String getNoticePath() {
		return noticePath;
	}

	public void setNoticePath(String noticePath) {
		this.noticePath = noticePath;
	}

	public int getNoticeNo() {
		return noticeNo;
	}

	public void setNoticeNo(int noticeNo) {
		this.noticeNo = noticeNo;
	}
	
	
}
