package org.ttt.snu.enrollLecture.domain;

public class EnrollLecture {
	private int semester;
	private int year;
	private String sCode;
	private String lCode;
	
	public EnrollLecture() {}

	public EnrollLecture(int semester, int year, String sCode, String lCode) {
		super();
		this.semester = semester;
		this.year = year;
		this.sCode = sCode;
		this.lCode = lCode;
	}

	public int getSemester() {
		return semester;
	}

	public void setSemester(int semester) {
		this.semester = semester;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
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

	@Override
	public String toString() {
		return "EnrollLecture [semester=" + semester + ", year=" + year + ", sCode=" + sCode + ", lCode=" + lCode + "]";
	}
	
	
}
