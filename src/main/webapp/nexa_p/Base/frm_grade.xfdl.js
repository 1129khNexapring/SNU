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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"dName\" type=\"STRING\" size=\"256\"/><Column id=\"pCode\" type=\"STRING\" size=\"256\"/><Column id=\"grade\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"26\"/><Column size=\"96\"/><Column size=\"33\"/><Column size=\"2\"/><Column size=\"1\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학생이름\"/><Cell col=\"1\" text=\"과목명\"/><Cell col=\"2\" colspan=\"3\" textAlign=\"right\" text=\"점수\"><Cell text=\"                 점수\"/><Cell col=\"1\"/><Cell col=\"2\"/></Cell></Band><Band id=\"body\"><Cell text=\"bind:sName\"/><Cell col=\"1\" text=\"bind:lName\"/><Cell col=\"2\" displaytype=\"editcontrol\" edittype=\"text\" combodataset=\"ds_grade\" combocodecol=\"grade\" combodatacol=\"grade\" text=\"bind:grade\" editinputfilter=\"space,alpha\"/><Cell col=\"3\" text=\"bind:dName\"/><Cell col=\"4\" text=\"bind:pCode\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","964","4","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장하기");
            obj.set_background("cornflowerblue");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
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
        	this.transaction(
        		  "tr_gradeSave"
        		, "SnuUrl::grade/save.snu"
        		, "in_boardList=ds_boardList:U"
        		, ""
        		, "in_var1=" + nexacro.wrapQuote(name)
        		, "fn_callback_tran"
        	);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_grade_onload,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("frm_grade.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
