package org.ttt.snu.requestVolunteer.service;

import java.util.List;

import org.ttt.snu.requestVolunteer.domain.RequestVolunteer;

public interface RequestVolunteerService {

	int requestVolunteer(RequestVolunteer rv);

	List<RequestVolunteer> printRequestVol(String sCode);

}
