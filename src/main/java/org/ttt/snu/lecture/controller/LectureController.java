package org.ttt.snu.lecture.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.ttt.snu.board.domain.Board;
import org.ttt.snu.department.domain.Department;
import org.ttt.snu.lecture.domain.Lecture;
import org.ttt.snu.lecture.service.LectureService;

import org.ttt.snu.student.domain.Student;
import org.ttt.snu.student.service.StudentService;
import org.ttt.snu.professor.service.ProfessorService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.Variable;
import com.nexacro17.xapi.data.VariableList;

@Controller
public class LectureController {
	
	@Autowired
	private LectureService lService;
	
	@Autowired
	private ProfessorService pService;
	
	@Autowired
	private StudentService sService;
	
	@RequestMapping(value="/lecture/list.snu", method=RequestMethod.GET)
	public String boardListView(
			Model model) {
		List<Lecture> lList = lService.printAllLectures();
		if(!lList.isEmpty()) {
			model.addAttribute("lList", lList);
			return "lecture/lectureListView";
		}else {
			model.addAttribute("msg", "강의 전체조회 실패");
			return "common/errorPage";
		}
	}
	
	//관리자-승인된 강의계획서 조회
	@RequestMapping(value="/Ylecture/list.snu", method=RequestMethod.POST)
	public NexacroResult printLecture(
			 @ParamVariable(name="in_Var1") String inVar1
			,@ParamVariable(name="in_Var2") String inVar2) {
		Lecture lecture = new Lecture();
		lecture.setdCode(inVar1);
		lecture.setlType(inVar2);	
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Lecture> lList = lService.printAllYLecture(lecture);
		if(!lList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_lecture", lList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	//관리자-미승인 강의계획서조회
	@RequestMapping(value="/Nlecture/list.snu", method=RequestMethod.POST)
	public NexacroResult printNLecture(
			 @ParamVariable(name="in_Var1") String inVar1
			,@ParamVariable(name="in_Var2") String inVar2) {
		Lecture lecture = new Lecture();
		lecture.setdCode(inVar1);
		lecture.setlType(inVar2);
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Lecture> lList = lService.printAllNLecture(lecture);
		if(!lList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_Nlecture", lList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	//관리자 강의계획서 승인
	@RequestMapping(value="/lecture/approve.snu" , method=RequestMethod.POST)
	public NexacroResult approveLecture(
			@ParamVariable(name="in_Var1") String inVar1) {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int uResult = lService.modifyLectureStatus(inVar1);
		if(uResult > 0) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		//result.addDataSet();
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	

	//강의평가조회화면
	@RequestMapping(value="/lecture/score.snu", method=RequestMethod.POST)
	public NexacroResult deptListView(
			@ParamVariable(name="inVar1") String sCode) {
		int    nErrorCode  = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Lecture> lList = lService.printMyLecture(sCode);
		System.out.println(lList);
		if(!lList.isEmpty()) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}
		result.addDataSet("out_lecture", lList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	//학생 - 계절학기조회화면
	@RequestMapping(value="/season/list.snu", method=RequestMethod.POST)
	public NexacroResult seasonList(
			@ParamVariable(name="inVar1") String sCode) {
		int    nErrorCode  = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Lecture> lList = lService.seaonList(sCode);
		System.out.println(lList);
		if(!lList.isEmpty()) {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}
		result.addDataSet("out_lecture", lList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	

	//교수 - 강의 계획서 조회
	@RequestMapping(value="/lecture/planListBypCode.snu", method=RequestMethod.POST)
	public NexacroResult printLecturePlanList(
			@ParamVariable(name="in_var1") String pCode) {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Lecture> lpList = lService.printLpBypCode(pCode);
		if(!lpList.isEmpty()) {
			nErrorCode 	= 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode 	= -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_lecture", lpList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	// 교수 - 강의 계획서 등록
	@RequestMapping(value="/lecture/register.snu", method=RequestMethod.POST)
	public NexacroResult registerBoard(
				  @ParamDataSet  (name="in_lecture") DataSet inLecture
				, @ParamVariable(name="in_var") String pCode
				, HttpServletRequest request) throws Exception{
		NexacroResult result = new NexacroResult();
		int 	nErrorCode  = 0;
		String  strErrorMsg = "START";
		
		int iResult = 0;
		for(int i = 0; i < inLecture.getRowCount(); i++) {
			int    rowType          = inLecture.getRowType(i);
			String lCode      = "L" + dsGet(inLecture, i, "L_CODE");
			String lType    = dsGet(inLecture, i, "L_TYPE");
			String lName       = dsGet(inLecture, i, "L_NAME");
			String lObjective         = dsGet(inLecture, i, "L_OBJECTIVE");
			String lContents           = dsGet(inLecture, i, "L_CONTENTS");
			String textbook   = dsGet(inLecture, i, "TEXTBOOK");
			String credit     = dsGet(inLecture, i, "CREDIT");
			String lYear      = dsGet(inLecture, i, "L_YEAR");
			String lSemester      = dsGet(inLecture, i, "L_SEMESTER");
			String lCapacity      = dsGet(inLecture, i, "L_CAPACITY");
			String dCode      = pService.printProfessorById(pCode).getdCode();
			
		System.out.println(lCode + lType + lName + lObjective + lContents + textbook + credit + lYear + lSemester + lCapacity + dCode);
			
		Lecture lecture = new Lecture(
					lCode
				,	lType
				, 	lName
				,	lObjective
				,	lContents
				,	textbook
				,	0
				,	Integer.parseInt(credit)
				,   Integer.parseInt(lYear)
				,	Integer.parseInt(lSemester)
				,	Integer.parseInt(lCapacity)
				,	"DEFAULT"
				,	pCode
				,	dCode);
		System.out.println(lecture);
		iResult += lService.registerLecture(lecture);
		}
		if(iResult < 0) {
			nErrorCode  = -1;
			strErrorMsg = "FAIL";
		}else {
			nErrorCode  = 0;
			strErrorMsg = "SUCC";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("errorMsg", strErrorMsg);
		return result;
	}
	
	// 강의 계획서 수정 사항 저장
	@RequestMapping(value="/lecture/saveLecture.snu", method=RequestMethod.POST)
	public NexacroResult saveLecture(
			@ParamDataSet(name="in_lecture") DataSet inLecture
			,@ParamVariable(name="in_var") String pCode) throws Exception{
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		
		int dResult = 0;
		for(int i = 0; i < inLecture.getRemovedRowCount(); i++) {
			System.out.println("12341234");
			String lCode = inLecture.getRemovedData(i, "lCode").toString();
			System.out.println(lCode);
			dResult += lService.removeLecture(lCode);
		}
		
		int uResult = 0;
		for(int i = 0; i < inLecture.getRowCount(); i++) {
			int rowType = inLecture.getRowType(i);
			String lCode      = dsGet(inLecture, i, "lCode");
			String lType    = dsGet(inLecture, i, "lType");
			String lName       = dsGet(inLecture, i, "lName");
			String lObjective         = dsGet(inLecture, i, "lObjective");
			String lContents           = dsGet(inLecture, i, "lContents");
			String textbook   = dsGet(inLecture, i, "textbook");
			String lDays	= dsGet(inLecture, i, "lDays");
			String credit     = dsGet(inLecture, i, "credit");
			String lYear      = dsGet(inLecture, i, "lYear");
			String lSemester      = dsGet(inLecture, i, "lSemester");
			String lCapacity      = dsGet(inLecture, i, "lCapacity");
			String lStatus		= dsGet(inLecture, i, "lStatus");
			String dCode      = pService.printProfessorById(pCode).getdCode();
			Lecture lecture = new Lecture(
					lCode
				,	lType
				, 	lName
				,	lObjective
				,	lContents
				,	textbook
				,	Integer.parseInt(lDays)
				,	Integer.parseInt(credit)
				,   Integer.parseInt(lYear)
				,	Integer.parseInt(lSemester)
				,	Integer.parseInt(lCapacity)
				,	lStatus
				,	pCode
				,	dCode);
			System.out.println(lecture);
			uResult += lService.modifyLecture(lecture);
		}
		if(uResult < 0 && dResult < 0) {
			nErrorCode = -1;
			strErrorMsg = "FAIL";
		}else {
			nErrorCode 	= 0;
			strErrorMsg = "SUCCESS";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
		
	}
	// dsGet
	public String dsGet(DataSet ds, int rowNo, String colId) throws Exception {
		String value;
		value = ds.getString(rowNo, colId);
		if(value == null) {
			return "";
		}else {
			return value;
		}
	}

	//학생- 수강가능한 강의 조회
	@RequestMapping(value="/canEnrollLecture/list.snu", method=RequestMethod.POST)
	public NexacroResult getLectureList(
			@ParamVariable(name="in_Var1") String sCode)
	{
		System.out.println(sCode);
		List<Student> sList = sService.studentInfo(sCode);
		System.out.println(sList);
		int 	nErrorCode = 0;
		String  strErrorMsg = "";
		NexacroResult result = new NexacroResult();
		List<Lecture> lList = lService.getLectureList();
		//List<Student> sList = 
		if(!lList.isEmpty())
		{
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("outStudent", sList);
		result.addDataSet("outLecture", lList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	//학생 - 시간표클릭시 강의상세정보 조회
	@RequestMapping(value="lecture/detailbyClick.snu", method=RequestMethod.POST)
	public NexacroResult getLectureDetail(
			@ParamVariable(name="in_Var1") String lName)
	{
		Lecture lecture = new Lecture();
		lecture.setlName(lName);
		int nErrorCode = 0;
		String strErrorMsg = "";
		NexacroResult result = new NexacroResult();
		List<Lecture> List = lService.printLectureBylName(lecture);
		if(!List.isEmpty())
		{
			nErrorCode = 0;
			strErrorMsg = "상세조회 성공";
		}else {
			nErrorCode = -1;
			strErrorMsg = "상세조회 실패";
		}
		result.addDataSet("outInfo", List);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
}
