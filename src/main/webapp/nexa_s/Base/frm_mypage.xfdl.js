(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_mypage");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_student", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"sRrn\" type=\"STRING\" size=\"256\"/><Column id=\"sPassword\" type=\"STRING\" size=\"256\"/><Column id=\"sAddress\" type=\"STRING\" size=\"256\"/><Column id=\"sEmail\" type=\"STRING\" size=\"256\"/><Column id=\"sGender\" type=\"STRING\" size=\"256\"/><Column id=\"sPhone\" type=\"STRING\" size=\"256\"/><Column id=\"sAddmission\" type=\"STRING\" size=\"256\"/><Column id=\"absenceYN\" type=\"STRING\" size=\"256\"/><Column id=\"transferYN\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"dCode\" type=\"STRING\" size=\"256\"/><Column id=\"dName\" type=\"STRING\" size=\"256\"/><Column id=\"dField\" type=\"STRING\" size=\"256\"/><Column id=\"officeCode\" type=\"STRING\" size=\"256\"/><Column id=\"tuitionFee\" type=\"STRING\" size=\"256\"/><Column id=\"dCapacity\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","161","53","859","475",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("#ffffff");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","41","30","127","161",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("ImageViewer00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","220","30","78","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("학번");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","220","86","78","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","220","142","78","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("소속");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","548","30","78","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("전화번호");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","548","88","78","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("주소");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","548","142","78","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("이메일");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edit_phone","618","30","180","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edit_address","618","88","180","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edit_email","618","144","180","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","268","30","180","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("Static01");
            obj.set_border("1px solid darkgray");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","268","86","180","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("Static01");
            obj.set_border("1px solid darkgray");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01","268","142","180","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("Static01");
            obj.set_border("1px solid darkgray");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","18","213","242","67",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("* 학적 변동내역");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","925","536","96","52",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("정보수정");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Static01","text","ds_student","sCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Static01_00","text","ds_student","sName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Static01_01","text","ds_dept","dName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edit_phone","value","ds_student","sPhone");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edit_address","value","ds_student","sAddress");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edit_email","value","ds_student","sEmail");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_mypage.xfdl", function() {
        var sName = nexacro.getEnvironmentVariable("ev_Val1");
        var sCode = nexacro.getEnvironmentVariable("ev_Val");

        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg)
        {
        	if(id=="tr_studentDept")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("학생정보 불러오기 실패 : " + sErrorMsg);
        			return;
        		}
        		this.alert("학생정보 조회 성공" );
        	}
        }

        this.frm_mypage_onload = function(obj,e)
        {
        	this.transaction(
                		"tr_select"// 1.ID
                		,"SnuURL::student/info.snu"// 2.URL
                		,"" // 3.InDs : F->S jsp(I,U,D)
                		,"ds_student=out_student" // 4.OutDs : S->F jsp(SELECT)
                		,"inVar1="+sCode // 5.InVar : F->S(var)
                		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        				)

           this.transaction(
                	"tr_studentDept"// 1.ID
                	,"SnuURL::studentDept/list.snu"// 2.URL
                	,"" // 3.InDs : F->S jsp(I,U,D)
                	,"ds_dept=out_dept" // 4.OutDs : S->F jsp(SELECT)
                	,"inVar1=" + sCode // 5.InVar : F->S(var)
                	,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
                	)
        };

        this.Button00_onclick = function(obj,e)
        {
        	var phone = this.Div00.form.edit_phone.value;
        	var address = this.Div00.form.edit_address.value;
        	var email = this.Div00.form.edit_email.value;
        	this.ds_student.setColumn(0, "sPhone", phone);
        	this.ds_student.setColumn(0, "sEmail", email);
        	this.ds_student.setColumn(0, "sAddress", address);
        	var studentModify = this.confirm("변경사항 저장하시겠습니까?", "취소");
        	if(studentModify == true)
        	{
        			this.transaction(
        				"tr_student"
        				,"SnuURL::student/modify.snu"
        				,""
        				,""
        				,"inVar1=" + sCode + " inVar2=" + phone + " inVar3=" + nexacro.wrapQuote(address) + " inVar4=" + email
        				,"fn_callback_tran"
        		)
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_mypage_onload,this);
            this.Div00.form.ImageViewer00.addEventHandler("onclick",this.Div00_ImageViewer00_onclick,this);
            this.Div00.form.Static02.addEventHandler("onclick",this.Div00_Static02_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("frm_mypage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
