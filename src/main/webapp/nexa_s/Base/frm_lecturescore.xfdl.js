(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_lecturescore");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lecture", this);
            obj._setContents("<ColumnInfo><Column id=\"lCode\" type=\"STRING\" size=\"256\"/><Column id=\"lType\" type=\"STRING\" size=\"256\"/><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"lObjective\" type=\"STRING\" size=\"256\"/><Column id=\"lContents\" type=\"STRING\" size=\"256\"/><Column id=\"textbook\" type=\"STRING\" size=\"256\"/><Column id=\"lDays\" type=\"INT\" size=\"256\"/><Column id=\"credit\" type=\"INT\" size=\"256\"/><Column id=\"lYear\" type=\"STRING\" size=\"256\"/><Column id=\"lSemester\" type=\"INT\" size=\"256\"/><Column id=\"lCapacity\" type=\"INT\" size=\"256\"/><Column id=\"lStatus\" type=\"STRING\" size=\"256\"/><Column id=\"pCode\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_professor", this);
            obj._setContents("<ColumnInfo><Column id=\"pCode\" type=\"STRING\" size=\"256\"/><Column id=\"pName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pCode\">P060</Col><Col id=\"pName\">김진섭</Col></Row><Row><Col id=\"pCode\">P901</Col><Col id=\"pName\">김병수</Col></Row><Row><Col id=\"pCode\">P002</Col><Col id=\"pName\">김제니</Col></Row><Row><Col id=\"pCode\">P009</Col><Col id=\"pName\">고출봉</Col></Row><Row><Col id=\"pCode\">P061</Col><Col id=\"pName\">한상훈</Col></Row><Row><Col id=\"pCode\">P902</Col><Col id=\"pName\">이철헌</Col></Row><Row><Col id=\"pCode\">P100</Col><Col id=\"pName\">김병국</Col></Row><Row><Col id=\"pCode\">P062</Col><Col id=\"pName\">함덕수</Col></Row><Row><Col id=\"pCode\">P101</Col><Col id=\"pName\">지경노</Col></Row><Row><Col id=\"pCode\">P030</Col><Col id=\"pName\">이철용</Col></Row><Row><Col id=\"pCode\">P031</Col><Col id=\"pName\">권백종</Col></Row><Row><Col id=\"pCode\">P032</Col><Col id=\"pName\">박주희</Col></Row><Row><Col id=\"pCode\">P033</Col><Col id=\"pName\">김기백</Col></Row><Row><Col id=\"pCode\">P034</Col><Col id=\"pName\">황태석</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","14","21","1053","579",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_lecture");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"128\"/><Column size=\"80\"/><Column size=\"39\"/><Column size=\"80\"/><Column size=\"41\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"강의코드\"/><Cell col=\"1\" text=\"강의명\"/><Cell col=\"2\" text=\"강의분류\"/><Cell col=\"3\" text=\"학점\"/><Cell col=\"4\" text=\"년도\"/><Cell col=\"5\" text=\"학기\"/><Cell col=\"6\" text=\"담당교수\"/><Cell col=\"7\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:lCode\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:lName\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:lType\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:credit\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:lYear\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:lSemester\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:pCode\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_professor\" combocodecol=\"pCode\" combodatacol=\"pName\"/><Cell col=\"7\" text=\"평가시작\" textAlign=\"center\" displaytype=\"buttoncontrol\"/></Band></Format></Formats>");
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
        this.registerScript("frm_lecturescore.xfdl", function() {
        var sName = nexacro.getEnvironmentVariable("ev_Val1");
        var sCode = nexacro.getEnvironmentVariable("ev_Val");

        this.frm_lecturescore_onload = function(obj,e)
        {
        		this.transaction(
                		"tr_select"// 1.ID
                		,"tttUrl::lecture/score.snu"// 2.URL
                		,"" // 3.InDs : F->S jsp(I,U,D)
                		,"ds_lecture=out_lecture" // 4.OutDs : S->F jsp(SELECT)
                		,"inVar1="+sCode // 5.InVar : F->S(var)
                		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        				)
        };

        this.Grid00_oncellclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init(
        		"score_popup"
        		,0
        		,0
        		,400
        		,300
        		,null
        		,null
        		,"Base::popup_lectureScore.xfdl"
        	);

        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)");
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_resizable(false);
        	objChildFrame.set_showstatusbar(false);

        	var onRow = this.ds_lecture.rowposition;
        	var objParam = {lCode:this.ds_lecture.getColumn(onRow, "lCode")};

        	objChildFrame.showModal(
        		this.getOwnerFrame()
        		, objParam
        		, this
        		, "fn_popupCallback"
        		);
        };

        var gridTest = this.Grid00.getEditText();
        alert(gridTest);

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_lecturescore_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
        };
        this.loadIncludeScript("frm_lecturescore.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
