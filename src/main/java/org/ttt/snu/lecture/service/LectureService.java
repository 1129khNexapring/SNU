package org.ttt.snu.lecture.service;

import java.util.List;

import org.ttt.snu.lecture.domain.Lecture;

public interface LectureService {
	
	public List<Lecture> printAllLectures();
	//관리자 승인계획서
	public List<Lecture> printYLecture();

}
