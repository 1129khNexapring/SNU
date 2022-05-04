package org.ttt.snu.rehabilitation.service;

import java.util.List;

import org.ttt.snu.rehabilitation.domain.Rehabilitation;

public interface RehabilitationService {

	int requestRehab(Rehabilitation rehab);

	List<Rehabilitation> printRehab(String sCode);


}
