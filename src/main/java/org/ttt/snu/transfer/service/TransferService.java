package org.ttt.snu.transfer.service;

import java.util.List;

import org.ttt.snu.department.domain.Department;
import org.ttt.snu.student.domain.Student;
import org.ttt.snu.transfer.domain.Transfer;

public interface TransferService {

	List<Student> printAll(String sCode);

	List<Department> printAllDept();

	int requestTransfer(Transfer transfer);


}
