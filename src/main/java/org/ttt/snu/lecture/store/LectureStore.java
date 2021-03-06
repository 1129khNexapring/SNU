package org.ttt.snu.lecture.store;

import java.util.HashMap;
import java.util.List;


import org.apache.ibatis.session.SqlSession;
import org.ttt.snu.lecture.domain.Lecture;

public interface LectureStore {

	List<Lecture> selectAllLectures(SqlSession sqlSession);

	List<Lecture> selectAllYLectures(SqlSession sqlSession, Lecture lecture);

	List<Lecture> selectAllNLectures(SqlSession sqlSession, Lecture lecture);

	int updateLectureStatus(SqlSession sqlSession, String inVar1);

	List<Lecture> selectMyLecture(SqlSession sqlSession, String sCode);

	List<Lecture> selectLpBypCode(SqlSession sqlSession, String pCode);

	int insertLecture(SqlSession sqlSession, Lecture lecture);


	List<Lecture> selectEnrollLectureList(SqlSession sqlSession);

	List<Lecture> viewLecture(SqlSession sqlSession, String sCode);


	List<Lecture> seasonList(SqlSession sqlSession, String sCode);

	int deleteLecture(SqlSession sqlSession, String lCode);

	int updateLecture(SqlSession sqlSession, Lecture lecture);

	List<Lecture> selectLectureByClick(SqlSession sqlSession,Lecture lecture);



	

}
