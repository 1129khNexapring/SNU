package org.ttt.snu.volunteer.service;

import java.util.List;

import org.ttt.snu.volunteer.domain.Volunteer;

public interface VolunteerService {
	//봉사활동 등록
	int registerVolunteer(Volunteer volunteer);
	//봉사활동 리스트
	List<Volunteer> printAllVolunteer();
	//봉사활동 삭제
	int removeVolunteer(String vName);

}
