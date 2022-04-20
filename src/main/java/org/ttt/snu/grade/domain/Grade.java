package org.ttt.snu.grade.domain;

public class Grade {
	
	private String sCode;
	private String lCode;
	private String gCode;
	
	public Grade() {}

	public Grade(String sCode, String lCode, String gCode) {
		super();
		this.sCode = sCode;
		this.lCode = lCode;
		this.gCode = gCode;
	}

	public String getsCode() {
		return sCode;
	}

	public void setsCode(String sCode) {
		this.sCode = sCode;
	}

	public String getlCode() {
		return lCode;
	}

	public void setlCode(String lCode) {
		this.lCode = lCode;
	}

	public String getgCode() {
		return gCode;
	}

	public void setgCode(String gCode) {
		this.gCode = gCode;
	}

	@Override
	public String toString() {
		return "Grade [sCode=" + sCode + ", lCode=" + lCode + ", gCode=" + gCode + "]";
	}
	
	
}
