package org.ttt.snu.grade.domain;

public class Score {
	
	private String gCode;
	private int gScore;
	
	public Score() {}

	public Score(String gCode, int gScore) {
		super();
		this.gCode = gCode;
		this.gScore = gScore;
	}

	public String getgCode() {
		return gCode;
	}

	public void setgCode(String gCode) {
		this.gCode = gCode;
	}

	public int getgScore() {
		return gScore;
	}

	public void setgScore(int gScore) {
		this.gScore = gScore;
	}

	@Override
	public String toString() {
		return "Score [gCode=" + gCode + ", gScore=" + gScore + "]";
	}
	
	
}
