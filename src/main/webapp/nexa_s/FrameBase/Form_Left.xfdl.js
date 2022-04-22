(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("Form_Left");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Left", this);
            obj._setContents("<ColumnInfo><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">강의정보관리</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">출결 조회</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">성적 조회</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">학사스케줄 관리</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">시간표 조회</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">강의스케줄 조회</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"data\">휴학 관리</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"data\">휴학 신청</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"data\">휴학 신청내역</Col></Row><Row><Col id=\"data\">복학 관리</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">복학 신청</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">복학 신청내역</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">전과 관리</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">전과 신청</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">전과 신청내역</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">예비군 관리</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">예비군 신청</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">예비군 신청내역</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">장학금 관리</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">장학금 조회</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">장학금 신청내역</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">봉사활동 관리</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">봉사활동 조회</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">봉사활동 신청내역</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">계절학기 관리</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">계절학기 신청</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">계절학기 신청내역</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">마이페이지 관리</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">내 정보조회</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">강의평가 관리</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">강의평가 조회</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">문서 출력</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">등록금고지서 출력</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">증명성 발급 및 출력</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">커뮤니티</Col><Col id=\"level\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","100","200","570",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset0");
            obj.set_autosizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"171\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:LIST\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","200","100",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("학생 종합 정보");
            obj.set_background("#657ec2");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",200,670,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
