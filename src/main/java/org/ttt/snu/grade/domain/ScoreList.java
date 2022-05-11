package org.ttt.snu.grade.domain;

// 커밋용 주석
public class ScoreList {
	
	private String lName;
	private String pName;
	private int leScore;
	
	public ScoreList() {}

	public ScoreList(String lName, String pName, int leScore) {
		super();
		this.lName = lName;
		this.pName = pName;
		this.leScore = leScore;
	}

	public String getlName() {
		return lName;
	}

	public void setlName(String lName) {
		this.lName = lName;
	}

	public String getpName() {
		return pName;
	}

	public void setpName(String pName) {
		this.pName = pName;
	}

	public int getLeScore() {
		return leScore;
	}

	public void setLeScore(int leScore) {
		this.leScore = leScore;
	}

	@Override
	public String toString() {
		return "ScoreList [lName=" + lName + ", pName=" + pName + ", leScore=" + leScore + "]";
	}
	
	
}
