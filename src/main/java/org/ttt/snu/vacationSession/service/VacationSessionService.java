package org.ttt.snu.vacationSession.service;

import java.util.List;

import org.ttt.snu.vacationSession.domain.VacationSession;

public interface VacationSessionService {

	int registerVs(VacationSession vs);

	List<VacationSession> printAllRequest(String inVar1);


}
