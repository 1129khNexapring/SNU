package org.ttt.snu.admin.controller;

import java.sql.Date;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.ttt.snu.admin.domain.Admin;
import org.ttt.snu.admin.service.AdminService;
import org.ttt.snu.professor.domain.Professor;
import org.ttt.snu.student.domain.Student;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

@Controller
public class AdminController {
	
	@Autowired
	private AdminService aService;
	
	//관리자 로그인 체크
	@ResponseBody
	@RequestMapping(value="/login/admincheck.snu", method=RequestMethod.POST)
	public String adminLogin(HttpServletRequest request
							,@ModelAttribute Admin admin
							,@RequestParam("admin_id") String aCode
							,@RequestParam("admin_pwd") String aPassword) {		
		admin.setaCode(aCode);
		admin.setaPassword(aPassword);
		Admin loginUser = aService.checklogin(admin);
		if(loginUser != null) {
			Gson gson = new GsonBuilder().create();
			return gson.toJson(loginUser);
		}else {
			return "fail";
		}
		
		
	}
	// 관리자 학생 리스트 조회
	@RequestMapping(value="/student/list.snu", method=RequestMethod.GET)
	public NexacroResult printStudent() {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Student> studentList = aService.printAllStudent();
		if(!studentList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_Info", studentList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	// 관리자 학생 삭제, 등록
	@RequestMapping(value="/student/changeInfo.snu", method=RequestMethod.POST)
	public NexacroResult changeStudentInfo(
			@ParamDataSet(name="in_student") DataSet inStudent
			,@ParamVariable(name="in_var1") String inVar1) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int i;
		
		//DELETE
		for(i=0; i< inStudent.getRemovedRowCount(); i++) {
			String sCode = inStudent.getRemovedData(i, "sCode").toString();
			aService.removeStudent(sCode);
		}
		
		//INSERT, UPDATE
		int iResult = 0;
		int uResult = 0;
		for(i = 0; i<inStudent.getRowCount(); i++) {
			int  rowType = inStudent.getRowType(i);
			String sCode = dsGet(inStudent, i, "sCode");
			String sName = dsGet(inStudent, i, "sName");
			String sRrn  = dsGet(inStudent, i, "sRrn");
			String sPassword = "1111";
			String sAddress = dsGet(inStudent, i, "sAddress");
			String sEmail = dsGet(inStudent, i, "sEmail");
			String sGender = dsGet(inStudent, i, "sGender");
			String sPhone = dsGet(inStudent, i, "sPhone");
			String sAddmission = dsGet(inStudent, i, "sAddmission");
			String dCode = dsGet(inStudent, i, "dCode");
			String absenceYN = "N";
			String transferYN = "N";
			Student student = new Student(sCode, sName, sRrn, sPassword, sAddress, sEmail, sGender, sPhone, sAddmission, absenceYN, transferYN, dCode);
			if(rowType == DataSet.ROW_TYPE_INSERTED) {
				iResult += aService.registerStudent(student);
			}
		}
			if(iResult < 0) {
				nErrorCode = -1;
				strErrorMsg = "Fail";
			}else {
				nErrorCode = 0;
				strErrorMsg = "SUCC";
			}
			result.addVariable("ErrorCode", nErrorCode);
			result.addVariable("ErrorMsg", strErrorMsg);
			result.addVariable("out_var", inVar1);
			return result;
	}
		
	// 관리자 교수 리스트 조회
	@RequestMapping(value="/professor/list.snu", method=RequestMethod.GET)
	public NexacroResult printProfessor() {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Professor> pList = aService.printAllProfessor(); 
		if(!pList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_pInfo", pList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	
	@RequestMapping(value="/professor/changeInfo.snu", method=RequestMethod.POST)
	public NexacroResult changeProfessorInfo(
					 @ParamDataSet(name="in_professor") DataSet inProfessor
					,@ParamVariable(name="in_var1") String inVar1) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int i;
		
		//DELETE
		for(i=0; i<inProfessor.getRemovedRowCount(); i++) {
			String pCode = inProfessor.getRemovedData(i, "pCode").toString();
			aService.removeProfessor(pCode);
		}
		//INSERT
		//RowType에 따라서 INSERT OR UPDATE
		int iResult = 0;
		for(i=0; i<inProfessor.getRowCount(); i++) {
			int rowType = inProfessor.getRowType(i);
			String pCode = 		dsGet(inProfessor, i, "pCode");
			String pName = 		dsGet(inProfessor, i, "pName");
			String pPassword = "1111";
			String pRrn = 		dsGet(inProfessor, i, "pRrn");
			String pAddress = 	dsGet(inProfessor, i, "pAddress");
			String pEmail = 	dsGet(inProfessor, i, "pEmail");
			String pGender = 	dsGet(inProfessor, i, "pGender");
			String pPhone = 	dsGet(inProfessor, i, "pPhone");
			String pAddmission= dsGet(inProfessor, i, "pAddmission");
			String advisorYN = "N";
			String dCode = 		dsGet(inProfessor, i, "dCode");
			Professor professor = new Professor(pCode, pName, pPassword, pRrn, pAddress, pEmail, pGender, pPhone, pAddmission, advisorYN, dCode);
			if(rowType == DataSet.ROW_TYPE_INSERTED) {
				iResult += aService.registerProfessor(professor);
			}
		}
		if(iResult < 0) {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}else {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		result.addVariable("out_var", inVar1);
		return result;
	}
		
		
	
	// ResultSet ==> Dataset
		public DataSet RsToDs(ResultSet rs, String dsID) throws Exception
		{
			int i;
			int iColCnt;
			String sColName;
			String sColType;;
			int ColType = 0; 
			int ColSize = 255; 
			
			DataSet ds = new DataSet(dsID);
			ResultSetMetaData rsmd = rs.getMetaData();

			iColCnt = rsmd.getColumnCount();
			for( i = 1 ; i <= iColCnt ; i++ )
			{
				sColName = rsmd.getColumnName(i).toUpperCase();		
				sColType = rsmd.getColumnTypeName(i);

				ColType = DataTypes.STRING;
				if(sColType.equals("INTEGER"))	ColType = DataTypes.INT;
				if(sColType.equals("DECIMAL"))	ColType = DataTypes.DECIMAL;
				
				ds.addColumn(sColName, ColType, ColSize);		
			}
			while(rs.next())
			{
				int row = ds.newRow();
				for( i = 1 ; i <= iColCnt ; i++ )
				{
					sColName = rsmd.getColumnName(i).toUpperCase();
					ds.set(row, sColName, rsGet(rs, sColName));
				}
			}

		  return ds;
		}
		// ResultSet value
		public String rsGet(ResultSet rs, String id) throws Exception
		{
			if( rs.getString(id) == null ){
				return "";
			} 
			else {
				return rs.getString(id);
			}
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
