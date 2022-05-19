package org.ttt.snu.professor.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.ttt.snu.department.domain.Department;
import org.ttt.snu.department.service.DepartmentService;
import org.ttt.snu.lecture.domain.Lecture;
import org.ttt.snu.professor.domain.Professor;
import org.ttt.snu.professor.service.ProfessorService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;

@Controller
public class ProfessorController {

	@Autowired
	private ProfessorService pService;

	// 로그인 - 교수 여부 확인
	@ResponseBody
	@RequestMapping(value = "/login/professorcheck.snu", method = RequestMethod.POST)
	public String professorLoginCheck(Model model, HttpServletRequest request, @RequestParam("professor_id") String id,
			@RequestParam("professor_pwd") String pwd) {
		Professor p = pService.printProfessorById(id);
		if (p.getpPassword().equals(pwd)) {
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
			return gson.toJson(p);
		} else {
			model.addAttribute("msg", "강의 전체조회 실패");
			return null;
		}
	}

	// 교수 - 학과 소속 교수 리스트 조회
	@RequestMapping(value = "/prof/deptList.snu", method = RequestMethod.POST)
	public NexacroResult professorDeptList(@ParamVariable(name = "in_var1") String pCode) {

		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		Professor p = pService.printProfessorById(pCode);
		String dCode = p.getdCode();
		List<Professor> pList = pService.printProfessorListBydCode(dCode);
		if (!pList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		} else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_prof", pList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;

	}

	// 교수 - 본인 정보 조회
	@RequestMapping(value = "/professor/profInfo.snu", method = RequestMethod.POST)
	public NexacroResult printProfInfo(@ParamVariable(name = "in_var1") String pCode) {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		Professor prof = pService.printProfessorById(pCode);
		List<Professor> pList = new ArrayList<Professor>();
		pList.add(prof);
		if (!pList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		} else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_prof", pList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}

	// 교수 - 본인 정보 수정
	@RequestMapping(value = "/professor/profModify.snu", method = RequestMethod.POST)
	public NexacroResult modifyProfInfo(@ParamDataSet(name = "in_prof") DataSet inProf) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();

		int uResult = 0;
		for (int i = 0; i < inProf.getRowCount(); i++) {
			int rowType = inProf.getRowType(i);
			String pCode = dsGet(inProf, i, "pCode");
			String pName = dsGet(inProf, i, "pName");
			String pPassword = dsGet(inProf, i, "pPassword");
			String pRrn = dsGet(inProf, i, "pRrn");
			String pAddress = dsGet(inProf, i, "pAddress");
			String pEmail = dsGet(inProf, i, "pEmail");
			String pGender = dsGet(inProf, i, "pGender");
			String pPhone = dsGet(inProf, i, "pPhone");
			String pAddmission = dsGet(inProf, i, "pAddmission");
			String advisorYN = dsGet(inProf, i, "advisorYN");
			String dCode = dsGet(inProf, i, "dCode");
			Professor prof = new Professor(pCode, pName, pPassword, pRrn, pAddress, pEmail, pGender,
					pPhone, pAddmission, advisorYN,
					dCode);
			uResult += pService.modifyProf(prof);
		}
		if (uResult < 0) {
			nErrorCode = -1;
			strErrorMsg = "FAIL";
		} else {
			nErrorCode = 0;
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
		if (value == null) {
			return "";
		} else {
			return value;
		}
	}
}