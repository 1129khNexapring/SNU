(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_moneycareer");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sch", this);
            obj._setContents("<ColumnInfo><Column id=\"scCode\" type=\"STRING\" size=\"256\"/><Column id=\"scName\" type=\"STRING\" size=\"256\"/><Column id=\"amount\" type=\"INT\" size=\"256\"/><Column id=\"scCondition\" type=\"STRING\" size=\"256\"/><Column id=\"scDate\" type=\"STRING\" size=\"256\"/><Column id=\"scStatus\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/><Column id=\"scEnrollDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_requestSch", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"scCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">D001</Col><Col id=\"DEPT_NAME\">국어국문학과</Col></Row><Row><Col id=\"DEPT_CD\">D002</Col><Col id=\"DEPT_NAME\">영여교육과</Col></Row><Row><Col id=\"DEPT_CD\">D999</Col><Col id=\"DEPT_NAME\">서양조소학과</Col></Row><Row><Col id=\"DEPT_CD\">D201</Col><Col id=\"DEPT_NAME\">수학과</Col></Row><Row><Col id=\"DEPT_CD\">D100</Col><Col id=\"DEPT_NAME\">경영학과</Col></Row><Row><Col id=\"DEPT_CD\">D101</Col><Col id=\"DEPT_NAME\">회계사무학과</Col></Row><Row><Col id=\"DEPT_CD\">D901</Col><Col id=\"DEPT_NAME\">서양화과</Col></Row><Row><Col id=\"DEPT_CD\">D902</Col><Col id=\"DEPT_NAME\">동양화과</Col></Row><Row><Col id=\"DEPT_CD\">D301</Col><Col id=\"DEPT_NAME\">기계공학과</Col></Row><Row><Col id=\"DEPT_CD\">D003</Col><Col id=\"DEPT_NAME\">역사학과</Col></Row><Row><Col id=\"DEPT_CD\">D102</Col><Col id=\"DEPT_NAME\">빅데이터응용학과</Col></Row><Row><Col id=\"DEPT_CD\">D302</Col><Col id=\"DEPT_NAME\">화학공학과</Col></Row><Row><Col id=\"DEPT_CD\">D303</Col><Col id=\"DEPT_NAME\">컴퓨터공학과</Col></Row><Row><Col id=\"DEPT_CD\">D304</Col><Col id=\"DEPT_NAME\">생명공학과</Col></Row><Row><Col id=\"DEPT_CD\">D202</Col><Col id=\"DEPT_NAME\">수학교육과</Col></Row><Row><Col id=\"DEPT_CD\">D305</Col><Col id=\"DEPT_NAME\">전자공학과</Col></Row><Row><Col id=\"DEPT_CD\">D306</Col><Col id=\"DEPT_NAME\">전기공학과</Col></Row><Row><Col id=\"DEPT_CD\">D307</Col><Col id=\"DEPT_NAME\">건축학과</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_approve", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">Y</Col><Col id=\"text\">승인</Col></Row><Row><Col id=\"id\">N</Col><Col id=\"text\">승인대기중</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","17","21","1047","619",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_sch");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"신청일\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"장학금명\"/><Cell col=\"3\" text=\"처리상태\"/></Band><Band id=\"body\"><Cell text=\"bind:scDate\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:dCode\" displaytype=\"combotext\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:scName\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:scStatus\" displaytype=\"combotext\" combodataset=\"ds_approve\" combocodecol=\"id\" combodatacol=\"text\" textAlign=\"center\"/></Band></Format></Formats>");
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
        this.registerScript("frm_moneycareer.xfdl", function() {
        var sName = nexacro.getEnvironmentVariable("ev_Val1");
        var sCode = nexacro.getEnvironmentVariable("ev_Val");

        this.frm_moneycareer_onload = function(obj,e)
        {
        	this.transaction(
        		"tr_select"
        		,"SnuURL::request/schlist.snu"
        		,""
        		,"ds_sch=out_sch"
        		,"inVar1=" + sCode
        		,"fn_callback_tran"
        	)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_moneycareer_onload,this);
        };
        this.loadIncludeScript("frm_moneycareer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
