(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_ask");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qna", this);
            obj._setContents("<ColumnInfo><Column id=\"qnaNo\" type=\"INT\" size=\"256\"/><Column id=\"qnaTitle\" type=\"STRING\" size=\"256\"/><Column id=\"qnaContent\" type=\"STRING\" size=\"256\"/><Column id=\"qnaDate\" type=\"STRING\" size=\"256\"/><Column id=\"qnaStatus\" type=\"STRING\" size=\"256\"/><Column id=\"qnaCount\" type=\"INT\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","200","1060","367",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_qna");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"284\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"작성자\"/><Cell col=\"1\" text=\"건의내용\"/><Cell col=\"2\" text=\"작성일\"/></Band><Band id=\"body\"><Cell text=\"bind:sCode\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:qnaContent\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:qnaDate\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","11","140","184","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","201","140","70","51",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","925","575","146","49",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("글쓰기");
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
        this.registerScript("frm_ask.xfdl", function() {
        var sCode = nexacro.getEnvironmentVariable("ev_Val");



        this.frm_ask_onload = function(obj,e)
        {

        	this.transaction(
                		"tr_select"// 1.ID
                		,"tttUrl::qna/list.snu"// 2.URL
                		,"" // 3.InDs : F->S jsp(I,U,D)
                		,"ds_qna=out_qna" // 4.OutDs : S->F jsp(SELECT)
                		,"inVar1=" // 5.InVar : F->S(var)
                		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        				)
        };

        this.Grid00_oncellclick = function(obj,e)
        {
        	var row = this.ds_qna.rowposition;
        	var qnaNo = this.ds_qna.getColumn(row, "qnaNo");
        	var qnaCount = this.ds_qna.getColumn(row, "qnaCount");

        	var objChildFrame = new ChildFrame();
        	objChildFrame.init(
        		"qna_detail"
        		,0
        		,0
        		,400
        		,300
        		,null
        		,null
        		,"Base::frm_qnaDetail.xfdl"
        	);

        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)");
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_resizable(false);
        	objChildFrame.set_showstatusbar(false);

        	var onRow = this.ds_qna.rowposition;
        	var objParam = {qsCode:this.ds_qna.getColumn(onRow, "sCode")
        					,qnaTitle:this.ds_qna.getColumn(onRow, "qnaTitle")
        					,qnaNo:this.ds_qna.getColumn(onRow, "qnaNo")
        					,qnaContent:this.ds_qna.getColumn(onRow, "qnaContent")
        					,qnaDate:this.ds_qna.getColumn(onRow, "qnaDate")
        					,qnaStatus:this.ds_qna.getColumn(onRow, "qnaStatus")
        					,qnaCount:this.ds_qna.getColumn(onRow, "qnaCount")
        					};

        	objChildFrame.showModal(
        		this.getOwnerFrame()
        		, objParam
        		, this
        		, "fn_popupCallback"
        		);


        	this.transaction(
                		"tr_register"
                		,"tttUrl::qna/count.snu"
                		,""
                		,""
                		,"inVar1=" + qnaNo + " inVar2=" + qnaCount
                		,"fn_callback_tran"
                	)
        };

        this.Button01_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init(
        		"qna_detail"
        		,0
        		,0
        		,400
        		,300
        		,null
        		,null
        		,"Base::frm_qnaRegister.xfdl"
        	);

        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)");
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_resizable(false);
        	objChildFrame.set_showstatusbar(false);

        	objChildFrame.showModal(
        		this.getOwnerFrame()
        		, ""
        		, this
        		, "fn_popupCallback"
        		);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_ask_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("frm_ask.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
