(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_lecture");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Ylecture", this);
            obj._setContents("<ColumnInfo><Column id=\"lCode\" type=\"STRING\" size=\"256\"/><Column id=\"lType\" type=\"STRING\" size=\"256\"/><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"lObjective\" type=\"STRING\" size=\"256\"/><Column id=\"lContents\" type=\"STRING\" size=\"256\"/><Column id=\"textbook\" type=\"STRING\" size=\"256\"/><Column id=\"lDays\" type=\"STRING\" size=\"256\"/><Column id=\"credit\" type=\"STRING\" size=\"256\"/><Column id=\"lYear\" type=\"STRING\" size=\"256\"/><Column id=\"lSemester\" type=\"STRING\" size=\"256\"/><Column id=\"lCapacity\" type=\"STRING\" size=\"256\"/><Column id=\"lStatus\" type=\"STRING\" size=\"256\"/><Column id=\"pCode\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_field", this);
            obj._setContents("<ColumnInfo><Column id=\"dCode\" type=\"STRING\" size=\"256\"/><Column id=\"dField\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dCode\">D0</Col><Col id=\"dField\">문과대학</Col></Row><Row><Col id=\"dCode\">D1</Col><Col id=\"dField\">경영대학</Col></Row><Row><Col id=\"dCode\">D2</Col><Col id=\"dField\">이과대학</Col></Row><Row><Col id=\"dCode\">D3</Col><Col id=\"dField\">공과대학</Col></Row><Row><Col id=\"dCode\">D9</Col><Col id=\"dField\">예술대학</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lType", this);
            obj._setContents("<ColumnInfo><Column id=\"lType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lType\">전공선택</Col></Row><Row><Col id=\"lType\">전공필수</Col></Row><Row><Col id=\"lType\">교양선택</Col></Row><Row><Col id=\"lType\">교양필수</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Nlecture", this);
            obj._setContents("<ColumnInfo><Column id=\"lCode\" type=\"STRING\" size=\"256\"/><Column id=\"lType\" type=\"STRING\" size=\"256\"/><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"lObjective\" type=\"STRING\" size=\"256\"/><Column id=\"lContents\" type=\"STRING\" size=\"256\"/><Column id=\"textbook\" type=\"STRING\" size=\"256\"/><Column id=\"lDays\" type=\"STRING\" size=\"256\"/><Column id=\"credit\" type=\"STRING\" size=\"256\"/><Column id=\"lYear\" type=\"STRING\" size=\"256\"/><Column id=\"lSemester\" type=\"STRING\" size=\"256\"/><Column id=\"lCapacity\" type=\"STRING\" size=\"256\"/><Column id=\"lStatus\" type=\"STRING\" size=\"256\"/><Column id=\"pCode\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pdept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">D001</Col><Col id=\"DEPT_NAME\">국어국문학과</Col></Row><Row><Col id=\"DEPT_CD\">D002</Col><Col id=\"DEPT_NAME\">영여교육과</Col></Row><Row><Col id=\"DEPT_CD\">D999</Col><Col id=\"DEPT_NAME\">서양조소학과</Col></Row><Row><Col id=\"DEPT_CD\">D201</Col><Col id=\"DEPT_NAME\">수학과</Col></Row><Row><Col id=\"DEPT_CD\">D100</Col><Col id=\"DEPT_NAME\">경영학과</Col></Row><Row><Col id=\"DEPT_CD\">D101</Col><Col id=\"DEPT_NAME\">회계사무학과</Col></Row><Row><Col id=\"DEPT_CD\">D901</Col><Col id=\"DEPT_NAME\">서양화과</Col></Row><Row><Col id=\"DEPT_CD\">D902</Col><Col id=\"DEPT_NAME\">동양화과</Col></Row><Row><Col id=\"DEPT_CD\">D301</Col><Col id=\"DEPT_NAME\">기계공학과</Col></Row><Row><Col id=\"DEPT_CD\">D003</Col><Col id=\"DEPT_NAME\">역사학과</Col></Row><Row><Col id=\"DEPT_CD\">D102</Col><Col id=\"DEPT_NAME\">빅데이터응용학과</Col></Row><Row><Col id=\"DEPT_CD\">D302</Col><Col id=\"DEPT_NAME\">화학공학과</Col></Row><Row><Col id=\"DEPT_CD\">D303</Col><Col id=\"DEPT_NAME\">컴퓨터공학과</Col></Row><Row><Col id=\"DEPT_CD\">D304</Col><Col id=\"DEPT_NAME\">생명공학과</Col></Row><Row><Col id=\"DEPT_CD\">D202</Col><Col id=\"DEPT_NAME\">수학교육과</Col></Row><Row><Col id=\"DEPT_CD\">D305</Col><Col id=\"DEPT_NAME\">전자공학과</Col></Row><Row><Col id=\"DEPT_CD\">D306</Col><Col id=\"DEPT_NAME\">전기공학과</Col></Row><Row><Col id=\"DEPT_CD\">D307</Col><Col id=\"DEPT_NAME\">건축학과</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_professor", this);
            obj._setContents("<ColumnInfo><Column id=\"pCode\" type=\"STRING\" size=\"256\"/><Column id=\"pName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pCode\">P901</Col><Col id=\"pName\">김병수</Col></Row><Row><Col id=\"pCode\">P060</Col><Col id=\"pName\">김진섭</Col></Row><Row><Col id=\"pCode\">P002</Col><Col id=\"pName\">김제니</Col></Row><Row><Col id=\"pCode\">P009</Col><Col id=\"pName\">고출봉</Col></Row><Row><Col id=\"pCode\">P061</Col><Col id=\"pName\">한상훈</Col></Row><Row><Col id=\"pCode\">P902</Col><Col id=\"pName\">이철헌</Col></Row><Row><Col id=\"pCode\">P100</Col><Col id=\"pName\">김병국</Col></Row><Row><Col id=\"pCode\">P062</Col><Col id=\"pName\">함덕수</Col></Row><Row><Col id=\"pCode\">P101</Col><Col id=\"pName\">지경노</Col></Row><Row><Col id=\"pCode\">P030</Col><Col id=\"pName\">이철용</Col></Row><Row><Col id=\"pCode\">P031</Col><Col id=\"pName\">권백중</Col></Row><Row><Col id=\"pCode\">P032</Col><Col id=\"pName\">박주희</Col></Row><Row><Col id=\"pCode\">P033</Col><Col id=\"pName\">김기백</Col></Row><Row><Col id=\"pCode\">P034</Col><Col id=\"pName\">황태석</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents("<ColumnInfo><Column id=\"lStatus\" type=\"STRING\" size=\"256\"/><Column id=\"lMsg\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lStatus\">N</Col><Col id=\"lMsg\">승인대기중</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","38","85","801","184",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Ylecture");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"69\"/><Column size=\"68\"/><Column size=\"256\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"강의코드\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"강의명\"/><Cell col=\"3\" text=\"정원\"/></Band><Band id=\"body\"><Cell text=\"bind:lCode\"/><Cell col=\"1\" text=\"bind:lType\"/><Cell col=\"2\" text=\"bind:lName\"/><Cell col=\"3\" text=\"bind:lCapacity\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lList","287","41","63","39",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Combo("com_Field","39","44","114","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_field");
            obj.set_codecolumn("dCode");
            obj.set_datacolumn("dField");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("com_Type","165","44","114","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_lType");
            obj.set_datacolumn("lType");
            obj.set_codecolumn("lType");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","38","356","801","274",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_Nlecture");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"80\"/><Column size=\"207\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학과\"/><Cell col=\"1\" text=\"교수명\"/><Cell col=\"2\" text=\"강의명\"/><Cell col=\"3\" text=\"처리상태\"/></Band><Band id=\"body\"><Cell text=\"bind:dCode\" displaytype=\"combotext\" combodataset=\"ds_pdept\" combodatacol=\"DEPT_NAME\" combocodecol=\"DEPT_CD\"/><Cell col=\"1\" text=\"bind:pCode\" displaytype=\"combotext\" combodataset=\"ds_professor\" combodatacol=\"pName\" combocodecol=\"pCode\"/><Cell col=\"2\" text=\"bind:lName\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:lStatus\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_status\" combodatacol=\"lMsg\" combocodecol=\"lStatus\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retrieveNL","290","313","71","37",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Combo("comb_Field","44","318","107","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_field");
            obj.set_codecolumn("dCode");
            obj.set_datacolumn("dField");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("comb_Type","161","319","99","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_lType");
            obj.set_codecolumn("lType");
            obj.set_datacolumn("lType");
            obj.set_text("Combo01");
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
        this.registerScript("frm_lecture.xfdl", function() {

        this.btn_lList_onclick = function(obj,e)
        {
        	//this.alert(this.com_Field.value);
        	//this.alert(this.com_Type.value);
        	var in_Field = this.com_Field.value;
        	var in_Type = this.com_Type.value;
        	this.transaction(
         	"tr_lList"
         	,"SnuURL::Ylecture/list.snu"
        	,""
         	,"ds_Ylecture=out_lecture"
         	,"in_Var1="+in_Field+" in_Var2="+in_Type+""
        	,"fn_callback_le"
        	)
        };

        this.fn_callback_le = function(id, nErrorCode, sErrorMsg)
        {
        	if(id=="tr_lList")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("조회 실패");
        			return;
        		}
        		this.alert("조회 결과"+this.ds_Ylecture.getRowCount()+"건");
        	}
        	if(id=="tr_nlList")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("조회 실패");
        			return;
        		}
        		this.alert("조회 결과"+this.ds_Nlecture.getRowCount()+"건");
        	}
        }



        this.btn_retrieveNL_onclick = function(obj,e)
        {
        	var out_Field = this.comb_Field.value;
        	var out_Type = this.comb_Type.value;

        	this.transaction(
        	"tr_nlList"
        	,"SnuURL::Nlecture/list.snu"
        	,""
        	,"ds_Nlecture=out_Nlecture"
        	,"in_Var1="+out_Field+" in_Var2="+out_Type+""
        	,"fn_callback_le"
        	)
        };
        // 상세페이지로 이동
        this.Grid01_oncelldblclick = function(obj,e)
        {
        	var nRow = this.ds_Nlecture.rowposition;
        	//var lName = this.ds_Nlecture.getColumn(nRow, "lName");
        	//var lObjective = this.ds_Nlecture.getColumn(nRow, "lObjective");
        	//var lContents = this.ds_Nlecture.getColumn(nRow, "lContents");
        	//var textbook = this.ds_Nlecture.getColumn(nRow, "textbook");
        	//var lCapacity = this.ds_Nlecture.getColumn(nRow, "lCapacity");

        	var objParam = {lName: this.ds_Nlecture.getColumn(nRow, "lName")
        					,lObjective: this.ds_Nlecture.getColumn(nRow, "lObjective")
        					,lContents: this.ds_Nlecture.getColumn(nRow, "lContents")
        					,textbook: this.ds_Nlecture.getColumn(nRow, "textbook")
        					,lCapacity: this.ds_Nlecture.getColumn(nRow, "lCapacity")
        					,lCode: this.ds_Nlecture.getColumn(nRow, "lCode")};

        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop  = system.clientToScreenY(this, 10);
        	// ChildFrame.init(strName, nLeft, nTop, nWidth, nHeight, [,nRight, nBottom, [,strUrl]])
        	var objChild = new ChildFrame("popLectureDetail", nLeft, nTop, 480, 600);
        	objChild.set_formurl("Popup::lectureDetail.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("normal");
        	objChild.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback");
        	trace("Popup::lectureDetail.xfdl");


        };

        this.fn_popupCallback = function(strPopupId, strReturn)
        {
        	if(strReturn == undefined)
        	{
        	return;
        	}
        	if(strPopupId == "popLectureDetail")
        	{
        		return;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_lList.addEventHandler("onclick",this.btn_lList_onclick,this);
            this.Grid01.addEventHandler("oncelldblclick",this.Grid01_oncelldblclick,this);
            this.btn_retrieveNL.addEventHandler("onclick",this.btn_retrieveNL_onclick,this);
        };
        this.loadIncludeScript("frm_lecture.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
