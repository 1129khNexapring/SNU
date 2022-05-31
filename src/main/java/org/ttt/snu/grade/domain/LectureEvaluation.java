package org.ttt.snu.grade.domain;

public class LectureEvaluation {
	
	private int leNo;
	private int leScore;
	private String sCode;
	private String lCode;
	
	public LectureEvaluation() {}

	public LectureEvaluation(int leNo, int leScore, String sCode, String lCode) {
		super();
		this.leNo = leNo;
		this.leScore = leScore;
		this.sCode = sCode;
		this.lCode = lCode;
	}

	public int getLeNo() {
		return leNo;
	}

	public void setLeNo(int leNo) {
		this.leNo = leNo;
	}

	public int getLeScore() {
		return leScore;
	}

	public void setLeScore(int leScore) {
		this.leScore = leScore;
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
		return "LectureEvaluation [leNo=" + leNo + ", leScore=" + leScore + ", sCode=" + sCode + ", lCode=" + lCode
				+ "]";
	}
	
	
}
