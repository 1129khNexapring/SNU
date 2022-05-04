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

            
            // UI Components Initialize
            obj = new Grid("grd_left","0","180","200","490",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gds_menu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,all");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"197\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","201","140",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("관리자 종합 정보");
            obj.set_background("#657ec2");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_menu","0","140","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("MENU");
            this.addChild(obj.name, obj);

            obj = new Button("btn_myMenu","100","140","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("MY MENU");
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

        this.grd_left_oncelldblclick = function(obj,e)
        {
        	this.fn_openForm(obj, e);
        };

        this.fn_openForm = function(obj, e)
        {
        	nexacro.getApplication().mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,*,0");

        	var objDs = obj.getBindDataset();
        	var sMenuId = objDs.getColumn(e.row, "MENU_ID");
        	var sMenuNM = objDs.getColumn(e.row, "MENU_NAME");
        	var sFormUrl = objDs.getColumn(e.row, "FORM_URL");

        	var sMenuPath = obj.getTreePath(e.row); // tree경로
        	sMenuPath = nexacro.replaceAll(sMenuPath, ".", ">"); // .을 >로 바꾸는 듯함

        	if(sFormUrl.length <= 0) return;

        	var objApp = nexacro.getApplication();
        	var sWorkFramePath = objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.WorkFrame;

        	var arrObj = sWorkFramePath.all;
        	for(var i=0; i<arrObj.length; i++)
        	{
        		if(arrObj[i].name == sMenuId)
        		{
        			arrObj[i].setFocus();
        			return;
        		}
        	}

        	var nWidth = sWorkFramePath.getOffsetWidth();
        	var nHeight = sWorkFramePath.getOffsetHeight();

        	var objChildFrame = new ChildFrame(sMenuId, 0, 0, nWidth, nHeight);
        	sWorkFramePath.addChild(sMenuId, objChildFrame);

        	var oParam = {
        					MENU_ID : sMenuId,
        					MENU_NAME : sMenuNM,
        					FORM_URL : sFormUrl,
        					MENU_PATH : sMenuPath
        				};

        	objChildFrame.openParam = oParam;

        	objChildFrame.set_resizable(true);
        	objChildFrame.set_openstatus("maximize");
        	objChildFrame.set_showtitlebar(false);

        	objChildFrame.set_formurl(sFormUrl);
        	objChildFrame.show();

        	var nRow = objApp.gds_openForm.addRow();
        	objApp.gds_openForm.setColumn(nRow, "MENU_ID", sMenuId);
        	objApp.gds_openForm.setColumn(nRow, "MENU_NAME", sMenuNM);
        	objApp.gds_openForm.setColumn(nRow, "FORM_URL" , sFormUrl);

        	objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.MdiFrame.form.fn_addTab(oParam);
        }

        this.btn_menu_onclick = function(obj,e)
        {
        	this.btn_menu.setSelectStatus(true);
        	this.btn_myMenu.setSelectStatus(false);

        	this.grd_left.set_formatid("default");
        	this.grd_left.set_binddataset("gds_menu");
        };

        this.btn_myMenu_onclick = function(obj,e)
        {
        	this.btn_menu.setSelectStatus(false);
        	this.btn_myMenu.setSelectStatus(true);

        	this.grd_left.set_formatid("myMenu");
        	this.grd_left.set_binddataset("gds_myMenu");
        };

        this.Form_Left_onload = function(obj,e)
        {
        	this.btn_menu.setSelectStatus(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Left_onload,this);
            this.grd_left.addEventHandler("oncelldblclick",this.grd_left_oncelldblclick,this);
            this.btn_menu.addEventHandler("onclick",this.btn_menu_onclick,this);
            this.btn_myMenu.addEventHandler("onclick",this.btn_myMenu_onclick,this);
        };
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
