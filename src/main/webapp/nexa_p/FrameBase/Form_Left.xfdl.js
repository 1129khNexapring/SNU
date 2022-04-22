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
                this._setFormPosition(200,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid00","0","100","200",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("p_menu");
            obj.set_treeusecheckbox("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"182\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","200","100",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("교수 종합 정보");
            obj.set_textAlign("center");
            obj.set_background("#657ec2");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",200,620,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	this.fn_openForm(obj, e);
        };


        this. fn_openForm = function(obj, e)
        {

        	nexacro.getApplication().mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,*,0");

        	var objDs = obj.getBindDataset();
        	var sMenuId = objDs.getColumn(e.row, "MENU_ID");
        	var sMenuNM = objDs.getColumn(e.row, "MENU_NAME");
        	var sFormUrl = objDs.getColumn(e.row, "FORM_URL");

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
        					FORM_URL : sFormUrl
        				};

        	objChildFrame.openParam = oParam;

        	objChildFrame.set_resizable(true);
        	objChildFrame.set_openstatus("maximize");
        	objChildFrame.set_showtitlebar(false);

        	objChildFrame.set_formurl("FrameBase::Form_Work.xfdl");
        	objChildFrame.show();

        	var nRow = objApp.p_openForm.addRow();
        	objApp.p_openForm.setColumn(nRow, "MENU_ID"  , sMenuId);
        	objApp.p_openForm.setColumn(nRow, "MENU_NAME", sMenuNM);
        	objApp.p_openForm.setColumn(nRow, "FORM_URL" , sFormUrl);

        	objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.TabFrame.form.fn_addTab(oParam);



        }
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
