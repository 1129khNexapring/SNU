(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_helpcareer");
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


            obj = new Dataset("ds_approve", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">Y</Col><Col id=\"text\">승인완료</Col></Row><Row><Col id=\"id\">N</Col><Col id=\"text\">승인대기중</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","17","33","843","357",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_requestVol");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"133\"/><Column size=\"468\"/><Column size=\"133\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"신청일\"/><Cell col=\"1\" text=\"봉사활동명\"/><Cell col=\"2\" text=\"처리상태\"/></Band><Band id=\"body\"><Cell text=\"bind:vDate\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:vName\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:vRequestStatus\" displaytype=\"combotext\" combodataset=\"ds_approve\" combocodecol=\"id\" combodatacol=\"text\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_helpcareer.xfdl", function() {
        var sCode = nexacro.getEnvironmentVariable("ev_Val");

        this.frm_helpcareer_onload = function(obj,e)
        {
        		this.transaction(
        		"tr_select"
        		,"SnuURL::vol/list.snu"
        		,""
        		,"ds_requestVol=out_requestVol"
        		,"inVar1="+sCode
        		,"fn_callback_tran"
        	)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_helpcareer_onload,this);
        };
        this.loadIncludeScript("frm_helpcareer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
