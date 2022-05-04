package org.ttt.snu.volunteer.controller;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.ttt.snu.volunteer.domain.Volunteer;
import org.ttt.snu.volunteer.service.VolunteerService;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

@Controller
public class VolunteerController {
	
	@Autowired
	private VolunteerService vService;
	
	@RequestMapping(value="/volunteer/changeInfo.snu", method=RequestMethod.POST)
	public NexacroResult changeVolunteerInfo(
			@ParamDataSet(name="in_volunteer") DataSet inVolunteer) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int i;
		//DELETE
		for(i=0; i<inVolunteer.getRemovedRowCount(); i++) {
			String vCode = inVolunteer.getRemovedData(i, "vCode").toString();
			vService.removeVolunteer(vCode);
		}
		
		//INSERT, UPDATE
		int iResult=0;
		int uResult=0;
		//int uResult = 0;
		for(i=0; i<inVolunteer.getRowCount(); i++) {
			int rowType = inVolunteer.getRowType(i);
			String vCode = 		dsGet(inVolunteer, i, "vCode");
			String vName = 		dsGet(inVolunteer, i, "vName");
			String vArea = 		dsGet(inVolunteer, i, "vArea");
			String vHour = 		dsGet(inVolunteer, i, "vHour");
			String vStart= 		dsGet(inVolunteer, i, "vStart");
			String vEnd  = 		dsGet(inVolunteer, i, "vEnd");
			String vEnrollDate= dsGet(inVolunteer, i, "vEnrollDate");
			Volunteer volunteer = new Volunteer(vCode, vName, vArea, vHour, vStart, vEnd, vEnrollDate);
			if(rowType == DataSet.ROW_TYPE_INSERTED) {
				iResult += vService.registerVolunteer(volunteer);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED)
			{
				String vOrgCode = inVolunteer.getSavedData(i, "vCode").toString();
				volunteer.setvCode(vOrgCode);
				uResult += vService.modifyVolunteer(volunteer);
				
			}
		}
		if(iResult < 0 && uResult <0) {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}else {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	@RequestMapping(value="/volunteer/list.snu", method=RequestMethod.GET)
	public NexacroResult printVolunteer() {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Volunteer> vList = vService.printAllVolunteer();
		if(!vList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		}else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}
		result.addDataSet("out_volunteer", vList);
		result.addVariable("ErrorCode", nErrorCode);
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
