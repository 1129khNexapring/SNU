package org.ttt.snu.loa.service;

import java.util.List;

import org.ttt.snu.loa.domain.Loa;

public interface LoaService {

	int requestLoa(Loa loa);
	//관리자 휴학신청 학생리스트 출력
	List<Loa> printRequestList();

}
