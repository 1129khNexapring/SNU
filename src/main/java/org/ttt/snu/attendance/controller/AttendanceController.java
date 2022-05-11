package org.ttt.snu.attendance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.attendance.domain.Attendance;
import org.ttt.snu.attendance.service.logic.AttendanceServiceImpl;
import org.ttt.snu.enrollLecture.domain.EnrollLecture;
import org.ttt.snu.lecture.domain.Lecture;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;

@Controller
public class AttendanceController {
	
	@Autowired
	private AttendanceServiceImpl aService;
	
	// 출결관리 교과목명 조회
	@RequestMapping(value="/attendance/list.snu", method=RequestMethod.GET)
	public NexacroResult lectureListView() {
		int    nErrorCode  = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Lecture> lectureList = aService.printLecture();
		if(!lectureList.isEmpty()) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC"; 
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}
		result.addDataSet("out_lectureList", lectureList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	// 출석부 조회
	@RequestMapping(value="/attendance/enLectureList.snu", method=RequestMethod.POST)
	public NexacroResult enLectureListView(
				@ParamVariable(name="in_var1") String lCode) {
		int    nErrorCode  = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<EnrollLecture> enLectureList = aService.printEnLectureList(lCode);
		if(!enLectureList.isEmpty()) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC"; 
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}
		result.addDataSet("out_enLectureList", enLectureList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	// 출석부 저장
	@RequestMapping(value="/attendance/save.snu", method=RequestMethod.POST)
	public NexacroResult attendanceSave(
				// @ParamDataSet(name="in_attendance") DataSet inAttendance
				  @ParamVariable(name="inVar2") String sCode
				, @ParamVariable(name="inVar3") String lCode
				, @ParamVariable(name="inVar4") String attendanceStatus) throws Exception {
		NexacroResult result = new NexacroResult();
		int 	nErrorCode  = 0;
		String  strErrorMsg = "START";
		Attendance attendance = new Attendance();
		attendance.setsCode(sCode);
		attendance.setlCode(lCode);
		attendance.setAttendanceStatus(attendanceStatus);
		System.out.println(lCode);
		System.out.println(sCode);
		System.out.println(attendanceStatus);
		int iResult = aService.registerAttendance(attendance);
		if(iResult < 0) {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}else {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("errorMsg", strErrorMsg);
		// result.addVariable("out_var", inVar1);
		return result;
	}
			
	// Dataset value
	public String dsGet(DataSet ds, int rowNo, String colId) throws Exception {
		String value;
		value = ds.getString(rowNo, colId);
		if(value == null) {
			return "";
		}else {
			return value;
		}
	}
	
}
