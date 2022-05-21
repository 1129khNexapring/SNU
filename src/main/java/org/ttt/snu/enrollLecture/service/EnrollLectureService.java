package org.ttt.snu.enrollLecture.service;

import java.util.List;

import org.ttt.snu.courseCalendar.domain.courseCalendar;
import org.ttt.snu.enrollLecture.domain.EnrollLecture;
import org.ttt.snu.student.domain.Student;

public interface EnrollLectureService {

	int checkStudent(Student student);
	
	List<courseCalendar> getDay(courseCalendar cc);

	int registerCourse(EnrollLecture lecture);

}
