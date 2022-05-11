package org.ttt.snu.rehabilitation.service;

import java.util.List;

import org.ttt.snu.rehabilitation.domain.Rehabilitation;
import org.ttt.snu.student.domain.Student;

public interface RehabilitationService {

	int requestRehab(Rehabilitation rehab);


	List<Rehabilitation> printRehab(String sCode);

	List<Student> printStudentName();

	List<Rehabilitation> printReList();

	int modifyStatus(Rehabilitation rehab);

	int modifyMsg(Rehabilitation rehab);

}
