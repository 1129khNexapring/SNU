package org.ttt.snu.reserveforce.service;

import java.util.List;

import org.ttt.snu.reserveforce.domain.Reserveforce;
import org.ttt.snu.student.domain.Student;

public interface ReserveforceService {

	List<Student> printAll(String sCode);

	int requestMilitary(Reserveforce reserveforce);

	List<Reserveforce> requestMilList(String sCode);

}
