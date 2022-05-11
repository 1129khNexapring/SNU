package org.ttt.snu.requestScholarship.service;

import java.util.List;

import org.ttt.snu.requestScholarship.domain.RequestScholarship;

public interface requestScholarshipService {
	//해당장학금학생리스트
	List<RequestScholarship> printStudentList(String inVar1);



}
