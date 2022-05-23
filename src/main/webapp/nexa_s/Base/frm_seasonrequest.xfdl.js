(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_seasonrequest");
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


            obj = new Dataset("ds_vSession", this);
            obj._setContents("<ColumnInfo><Column id=\"vNo\" type=\"INT\" size=\"256\"/><Column id=\"vRequestDate\" type=\"STRING\" size=\"256\"/><Column id=\"vStatus\" type=\"STRING\" size=\"256\"/><Column id=\"vMsg\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"lCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("s_status", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">N</Col><Col id=\"text\">승인대기중</Col></Row><Row><Col id=\"id\">Y</Col><Col id=\"text\">승인완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","22","15","438","473",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_lecture");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"207\"/><Column size=\"33\"/><Column size=\"72\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"강의코드\"/><Cell col=\"1\" text=\"강의명\"/><Cell col=\"2\" text=\"학점\"/><Cell col=\"3\" text=\"담당교수\"/><Cell col=\"4\" text=\"신청\"/></Band><Band id=\"body\"><Cell text=\"bind:lCode\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:lName\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:credit\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:pCode\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_professor\" combocodecol=\"pCode\" combodatacol=\"pName\"/><Cell col=\"4\" displaytype=\"buttoncontrol\" edittype=\"none\" text=\"신청\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","470","45","603","372",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_vSession");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"69\"/><Column size=\"383\"/><Column size=\"48\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"신청일\"/><Cell col=\"1\" text=\"과목명\"/><Cell col=\"2\" text=\"학점\"/><Cell col=\"3\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:vRequestDate\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:lCode\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_lecture\" combocodecol=\"lCode\" combodatacol=\"lName\"/><Cell col=\"2\" text=\"bind:lCode\" displaytype=\"combotext\" combodataset=\"ds_lecture\" combocodecol=\"lCode\" combodatacol=\"credit\"/><Cell col=\"3\" text=\"bind:vStatus\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","470","15","181","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("※계절학기 신청목록");
            obj.set_font("bold 16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","975","20","95","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
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
        this.registerScript("frm_seasonrequest.xfdl", function() {
        var sCode = nexacro.getEnvironmentVariable("ev_Val");
        var d = new Date();
        var today = (d.getYear() + "-" + ((d.getMonth()+1)+"").padLeft(2,'0')+"-"+(""+d.getDate()).padLeft(2,'0'));


        	if(today<20220521){
        		alert("신청할수없습니다");
        		this.Grid00.set_enable(false);
        		this.Grid00.set_visible(false);
        		this.Grid01.set_visible(false);
        		}
        		else{
        			alert("신청가능합니다");
        		}



        this.frm_seasonrequest_onload = function(obj,e)
        {
        		this.transaction(
                		"tr_select"// 1.ID
                		,"SnuURL::season/list.snu"// 2.URL
                		,"" // 3.InDs : F->S jsp(I,U,D)
                		,"ds_lecture=out_lecture" // 4.OutDs : S->F jsp(SELECT)
                		,"inVar1="+sCode // 5.InVar : F->S(var)
                		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        				)
        		this.transaction(
        				"tr_selectSeason"// 1.ID
        				,"SnuURL::season/requestList.snu"// 2.URL
        				,"" // 3.InDs : F->S jsp(I,U,D)
        				,"ds_vSession=out_vSession" // 4.OutDs : S->F jsp(SELECT)
        				,"inVar1=" + sCode // 5.InVar : F->S(var)
        				,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        				)
        };

        this.Grid00_oncellclick = function(obj,e)
        {
        	row = this.ds_lecture.rowposition;
        	var lCheck = this.ds_lecture.getColumn(row, "lCode");
        	var check = this.ds_vSession.getCaseCount(" lCode=='"+lCheck+"'");
        	var sRowCount = this.ds_vSession.getRowCount();
        	lCode = this.ds_lecture.getColumn(row, "lCode");
        	lName = this.ds_lecture.getColumn(row, "lName");
        //
        // 	var findSeason = this.ds_vSession.findRow("lCode", lCode);
        // 	var vDate = this.ds_vSession.getColumn(findSeason, "vRequestDate");
        // 	var vCode = this.ds_vSession.getColumn(findSeason, "lCode");
        // 	var vStatus = this.ds_vSession.getColumn(findSeason, "vStatus");
        // 	alert(vDate);
        // 	alert(vCode);
        // 	alert(vStatus);
        			if(check==0&&sRowCount<3){
        			var seasonRequest = this.confirm(""+lName+"를 신청하시겠습니까?", "취소");
        				if(seasonRequest==true){
        							var vRow = this.ds_vSession.addRow();
        								this.ds_vSession.setColumn(vRow, "vRequestDate", today);
        								this.ds_vSession.setColumn(vRow, "lCode", lCode);
        								this.ds_vSession.setColumn(vRow, "vStatus", "N");
        						this.transaction(
        								"tr_register"
        								,"SnuURL::season/request.snu"
        								,"in_vSession=ds_vSession:U"
        								,""
        								,"inVar1=" + sCode + " inVar2=" + lCode
        								,"fn_callback_tran"
        								)
        								alert("신청되었습니다");
        					}else{
        							alert("취소되었습니다");
        						}
        			}else{
        				if(check==0&&sRowCount==3){
        					alert("신청가능한 학점은 최대 9점입니다");
        						}else{
        							alert("이미 신청한 강의입니다");
        						}
        					}
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.transaction(
                		"tr_select"// 1.ID
                		,"SnuURL::season/requestList.snu"// 2.URL
                		,"" // 3.InDs : F->S jsp(I,U,D)
                		,"ds_vSession=out_vSession" // 4.OutDs : S->F jsp(SELECT)
                		,"inVar1=" + sCode // 5.InVar : F->S(var)
                		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        				)
        	this.grid
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_seasonrequest_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("frm_seasonrequest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
