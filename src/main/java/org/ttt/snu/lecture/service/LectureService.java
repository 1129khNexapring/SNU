package org.ttt.snu.lecture.service;

import java.util.HashMap;
import java.util.List;


import org.ttt.snu.lecture.domain.Lecture;

public interface LectureService {
	
	public List<Lecture> printAllLectures();

	public List<Lecture> printAllYLecture(Lecture lecture);

	public List<Lecture> printAllNLecture(Lecture lecture);

	public int modifyLectureStatus(String inVar1);

	public List<Lecture> printMyLecture(String sCode);

	public List<Lecture> printLpBypCode(String pCode);

	public int registerLecture(Lecture lecture);

	public List<Lecture> viewList(String sCode);


	public List<Lecture> seaonList(String sCode);

	

	public int removeLecture(String lCode);

	public int modifyLecture(Lecture lecture);


	

}
