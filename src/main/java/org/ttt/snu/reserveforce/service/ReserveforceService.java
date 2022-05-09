package org.ttt.snu.reserveforce.service;


import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.ttt.snu.reserveforce.domain.Reserveforce;
import org.ttt.snu.student.domain.Student;

public interface ReserveforceService {


	List<Student> printAll(String sCode);

	int requestMilitary(Reserveforce reserveforce);

	List<Reserveforce> requestMilList(String sCode);

	List<Reserveforce> printRfList();

	List<Student> printStudent();

	int modifyStatus(Reserveforce reserveforce);

//	List<HashMap<String, Object>> printStudent();

	


}
