package org.ttt.snu.scholarship.service;

import java.util.List;

import org.ttt.snu.scholarship.domain.Scholarship;

public interface ScholarshipService {
	
	List<Scholarship> printAllScholarship();

	int registerScholarship(Scholarship scholarship);

	int removeScholarship(String scCode);

	int modifyScholarship(Scholarship scholarship);

}
