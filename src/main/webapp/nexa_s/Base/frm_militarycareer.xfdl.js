(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_militarycareer");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"dCode\" type=\"STRING\" size=\"256\"/><Column id=\"dName\" type=\"STRING\" size=\"256\"/><Column id=\"dField\" type=\"STRING\" size=\"256\"/><Column id=\"officeName\" type=\"STRING\" size=\"256\"/><Column id=\"tuitionFee\" type=\"INT\" size=\"256\"/><Column id=\"dCapacity\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_student", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"sRrn\" type=\"STRING\" size=\"256\"/><Column id=\"sPassword\" type=\"STRING\" size=\"256\"/><Column id=\"sAddress\" type=\"STRING\" size=\"256\"/><Column id=\"sEmail\" type=\"STRING\" size=\"256\"/><Column id=\"sGender\" type=\"STRING\" size=\"256\"/><Column id=\"sPhone\" type=\"STRING\" size=\"256\"/><Column id=\"sAddmission\" type=\"STRING\" size=\"256\"/><Column id=\"absenceYN\" type=\"STRING\" size=\"256\"/><Column id=\"transferYN\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mil", this);
            obj._setContents("<ColumnInfo><Column id=\"rfNum\" type=\"STRING\" size=\"256\"/><Column id=\"rfRequestDate\" type=\"STRING\" size=\"256\"/><Column id=\"musterDate\" type=\"STRING\" size=\"256\"/><Column id=\"rfStatus\" type=\"STRING\" size=\"256\"/><Column id=\"rfMsg\" type=\"STRING\" size=\"256\"/><Column id=\"military\" type=\"STRING\" size=\"256\"/><Column id=\"rank\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_level", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">이병</Col></Row><Row><Col id=\"level\">일병</Col></Row><Row><Col id=\"level\">상병</Col></Row><Row><Col id=\"level\">병장</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_type", this);
            obj._setContents("<ColumnInfo><Column id=\"type\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"type\">육군</Col></Row><Row><Col id=\"type\">해군</Col></Row><Row><Col id=\"type\">공군</Col></Row><Row><Col id=\"type\">공익</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_approve", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">Y</Col><Col id=\"text\">승인</Col></Row><Row><Col id=\"id\">N</Col><Col id=\"text\">승인대기중</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","15","20","1055","440",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_mil");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"신청일\"/><Cell col=\"1\" text=\"군구분\"/><Cell col=\"2\" text=\"집합일\"/><Cell col=\"3\" text=\"처리상태\"/></Band><Band id=\"body\"><Cell text=\"bind:rfRequestDate\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:military\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:musterDate\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:rfStatus\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_approve\" combocodecol=\"id\" combodatacol=\"text\"/></Band></Format></Formats>");
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
        this.registerScript("frm_militarycareer.xfdl", function() {
        var sName = nexacro.getEnvironmentVariable("ev_Val1");
        var sCode = nexacro.getEnvironmentVariable("ev_Val");
        this.frm_militarycareer_onload = function(obj,e)
        {
        		this.transaction(
        		"tr_select"
        		,"tttUrl::request/milList.snu"
        		,""
        		,"ds_mil=out_mil"
        		,"inVar1=" + sCode
        		,"fn_callback_tran"
        	)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_militarycareer_onload,this);
        };
        this.loadIncludeScript("frm_militarycareer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
