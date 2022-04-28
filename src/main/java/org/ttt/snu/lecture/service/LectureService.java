package org.ttt.snu.lecture.service;

import java.util.HashMap;
import java.util.List;


import org.ttt.snu.lecture.domain.Lecture;

public interface LectureService {
	
	public List<Lecture> printAllLectures();

	public List<Lecture> printAllYLecture(Lecture lecture);

	public List<Lecture> printAllNLecture(Lecture lecture);
	
	

}
