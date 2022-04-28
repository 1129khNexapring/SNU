package org.ttt.snu.lecture.service.logic;

import java.util.HashMap;
import java.util.List;


import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.lecture.domain.Lecture;
import org.ttt.snu.lecture.service.LectureService;
import org.ttt.snu.lecture.store.LectureStore;

@Service
public class LectureServiceImpl implements LectureService{

	@Autowired
	private LectureStore lStore;
	
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<Lecture> printAllLectures() {
		List<Lecture> lList = lStore.selectAllLectures(sqlSession);
		return lList;
	}

	@Override
	public List<Lecture> printAllYLecture(Lecture lecture) {
		List<Lecture> lList = lStore.selectAllYLectures(sqlSession, lecture);
		return lList;
	}
	

}
