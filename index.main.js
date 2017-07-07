'use strict';
define(function(require,exports,module){
	var zepto=require('zepto');
	var View=require('./View');
	var StaticView=require('./StaticView');
	var TemplateFromUrl=require('./TemplateFromUrl');

	var headerView=new StaticView({
		tmplName:'header',
		tmplData:{
		},
		holder:'header'	
	})

	_initAppView();//入口函数
	_bindEvents();

	function _initAppView(){
		var appTmpl=new TemplateFromUrl({
			tmplName:'app',
			tmplData:{}
		});
		var appView=new View({
			holder:'.main',
			content:appTmpl.getHtml()
		})
		appView.render(function(){
			//_bindEvents();
      execAnim('.diandi-page','fadeIn');
		});
	}
     
  function _init(){
	
  }

  function _bindEvents(){
	 	var $user_box = $('.user-box');
    var $overlay = $('.device-overlay');
    var $user_box_info = $('.user-box-info');
    $(document).on('click', '.js-edit', function () {
        $user_box.addClass('clicked');
        $overlay.addClass('active');
        $user_box_info.hide();
    });
   	$('.device-overlay').on('click', function () {
        $user_box.removeClass('clicked');
        $overlay.removeClass('active');
        $user_box_info.show();
    });
  }

  function execAnim(el,x) {
    $(el).addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      //$(this).removeClass();
    });
	};
})