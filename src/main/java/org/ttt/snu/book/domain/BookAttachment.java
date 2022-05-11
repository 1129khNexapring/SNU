package org.ttt.snu.book.domain;

public class BookAttachment {
	private int bsaNo;
	private String bsName;
	private String bsRename;
	private String bsExtension;
	private String bsPath;
	private int bsNo;
	
	BookAttachment() {}

	public BookAttachment(int bsaNo, String bsName, String bsRename, String bsExtension, String bsPath, int bsNo) {
		super();
		this.bsaNo = bsaNo;
		this.bsName = bsName;
		this.bsRename = bsRename;
		this.bsExtension = bsExtension;
		this.bsPath = bsPath;
		this.bsNo = bsNo;
	}

	public int getBsaNo() {
		return bsaNo;
	}

	public void setBsaNo(int bsaNo) {
		this.bsaNo = bsaNo;
	}

	public String getBsName() {
		return bsName;
	}

	public void setBsName(String bsName) {
		this.bsName = bsName;
	}

	public String getBsRename() {
		return bsRename;
	}

	public void setBsRename(String bsRename) {
		this.bsRename = bsRename;
	}

	public String getBsExtension() {
		return bsExtension;
	}

	public void setBsExtension(String bsExtension) {
		this.bsExtension = bsExtension;
	}

	public String getBsPath() {
		return bsPath;
	}

	public void setBsPath(String bsPath) {
		this.bsPath = bsPath;
	}

	public int getBsNo() {
		return bsNo;
	}

	public void setBsNo(int bsNo) {
		this.bsNo = bsNo;
	}

	@Override
	public String toString() {
		return "BookAttachment [첨부파일번호=" + bsaNo + ", 파일명=" + bsName + ", 재설정파일명=" + bsRename + ", 파일확장자="
				+ bsExtension + ", 파일경로=" + bsPath + ", 게시글번호=" + bsNo + "]";
	}
	
	
}
