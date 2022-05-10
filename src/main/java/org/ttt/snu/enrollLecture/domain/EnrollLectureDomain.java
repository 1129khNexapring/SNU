package org.ttt.snu.enrollLecture.domain;

public class EnrollLectureDomain {
	
	private String dName;
	private String sName;
	private String lName;
	private String pCode;
	
	public EnrollLectureDomain() {}

	public EnrollLectureDomain(String dName, String sName, String lName, String pCode) {
		super();
		this.dName = dName;
		this.sName = sName;
		this.lName = lName;
		this.pCode = pCode;
	}

	public String getdName() {
		return dName;
	}

	public void setdName(String dName) {
		this.dName = dName;
	}

	public String getsName() {
		return sName;
	}

	public void setsName(String sName) {
		this.sName = sName;
	}

	public String getlName() {
		return lName;
	}

	public void setlName(String lName) {
		this.lName = lName;
	}

	public String getpCode() {
		return pCode;
	}

	public void setpCode(String pCode) {
		this.pCode = pCode;
	}

	@Override
	public String toString() {
		return "EnrollLectureDomain [dName=" + dName + ", sName=" + sName + ", lName=" + lName + ", pCode=" + pCode
				+ "]";
	}

	
	
}
