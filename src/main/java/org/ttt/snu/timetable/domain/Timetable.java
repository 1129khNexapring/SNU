package org.ttt.snu.timetable.domain;

public class Timetable {
	private int semester;
	private int year;
	private String lsDay;
	private String lsDay1;
	private String lsRoom;
	private String lName;
	
	
	public Timetable() {}


	public Timetable(int semester, int year, String lsDay, String lsDay1, String lsRoom, String lName) {
		super();
		this.semester = semester;
		this.year = year;
		this.lsDay = lsDay;
		this.lsDay1 = lsDay1;
		this.lsRoom = lsRoom;
		this.lName = lName;
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


	public String getLsDay() {
		return lsDay;
	}


	public void setLsDay(String lsDay) {
		this.lsDay = lsDay;
	}


	public String getLsDay1() {
		return lsDay1;
	}


	public void setLsDay1(String lsDay1) {
		this.lsDay1 = lsDay1;
	}


	public String getLsRoom() {
		return lsRoom;
	}


	public void setLsRoom(String lsRoom) {
		this.lsRoom = lsRoom;
	}


	public String getlName() {
		return lName;
	}


	public void setlName(String lName) {
		this.lName = lName;
	}


	@Override
	public String toString() {
		return "Timetable [semester=" + semester + ", year=" + year + ", lsDay=" + lsDay + ", lsDay1=" + lsDay1
				+ ", lsRoom=" + lsRoom + ", lName=" + lName + "]";
	}

	
	
	
}
