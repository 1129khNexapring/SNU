package org.ttt.snu.requestVolunteer.controller;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.loa.domain.Loa;
import org.ttt.snu.requestScholarship.domain.RequestScholarship;
import org.ttt.snu.requestVolunteer.domain.RequestVolunteer;
import org.ttt.snu.requestVolunteer.service.RequestVolunteerService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

@Controller
public class RequestVolunteerController {

	@Autowired
	private RequestVolunteerService rvService;
	
	//봉사활동 신청내역
	@RequestMapping(value="/vol/list.snu", method=RequestMethod.POST)
	public NexacroResult printRequestStudentList(
			@ParamVariable(name="inVar1") String sCode) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<RequestVolunteer> rvList = rvService.printRequestVol(sCode);
		if(!rvList.isEmpty())
		{
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_requestVol", rvList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	
	//봉사활동 신청
		@RequestMapping(value="/vol/request.snu", method=RequestMethod.POST)
		public NexacroResult requestLoa(
				@ParamDataSet(name="in_vol") DataSet inVol) throws Exception {
			int nErrorCode = 0;
			String strErrorMsg = "START";
			NexacroResult result = new NexacroResult();
			int i;
			
			
			int iResult = 0;
			for(i=0; i<inVol.getRowCount(); i++) {
				int rowType = inVol.getRowType(i);
			int vRequestNo = dsGet(inVol, i, "vRequestNo") != ""
											? Integer.parseInt(dsGet(inVol, i, "vRequestNo")) : 0;
			String vRequestStatus = dsGet(inVol, i, "vRequestStatus");
			String vDate = dsGet(inVol, i, "vDate");
			String sCode = dsGet(inVol, i, "sCode");
			String vName = dsGet(inVol, i, "vName");
			RequestVolunteer rv = new RequestVolunteer(vRequestNo, vRequestStatus, vDate, sCode, vName);
				if(rowType == DataSet.ROW_TYPE_INSERTED) {
					iResult += rvService.requestVolunteer(rv);
				}
			}
			if (iResult < 0) {
				nErrorCode = -1;
				strErrorMsg = "FAIL";
			}else {
				nErrorCode = 0;
				strErrorMsg = "SUCC";
			}
			result.addVariable("ErrorCode",nErrorCode);
			result.addVariable("ErrorMsg", strErrorMsg);
			
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
