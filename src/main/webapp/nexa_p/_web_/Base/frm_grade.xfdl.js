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
            obj = new Dataset("ds_enLecture", this);
            obj._setContents("<ColumnInfo><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"gCode\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"lCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"lCode\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_grade","100","40","930","370",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_enLecture");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"46\"/><Column size=\"138\"/><Column size=\"43\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학생이름\"/><Cell col=\"1\" text=\"교과목명\"/><Cell col=\"2\" text=\"점수\"/></Band><Band id=\"body\"><Cell text=\"bind:sName\"/><Cell col=\"1\" text=\"bind:lName\"/><Cell col=\"2\" text=\"bind:gCode\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","710","10","320","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("※ 점수를 입력하고 Enter를 입력하면 점수가 입력됩니다. ");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("5px");
            obj.set_color("darkred");
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
        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg)
        {
        	if(id == "tr_EnLectureList") {
        		if(nErrorCode < 0) {
        			this.alert("수강 장바구니 조회 실패 : " + sErrorMsg);
        			return;
        		}
        		// this.alert("수강 장바구니 조회 성공");
        	}

        	if(id == "tr_gradeSave") {
        		if(nErrorCode < 0) {
        			this.alert("성적 입력 실패 : " + sErrorMsg);
        			return;
        		}
        	    this.alert("성적 입력 성공");
        	}
        };

        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_grade.addRow();
        };

        this.frm_grade_onload = function(obj,e)
        {
        	var pCode = nexacro.getEnvironmentVariable("ev_Val");
        	this.transaction(
        			"tr_EnLectureList" 					  	  // 1. ID
        			, "SnuUrl::EnLectureList/list.snu" 		  // 2. URL
        			, ""							  // 3. InDs : F -> S jsp(I, U, D)
        			, "ds_enLecture=out_EnLectureList" 	  // 4. OutDs : S -> F jsp(SELECT)
        	        , "in_var1=" + pCode						  // 5. InVar : F -> S(var)
        			, "fn_callback_tran"			  // 6. callback function(transaction 완료시 호출되는 함수)
        		)
        };

        this.btn_save_onclick = function(obj,e)
        {

        };

        this.grd_grade_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		obj.updateToDataset();
        		var sCode = this.ds_enLecture.getColumn(e.row, "sCode");
        		var lCode = this.ds_enLecture.getColumn(e.row, "lCode");
        		var grade = obj.getEditingText();
        		this.transaction(
        			  "tr_gradeSave"
        			, "SnuUrl::grade/save.snu"
        			, ""
        			, ""
        			, "inVar1=" + sCode + " inVar2=" + lCode + " inVar3=" + grade
        			, "fn_callback_tran"
        		);
        	}
        };

        this.Static01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_grade_onload,this);
            this.grd_grade.addEventHandler("onkeydown",this.grd_grade_onkeydown,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
        };
        this.loadIncludeScript("frm_grade.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
