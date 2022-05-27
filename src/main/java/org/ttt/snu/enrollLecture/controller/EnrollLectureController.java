package org.ttt.snu.enrollLecture.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.courseCalendar.domain.courseCalendar;
import org.ttt.snu.courseCalendar.service.courseCalendarService;
import org.ttt.snu.enrollLecture.domain.EnrollLecture;
import org.ttt.snu.enrollLecture.service.EnrollLectureService;
import org.ttt.snu.lecture.domain.Lecture;
import org.ttt.snu.student.domain.Student;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;

@Controller
public class EnrollLectureController {
	
	@Autowired
	private EnrollLectureService eService;
	//수강신청 진행하기 위한 학생 정보가 맞는 지 정합성 여부 판단
	@RequestMapping(value="/check/registerCourse.snu", method=RequestMethod.POST)
	public NexacroResult checkAndTransferPage(
			 @ParamVariable(name="sCode") String sCode
			,@ParamVariable(name="sName") String sName
			,@ParamVariable(name="semester") int semester) {
		String title = semester+"학기 수강신청";
		System.out.println(title);
		int nErrorCode = 0;
		String strErrorMsg = "";
		NexacroResult result = new NexacroResult();
		courseCalendar cc = new courseCalendar();
		cc.setTitle(title);
		Student student = new Student();
		student.setsCode(sCode);
		student.setsName(sName);
		int iResult = eService.checkStudent(student);
		if(iResult > 0)
		{	
			List<courseCalendar> ccList = eService.getDay(cc);
			if(!ccList.isEmpty()) {
				nErrorCode = 0;
				strErrorMsg = "데이터정합성여부 통과";
			}else {
				nErrorCode = -1;
				strErrorMsg = "데이터정합성여부 실패";
			}
			result.addDataSet("outCalendar", ccList);
			result.addVariable("ErrorCode", nErrorCode);
			result.addVariable("ErrorMsg", strErrorMsg);
		}else {
			nErrorCode = -1;
			strErrorMsg = "해당학생없음";
			result.addVariable("ErrorCode", nErrorCode);
			result.addVariable("ErrorMsg", strErrorMsg);
		}
		
		return result;
	}
	//수강신청
	@RequestMapping(value="/course/register.snu", method=RequestMethod.POST)
	public NexacroResult courseRegister(
			@ParamDataSet(name="in_courseRegister") DataSet inCourseRegister
			,@ParamVariable(name="session") int session
			,@ParamVariable(name="sCode") String studentCode
			,@ParamVariable(name="year")  int Year) throws Exception
	{		
		int nErrorCode = 0;
		String strErrorMsg = "";
		int i;
		NexacroResult result = new NexacroResult();
		int iResult = 0;
		int uResult = 0;
		for(i=0; i<inCourseRegister.getRowCount(); i++)
		{
			int semester = session;
			int year = Year;
			String sCode = studentCode;
			String lCode = dsGet(inCourseRegister, i, "lCode");
			EnrollLecture Lecture = new EnrollLecture(semester, year, sCode, lCode);
			iResult += eService.registerCourse(Lecture);
		}
		if(iResult < 0) {
			nErrorCode = -1;
			strErrorMsg = "오류가 발생했습니다.";
		}else {
			//수강신청이 완료된 부분, 완료됐으면 해당 수강신청인원을 감소
			for(i=0; i<inCourseRegister.getRowCount(); i++)
			{				
				String lCode = dsGet(inCourseRegister, i, "lCode");
				int lCapacity = Integer.parseInt(dsGet(inCourseRegister, i, "lCapacity"));
				Lecture lecture = new Lecture();
				lecture.setlCapacity(lCapacity-1);
				lecture.setlCode(lCode);
				 uResult += eService.modifyCapacity(lecture);
			}
			nErrorCode = 0;
			strErrorMsg = "수강신청이 완료됐습니다!";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	
	// Dataset value
			public String dsGet(DataSet ds, int rowno, String colid) throws Exception
			{
			    String value;
			    value = ds.getString(rowno, colid);
			    if( value == null )
			        return "";
			    else
			        return value;
			} 
	
}
