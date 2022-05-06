package org.ttt.snu.lectureSchedule.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ttt.snu.lectureSchedule.domain.LectureSchedule;
import org.ttt.snu.lectureSchedule.service.LectureScheduleService;
import org.ttt.snu.lectureSchedule.store.LectureScheduleStore;

@Service
public class LectureScheduleIServiceImpl implements LectureScheduleService{

	@Autowired
	private LectureScheduleStore lsStore;
	
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<LectureSchedule> printLectureScheduleList() {
		List<LectureSchedule> lsList = lsStore.selectLectureScheduleList(sqlSession);
		return lsList;
	}

}
