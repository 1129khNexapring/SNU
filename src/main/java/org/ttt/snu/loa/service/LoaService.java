package org.ttt.snu.loa.service;

import java.util.List;

import org.ttt.snu.loa.domain.Loa;
import org.ttt.snu.student.domain.Student;

public interface LoaService {

	int requestLoa(Loa loa);
	//관리자 휴학신청 학생리스트 출력
	List<Loa> printRequestList();
	//관리자 휴학신청 학생리스트와 맵핑할 학생이름 출력
	List<Student> printStudentName();
	//관리자 휴학승인
	int modifyStatus(Loa loa);
	//관리자 휴학반려
	int modifyMsg(Loa loa);
	//학생 휴학신청리스트
	List<Loa> printLoa(String sCode);
	int removeLoa(String lDelete);

}
