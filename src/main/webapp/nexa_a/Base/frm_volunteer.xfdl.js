(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_volunteer");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_volunteer", this);
            obj._setContents("<ColumnInfo><Column id=\"vCode\" type=\"STRING\" size=\"256\"/><Column id=\"vName\" type=\"STRING\" size=\"256\"/><Column id=\"vArea\" type=\"STRING\" size=\"256\"/><Column id=\"vHour\" type=\"STRING\" size=\"256\"/><Column id=\"vStart\" type=\"STRING\" size=\"256\"/><Column id=\"vEnd\" type=\"STRING\" size=\"256\"/><Column id=\"vEnrollDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","650","10","617","700",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_border("1px solid black");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","125","8","365","78",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("봉사활동정보");
            obj.set_textAlign("center");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","35","204","197","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("봉사활동명");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","260","197","339","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","35","284","197","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("장소");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","261","274","339","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","35","364","197","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("이수시간");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","261","354","225","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","40","444","180","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("시작시간");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","40","524","180","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("종료 시간");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","261","433","246","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit04","261","521","246","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","39","604","180","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("등록 날짜");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit05","259","591","254","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_registerV","542","30","65","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("저장");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","35","125","197","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("봉사활동코드");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit06","260","121","202","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_vList","410","10","70","45",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","24","77","610","626",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_volunteer");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"봉사활동명\"/><Cell col=\"1\" text=\"장소\"/><Cell col=\"2\" text=\"이수시간\"/><Cell col=\"3\" text=\"시작시간\"/><Cell col=\"4\" text=\"종료시간\"/></Band><Band id=\"body\"><Cell text=\"bind:vName\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:vArea\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:vHour\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:vStart\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:vEnd\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_vDelete","564","10","70","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_vAdd","487","10","70","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("등록");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Edit00","value","ds_volunteer","vName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Edit01","value","ds_volunteer","vArea");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Edit02","value","ds_volunteer","vHour");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.Edit03","value","ds_volunteer","vStart");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.Edit04","value","ds_volunteer","vEnd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.Edit05","value","ds_volunteer","vEnrollDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.Edit06","value","ds_volunteer","vCode");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_volunteer.xfdl", function() {


        	//오늘 날짜구하기
        	//var d = new Date();
        	//var today = (d.getYear() + "" + ((d.getMonth()+1)+"").padLeft(2,'0')+""+(""+d.getDate()).padLeft(2,'0'));
        	//this.alert(today);

        //추가버튼시 이벤트걸어놨었음
        // 	var d = new Date();
        // 	var today = (d.getYear() + "" + ((d.getMonth()+1)+"").padLeft(2,'0')+""+(""+d.getDate()).padLeft(2,'0'));
        //
        // 	this.ds_volunteer.addRow();
        // 	this.ds_volunteer.setColumn(this.ds_volunteer, "vEnrollDate", today);

        var sName =  nexacro.getEnvironmentVariable("ev_Val");
        // this.frm_volunteer_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
        // {
        // 	var d = new Date();
        // 	var today = (d.getYear() + "" + ((d.getMonth()+1)+"").padLeft(2,'0')+""+(""+d.getDate()).padLeft(2,'0'));
        //
        //
        //
        // 	this.ds_volunteer.addRow();
        // 	this.ds_volunteer.setColumn(this.ds_volunteer, "vEnrollDate", today);
        // };

        this.Div00_btn_registerV_onclick = function(obj,e)
        {
        	//var name = this.Div00.form.Edit00.value;
        	//alert(name);
        	this.transaction(
        	"tr_vSave"
        	,"SnuURL::volunteer/changeInfo.snu"
        	,"in_volunteer=ds_volunteer:U"
        	,""
        	,"fn_callback_v"
        	)
        };

        this.out_var="";
        this.fn_callback_v = function(id, nErrorCode, sErrorMsg)
        {
        		if(id=="tr_vSave")
        		{
        			if(nErrorCode < 0)
        			{
        				this.alert("저장 실패:"+sErrorMsg);
        				return;
        			}
        			this.alert(this.out_var + ">>저장성공");
        		}
        		if(id=="tr_vList")
        		{
        			if(nErrorCode < 0)
        			{
        				this.alert("조회 실패:"+sErrorMsg);
        				return;
        			}
        			this.alert("조회 성공"+ this.ds_volunteer.getRowCount() + "건");
        		}
        }



        this.btn_vList_onclick = function(obj,e)
        {
        	this.transaction(
        	"tr_vList"
        	,"SnuURL::volunteer/list.snu"
        	,""
        	,"ds_volunteer=out_volunteer"
        	,""
        	,"fn_callback_v"
        	)
        };



        this.btn_vDelete_onclick = function(obj,e)
        {
        	this.ds_volunteer.deleteRow(this.ds_volunteer.rowposition);
        };



        this.btn_vAdd_onclick = function(obj,e)
        {
        	var d = new Date();
        	var today = (d.getYear() + "" + ((d.getMonth()+1)+"").padLeft(2,'0')+""+(""+d.getDate()).padLeft(2,'0'));

        	this.ds_volunteer.addRow();
        	this.ds_volunteer.setColumn(this.ds_volunteer.rowposition, "vEnrollDate", today);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_volunteer_onload,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Div00_Static00_onclick,this);
            this.Div00.form.btn_registerV.addEventHandler("onclick",this.Div00_btn_registerV_onclick,this);
            this.btn_vList.addEventHandler("onclick",this.btn_vList_onclick,this);
            this.btn_vDelete.addEventHandler("onclick",this.btn_vDelete_onclick,this);
            this.btn_vAdd.addEventHandler("onclick",this.btn_vAdd_onclick,this);
        };
        this.loadIncludeScript("frm_volunteer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
