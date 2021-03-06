package org.ttt.snu.professor.service;

import java.util.List;
import org.ttt.snu.professor.domain.Professor;

public interface ProfessorService {

	Professor printProfessorById(String id);

	List<Professor> printProfessorListBydCode(String dCode);

	int modifyProf(Professor prof);


}
