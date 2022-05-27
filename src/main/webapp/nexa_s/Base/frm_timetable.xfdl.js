(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_timetable");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTimetable", this);
            obj._setContents("<ColumnInfo><Column id=\"semester\" type=\"INT\" size=\"256\"/><Column id=\"year\" type=\"INT\" size=\"256\"/><Column id=\"lsDay\" type=\"STRING\" size=\"256\"/><Column id=\"lsDay1\" type=\"STRING\" size=\"256\"/><Column id=\"lsRoom\" type=\"STRING\" size=\"256\"/><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("timetable", this);
            obj._setContents("<ColumnInfo><Column id=\"교시\" type=\"STRING\" size=\"256\"/><Column id=\"월요일\" type=\"STRING\" size=\"256\"/><Column id=\"화요일\" type=\"STRING\" size=\"256\"/><Column id=\"수요일\" type=\"STRING\" size=\"256\"/><Column id=\"목요일\" type=\"STRING\" size=\"256\"/><Column id=\"금요일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"교시\">1</Col></Row><Row><Col id=\"교시\">2</Col></Row><Row><Col id=\"교시\">3</Col></Row><Row><Col id=\"교시\">4</Col></Row><Row><Col id=\"교시\">5</Col></Row><Row><Col id=\"교시\">6</Col></Row><Row><Col id=\"교시\">7</Col></Row><Row><Col id=\"교시\">8</Col></Row><Row><Col id=\"교시\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTimetable01", this);
            obj._setContents("<ColumnInfo><Column id=\"semester\" type=\"INT\" size=\"256\"/><Column id=\"year\" type=\"INT\" size=\"256\"/><Column id=\"lsDay\" type=\"STRING\" size=\"256\"/><Column id=\"lsDay1\" type=\"STRING\" size=\"256\"/><Column id=\"lsRoom\" type=\"STRING\" size=\"256\"/><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid01","395","180","411","250",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("timetable");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_autosizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"교시\"/><Cell col=\"1\" text=\"월요일\"/><Cell col=\"2\" text=\"화요일\"/><Cell col=\"3\" text=\"수요일\"/><Cell col=\"4\" text=\"목요일\"/><Cell col=\"5\" text=\"금요일\"/></Band><Band id=\"body\"><Cell text=\"bind:교시\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:월요일\"/><Cell col=\"2\" text=\"bind:화요일\"/><Cell col=\"3\" text=\"bind:수요일\"/><Cell col=\"4\" text=\"bind:목요일\"/><Cell col=\"5\" text=\"bind:금요일\"/></Band></Format></Formats>");
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
        this.registerScript("frm_timetable.xfdl", function() {
        this.Monday = this.timetable.getColID(1);	//월요일
        this.Tuesday = this.timetable.getColID(2);	//화요일
        this.Wednesday = this.timetable.getColID(3);//수요일
        this.Thursday = this.timetable.getColID(4);	//목요일
        this.Friday = this.timetable.getColID(5);	//금요일

        this.frm_timetable_onload = function(obj,e)
        {
        	var	name = nexacro.getEnvironmentVariable("ev_Val");
        	this.transaction(
        	"tr_timetable"
        	,"SnuURL::timetable/list.snu"
        	,""
        	,"dsTimetable=outTimetable dsTimetable01=outTimetable"
        	,"in_Var1="+name+""
        	,"fn_callback_tt"
        	)
        };

        this.fn_callback_tt = function(sId, nErrorCode, sErrorMsg)
        {
        	if(sId == "tr_timetable")
        	{
        		if(nErrorCode < 0)
        		{
        			return;
        		}

        		var dRow = this.dsTimetable.getRowCount();
        		for(var i = 0; i<dRow; i++)
        		{
        			var lName 	= this.dsTimetable.getColumn(i,"lName");
        			var lsDay 	= this.dsTimetable.getColumn(i,"lsDay");
        			var Days 	= lsDay.split(",");
        			if(this.Monday == Days[0])
        			{
        				this.timetable.setColumn(Days[1]-1,1,lName);
        				if(Days[2] > 0)
        				{
        					this.timetable.setColumn(Days[2]-1,1,lName);
        				}

        			}
        			if(this.Tuesday == Days[0])
        			{
        				this.timetable.setColumn(Days[1]-1,2,lName);
        				if(Days[2] > 0)
        				{
        					this.timetable.setColumn(Days[2]-1,2,lName);
        				}
        			}
        			if(this.Wednesday == Days[0])
        			{
        				this.timetable.setColumn(Days[1]-1,3,lName);
        				if(Days[2] > 0)
        				{
        					this.timetable.setColumn(Days[2]-1,3,lName);
        				}
        			}
        			if(this.Thursday == Days[0])
        			{
        				this.timetable.setColumn(Days[1]-1,4,lName);
        				if(Days[2] > 0)
        				{
        					this.timetable.setColumn(Days[2]-1,4,lName);
        				}
        			}
        			if(this.Friday == Days[0])
        			{
        				this.timetable.setColumn(Days[1]-1,5,lName);
        				if(Days[2] > 0)
        				{
        					this.timetable.setColumn(Days[2]-1,5,lName);
        				}
        			}
        		}
        		var rRow = this.dsTimetable01.getRowCount();
        		for(var j=0; j<rRow; j++)
        		{
        			var name = this.dsTimetable01.getColumn(j,"lName");
        			var lsDay1 = this.dsTimetable01.getColumn(j,"lsDay1");
        			if (lsDay1 != null)
        			{
        				var Days1 = lsDay1.split(",");
        				if(this.Monday == Days1[0])
        				{
        					this.timetable.setColumn(Days1[1]-1,1,name);
        					if(Days1[2] > 0)
        					{
        						this.timetable.setColumn(Days1[2]-1,1,name);
        					}
        				}
        				if(this.Tuesday == Days1[0])
        				{
        					this.timetable.setColumn(Days1[1]-1,2,name);
        					if(Days1[2] > 0)
        					{
        						this.timetable.setColumn(Days1[2]-1,2,name);
        					}
        				}
        				if(this.Wednesday == Days1[0])
        				{
        					this.timetable.setColumn(Days1[1]-1,3,name);
        					if(Days1[2] > 0)
        					{
        						this.timetable.setColumn(Days1[2]-1,3,name);
        					}
        				}
        				if(this.Thursday == Days1[0])
        				{
        					this.timetable.setColumn(Days1[1]-1,4,name);
        					if(Days1[2] > 0)
        					{
        						this.timetable.setColumn(Days1[2]-1,4,name);
        					}
        				}
        				if(this.Friday == Days1[0])
        				{
        					this.timetable.setColumn(Days1[1]-1,5,name);
        					if(Days1[2] > 0)
        					{
        						this.timetable.setColumn(Days1[2]-1,5,name);
        					}
        				}
        			}
        			else if(lsDay1 == null)
        			{
        				continue;
        			}
        		}















        	}
        }




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_timetable_onload,this);
        };
        this.loadIncludeScript("frm_timetable.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
