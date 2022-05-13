(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pagging");
            this.set_titletext("pagging sample");
            if (Form == this.constructor)
            {
                this._setFormPosition(840,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","20","80",null,null,"20","50",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/><Cell col=\"9\" text=\"Column9\"/><Cell col=\"10\" text=\"Column10\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\" text=\"bind:Column10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divPagging","20",null,null,"30","20","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("divPagging");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","150","46","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("list search");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",840,530,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("pagging.xfdl","techtip::pagging.xjs");
        this.registerScript("pagging.xfdl", function() {
        /**
        *  techtip pagging sample
        *  @MenuPath   techtip > pagging
        *  @FileName	pagging.xfdl
        *  @Desction	grid pagging init form
        *******************************************************************************
        *  2019.03.20		nana			최초 생성
        *******************************************************************************
        */

        /**************************************************************************
         * include 영역
         **************************************************************************/
        this.executeIncludeScript("techtip::pagging.xjs"); /*include "techtip::pagging.xjs"*/;

        /**************************************************************************
         * FORM 변수 선언 영역
         **************************************************************************/
        this.totRowCount = 0;

        /**************************************************************************
         * FORM EVENT 영역(onload)
         **************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.pagging_onload = function(obj,e)
        {
        	/*
        	 페이징 처리 값 세팅 함수 호출
        	 1. 페이지 처리 갯수
        	 2. 한번에 출력될 row 갯수
        	 3. 총계및 페이징 이동 활성화 여부
        	 4. transaction 함수
        	*/

        	var objDivPagging	= this.divPagging;

        	var objConfig = {
        						nPageCount : 10,
        						nPageRowCount : 30,
        						bPageViewActive : true,
        						objPageSearchFunction : this.fnSearchPagging,
        						objSearchButton	: this.btnSearch
        					}

        	this.fnInitPageSet(objDivPagging, objConfig);
        };

        /**************************************************************************
         * CALLBACK 콜백 처리부분(Transaction)
         **************************************************************************/
        /**
         * @description Transaction CallBack 함수
        */
        this.fnCallback = function(sId,errCode,errMsg)
        {	//return val - this.totRowCount
        /*
        	if(errCode<0)
        	{
        		this.btnSearch.set_enable(true);
        	}
        */
        	if(sId == "PAGE")
        	{
        		this.divPagging.nTotalRowCount = this.totRowCount;
        		this.fnCallAfter(this.divPagging);
        	}
        }

        /**************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         **************************************************************************/
        /**
         * @description 조회
        */
        this.fnSearchPagging = function(nPageNo)
        {
        	//pagging transaction
        	//return callback - this.totRowCount
        	this.Dataset00.clearData();

        	var sId 	= "PAGE";
        	var sUrl 	= "http://localhost:8080/service/page_sample.jsp";
        	var sInDs 	= "";
        	var sOutDs 	= "Dataset00=output";
        	var sParam 	= "pageNo=" + nPageNo + " rowCount=" + this.divPagging.config.nSelRowCount;
        	var sCallback 	= "fnCallback";

        	this.transaction(sId, sUrl, sInDs, sOutDs, sParam, sCallback);

        	//local test
        	/*
        	this.divPagging.nTotlaRowCount = 1234;
        	this.fnCallAfter(this.divPagging);
        	*/
        };

        /**************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         **************************************************************************/
        /**
         * @description pagging select

        this.btnSearch_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	--> 조회처리 공통영역으로 변경
        };
        */
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.pagging_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("pagging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
