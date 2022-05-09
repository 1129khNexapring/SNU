(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_helpLIst");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_vol", this);
            obj._setContents("<ColumnInfo><Column id=\"vCode\" type=\"STRING\" size=\"256\"/><Column id=\"vName\" type=\"STRING\" size=\"256\"/><Column id=\"vArea\" type=\"STRING\" size=\"256\"/><Column id=\"vHour\" type=\"INT\" size=\"256\"/><Column id=\"vStart\" type=\"STRING\" size=\"256\"/><Column id=\"vEnd\" type=\"STRING\" size=\"256\"/><Column id=\"vEnrollDate\" type=\"STRING\" size=\"256\"/><Column id=\"vInfo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_requestVol", this);
            obj._setContents("<ColumnInfo><Column id=\"vRequestNo\" type=\"STRING\" size=\"256\"/><Column id=\"vRequestStatus\" type=\"STRING\" size=\"256\"/><Column id=\"vDate\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"vName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("Edit00","15","71","165","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","15","142","992","320",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_vol");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"161\"/><Column size=\"127\"/><Column size=\"379\"/><Column size=\"75\"/><Column size=\"74\"/><Column size=\"43\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"봉사활동명\"/><Cell col=\"1\" text=\"장소\"/><Cell col=\"2\" text=\"봉사내용\"/><Cell col=\"3\" text=\"시작시간\"/><Cell col=\"4\" text=\"봉사시간\"/><Cell col=\"5\" text=\"신청\"/></Band><Band id=\"body\"><Cell text=\"bind:vName\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:vArea\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:vInfo\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:vStart\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:vHour\" textAlign=\"center\"/><Cell col=\"5\" text=\"신청\" displaytype=\"buttoncontrol\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","244","71","186","49",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_search");
            obj.set_codecolumn("search");
            obj.set_datacolumn("search");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","182","71","52","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Combo00","value","ds_vol","vName");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_helplist.xfdl", function() {
        var sName = nexacro.getEnvironmentVariable("ev_Val1");
        var sCode = nexacro.getEnvironmentVariable("ev_Val");

        this.frm_helpLIst_onload = function(obj,e)
        {
        		this.transaction(
        		"tr_select"
        		,"tttUrl::volunteer/list.snu"
        		,""
        		,"ds_vol=out_volunteer"
        		,""
        		,"fn_callback_tran"
        	)
        };

        this.Grid00_oncellclick = function(obj,e)
        {
        /*	this.confirm("해당 봉사활동을 신청하시겠습니까?", "봉사활동신청"); */
        	var vDate = this.ds_vol.getColumn(e.row, "vDate");
        	var vName = this.ds_vol.getColumn(e.row, "vName");

        	this.ds_requestVol.addRow();
        	this.ds_requestVol.setColumn(0, "vDate", vDate);
        	this.ds_requestVol.setColumn(0, "vName", vName);
        	this.ds_requestVol.setColumn(0, "sCode", sCode);

        	this.transaction(
                	"tr_register"
                	,"tttUrl::vol/request.snu"
                	,"in_vol=ds_requestVol:U"
                	,""
                	,""
                	,"fn_callback_tran"
                )
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_helpLIst_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
        };
        this.loadIncludeScript("frm_helplist.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
