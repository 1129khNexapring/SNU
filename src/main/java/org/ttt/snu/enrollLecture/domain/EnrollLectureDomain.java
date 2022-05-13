package org.ttt.snu.enrollLecture.domain;

public class EnrollLectureDomain {
	
	private String dName;
	private String sName;
	private String lName;
	private String pCode;
	private String lDate;
	private String sCode;
	private String lCode;
	private String attendanceStatus;
	
	public EnrollLectureDomain() {}

	public EnrollLectureDomain(String dName, String sName, String lName, String pCode, String lDate, String sCode,
			String lCode, String attendanceStatus) {
		super();
		this.dName = dName;
		this.sName = sName;
		this.lName = lName;
		this.pCode = pCode;
		this.lDate = lDate;
		this.sCode = sCode;
		this.lCode = lCode;
		this.attendanceStatus = attendanceStatus;
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

	public String getlDate() {
		return lDate;
	}

	public void setlDate(String lDate) {
		this.lDate = lDate;
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

	public String getAttendanceStatus() {
		return attendanceStatus;
	}

	public void setAttendanceStatus(String attendanceStatus) {
		this.attendanceStatus = attendanceStatus;
	}

	@Override
	public String toString() {
		return "EnrollLectureDomain [dName=" + dName + ", sName=" + sName + ", lName=" + lName + ", pCode=" + pCode
				+ ", lDate=" + lDate + ", sCode=" + sCode + ", lCode=" + lCode + ", attendanceStatus="
				+ attendanceStatus + "]";
	}
	
}
