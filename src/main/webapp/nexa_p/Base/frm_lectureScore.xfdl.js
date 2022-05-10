(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_lectureScore");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_score", this);
            obj._setContents("<ColumnInfo><Column id=\"leNo\" type=\"STRING\" size=\"256\"/><Column id=\"leScore\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"lCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_scoreList", this);
            obj._setContents("<ColumnInfo><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"pName\" type=\"STRING\" size=\"256\"/><Column id=\"leScore\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","60","20","980","350",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_scoreList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"교과목명\"/><Cell col=\"1\" text=\"담당교수\"/><Cell col=\"2\" text=\"평균(5점 만점)\"/></Band><Band id=\"body\"><Cell text=\"bind:lName\"/><Cell col=\"1\" text=\"bind:pName\"/><Cell col=\"2\" text=\"bind:leScore\"/></Band></Format></Formats>");
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
        this.registerScript("frm_lectureScore.xfdl", function() {
        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg)
        {
        	if(id == "tr_lectureScoreList") {
        		if(nErrorCode < 0) {
        			this.alert("점수 조회 실패 : " + sErrorMsg);
        			return;
        		}
        		this.alert("점수 조회 성공");
        	}
        };
        this.frm_lectureScore_onload = function(obj,e)
        {
        	this.transaction(
        			"tr_lectureScoreList" 					  	  // 1. ID
        			, "SnuUrl::lectureScore/list.snu" 		  // 2. URL
        			, ""							  // 3. InDs : F -> S jsp(I, U, D)
        			, "ds_scoreList=out_scoreList" 	  // 4. OutDs : S -> F jsp(SELECT)
        	        , ""							  // 5. InVar : F -> S(var)
        			, "fn_callback_tran"			  // 6. callback function(transaction 완료시 호출되는 함수)
        		)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_lectureScore_onload,this);
        };
        this.loadIncludeScript("frm_lectureScore.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
