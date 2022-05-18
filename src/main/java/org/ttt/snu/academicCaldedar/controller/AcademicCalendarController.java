package org.ttt.snu.academicCaldedar.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.ttt.snu.academicCaldedar.domain.AcademicCalendar;
import org.ttt.snu.academicCaldedar.service.AcademicCalendarService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;

@Controller
public class AcademicCalendarController {
	
	@Autowired
	private AcademicCalendarService aService;
	

	
	//일정 추가 팝업
		@RequestMapping(value = "/schedule/Popup.snu")
		public String schedulePopup()  {
			return "/academicCalendar/schedulePopup";
		}
	
	//일정추가 버튼클릭 
//	@ResponseBody
//	@RequestMapping(value="/schedule/add.snu", method = RequestMethod.POST)
//	public String addSchedule(
//			@RequestParam("title") String title
//			, @RequestParam("startDate") String startDate
//			, @RequestParam("endDate") String endDate) {
//		//AcademicCalendar calendar = new AcademicCalendar();
//		AcademicCalendar academicCalendar = new AcademicCalendar();
//		academicCalendar.setTitle(title);
//		academicCalendar.setStartDate(Date.valueOf(startDate));
//		academicCalendar.setEndDate(Date.valueOf(endDate));
//		aService.addSchedule(academicCalendar);
//		
//		return null;
//	}
	
		
		//fullcalendar에서 일정 출력
	@RequestMapping(value = "/schedule.snu", method=RequestMethod.GET)
	public String schdule(Model model) {
		List<AcademicCalendar> aList = aService.showSchedule();
		if(!aList.isEmpty()) {
			model.addAttribute("aList", aList);
			return "/academicCalendar/schedule";
		}else {
			model.addAttribute("msg", "조회 실패");
			return "common/errorPage"; 
			
		}
		
	}
	
	//넥사에서 데이터 출력
	@RequestMapping(value="/schedule/list.snu", method=RequestMethod.GET)
	public NexacroResult selectSchedule()
	{
		int nErrorCode = 0;
		String strErrorMsg="";
		NexacroResult result = new NexacroResult();
		List<AcademicCalendar> aList = aService.printAllSchedule();
		
		if(!aList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "조회 성공";
			
		}else {
			nErrorCode = -1;
			strErrorMsg = "조회 실패";		
			
		}
		result.addDataSet("out_schedule", aList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	
	}
	
	//넥사에서 일정 추가
	@RequestMapping(value="/schedule/register.snu", method=RequestMethod.POST)
	public NexacroResult registerSchedule(@ParamVariable(name="title") String title
			,@ParamVariable(name="startDate") String startDate
			,@ParamVariable(name="endDate") String endDate) 
	{
		System.out.println(title);
		int nErrorCode = 0;
		String strErrorMsg= "";
		NexacroResult result = new NexacroResult();
		AcademicCalendar calendar = new AcademicCalendar();
		calendar.setTitle(title);
		calendar.setStartDate(startDate);
		calendar.setEndDate(endDate);
		
		int aResult = aService.registerSchedule(calendar);
		if(aResult > 0) {
			nErrorCode = 0;
			strErrorMsg = "등록 완료";
		} else {
			nErrorCode = -1;
			strErrorMsg = "등록 실패";
		
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	//넥사에서 일정 수정, 삭제
	@RequestMapping(value="/schedule/modify.snu", method=RequestMethod.POST)
	public NexacroResult modifySchedule(
			 @ParamDataSet(name="in_schedule") DataSet inSchedule
			,@ParamVariable(name="in_var1") String invar1) throws Exception {
		
			System.out.println(invar1);
			int 	nErrorCode = 0;
				String  strErrorMsg = "START";
				NexacroResult result = new NexacroResult();
						
						//삭제
						int i;
						for(i = 0; i < inSchedule.getRemovedRowCount(); i++) {
							String scheduleAcNo = inSchedule.getRemovedData(i, "acNo").toString();
							aService.removeSchedule(scheduleAcNo);
							
						}
						
						//일정 수정
						int uResult = 0;
						for(i = 0; i < inSchedule.getRowCount(); i++) {
							int rowType = inSchedule.getRowType(i);
							String acNo   = dsGet(inSchedule, i, "acNo");
							String aCode = dsGet(inSchedule, i, "aCode");
							String title  = dsGet(inSchedule, i, "title");
							String startDate    = dsGet(inSchedule, i, "startDate");
							String endDate    = dsGet(inSchedule, i, "endDate");
							
							AcademicCalendar calendar = new AcademicCalendar (
									Integer.parseInt(acNo)
									, aCode
									, title
									, startDate
									, endDate);
								System.out.println(startDate);
								System.out.println(endDate);
							
							   if( rowType == DataSet.ROW_TYPE_UPDATED) {
			 					String sOrgAcNo = inSchedule.getSavedData(i, "acNo").toString();
			 					calendar.setAcNo(Integer.parseInt(sOrgAcNo));
			 					uResult += aService.modifySchedule(calendar);
//								
							}

						
						}
						if(uResult < 0 ) {
							
							nErrorCode 	= -1;
							strErrorMsg = "FAIL";
						}else {
							
							nErrorCode 	= 0;
							strErrorMsg = "SUCC";
						}
				result.addVariable("ErrorCode", nErrorCode);
				result.addVariable("ErrorMsg", strErrorMsg);
				result.addVariable("out_var", invar1);
				return result;
			}
			public String  dsGet(DataSet ds, int rowno, String colid) throws Exception
{
    String value;
    value = ds.getString(rowno, colid);
    if( value == null )
        return "";
    else
        return value;
} 

}
	
