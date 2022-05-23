(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_grade");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"lCode\" type=\"STRING\" size=\"256\"/><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"lType\" type=\"STRING\" size=\"256\"/><Column id=\"credit\" type=\"INT\" size=\"256\"/><Column id=\"gCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lecturegrade", this);
            obj._setContents("<ColumnInfo><Column id=\"score\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"score\">1</Col><Col id=\"grade\">F</Col></Row><Row><Col id=\"score\">2</Col><Col id=\"grade\">D</Col></Row><Row><Col id=\"score\">3</Col><Col id=\"grade\">C</Col></Row><Row><Col id=\"score\">4</Col><Col id=\"grade\">B</Col></Row><Row><Col id=\"score\">5</Col><Col id=\"grade\">A</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","11","14","1054","616",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grade");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"강의코드\"/><Cell col=\"1\" text=\"강의명\"/><Cell col=\"2\" text=\"강의분류\"/><Cell col=\"3\" text=\"학점\"/><Cell col=\"4\" text=\"평점\"/><Cell col=\"5\" text=\"등급\"/></Band><Band id=\"body\"><Cell text=\"bind:lCode\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:lName\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:lType\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:credit\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:gCode\" textAlign=\"center\"/><Cell col=\"5\" displaytype=\"combotext\" text=\"bind:gCode\" textAlign=\"center\" combodataset=\"ds_lecturegrade\" combocodecol=\"score\" combodatacol=\"grade\"/></Band></Format></Formats>");
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
        this.registerScript("frm_grade.xfdl", function() {
        var sName = nexacro.getEnvironmentVariable("ev_Val1");
        var sCode = nexacro.getEnvironmentVariable("ev_Val");

        this.frm_grade_onload = function(obj,e)
        {
        	this.transaction(
                		"tr_select"
                		,"SnuURL::grade/list.snu"
                		,""
                		,"ds_grade=out_grade"
                		,"inVar1=" +sCode
                		,"fn_callback_tran"
                	)

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_grade_onload,this);
        };
        this.loadIncludeScript("frm_grade.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
