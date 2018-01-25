"use strict";StackExchange.imageUploader=function(){var e=window.URL||window.webkitURL,t={},n=function(){var e,t,n,i,r=window.document,o=window.self;o.innerHeight&&o.scrollMaxY?(e=r.body.scrollWidth,t=o.innerHeight+o.scrollMaxY):r.body.scrollHeight>r.body.offsetHeight?(e=r.body.scrollWidth,t=r.body.scrollHeight):(e=r.body.offsetWidth,t=r.body.offsetHeight),o.innerHeight?(n=o.innerWidth,i=o.innerHeight):r.documentElement&&r.documentElement.clientHeight?(n=r.documentElement.clientWidth,i=r.documentElement.clientHeight):r.body&&(n=r.body.clientWidth,i=r.body.clientHeight);var a=Math.max(e,n),s=Math.max(t,i);return[a,s,n,i]},i=function(){$(".wmd-prompt-background").remove()},r=function(){var e=window.document,t=window.navigator,i={"isIE":/msie/.test(t.userAgent.toLowerCase()),"isIE_5or6":/msie [56]/.test(t.userAgent.toLowerCase()),"isOpera":/opera/.test(t.userAgent.toLowerCase())},r=e.createElement("div"),o=r.style;r.className="wmd-prompt-background",o.position="absolute",o.top="0",o.zIndex="1000",i.isIE?o.filter="alpha(opacity=50)":o.opacity="0.5";var a=n();return o.height=a[1]+"px",i.isIE?(o.left=e.documentElement.scrollLeft,o.width=e.documentElement.clientWidth):(o.left="0",o.width="100%"),e.body.appendChild(r),r};return{"createImageUploadBackground":r,"removeImageUploadBackground":i,"uploadImageDialog":function(n,i){var r={"uploadUrl":"/upload/image?https=true"};"string"===$.type(i)&&(i={"uploadUrl":i}),i=$.extend(r,i);var o,a="upload-iframe-"+(new Date).getTime(),s=window.FileReader&&window.FormData,c=s&&"ondrop"in window,u="/render/image-upload?uploadUrl={0}&canDragDrop={1}".formatUnicorn(encodeURIComponent(i.uploadUrl),c?"true":"false"),l=$('<div class="modal image-upload wmd-prompt-dialog auto-center" tabindex="-1"></div>').addClass("async-load").data("load-url",u),d=0,p=function(e){l&&l.fadeOutAndRemove(),$("body").off("keydown",w.checkEscape).off("paste",w.paste),void 0!==e&&n(e)},f=function(e){return 0===e.type.indexOf("image/")},h=function(e){var t;return e.items&&(t=$.grep(e.items,f),t.length>0)?t[0].getAsFile():e.files&&(t=$.grep(e.files,f),t.length>0)?t[0]:void 0},g=function(e,t){var n=l.find("."+e);n.find(".tab-page").hide(),n.find("."+e+"-"+t).show(),n.data("active-tab",t)},m=function(e){var t=l.find("."+e);return t.data("active-tab")},v=function(){window.closeDialog=p,window.displayUploadError=b.uploadError},b={"resetInputs":function(){l.find(".modal-input-file, .modal-input-url").prop("disabled",!1).attr("value","")},"uploadError":function(e){b.resetInputs(),l.find(".modal-options-error .modal-options-error-message").text(e),g("modal-options","error")},"ajaxResult":function(e){$("#"+a).contents().find("html").html(e)},"ajaxError":function(e,t,n){b.uploadError(function(e){return"Request returned an error: ["+e.status+"] "+e.error}({"status":t,"error":n}))}},w={"showLink":function(e){e&&e.preventDefault(),g("modal-options","url"),l.find(".modal-input-url").focus()},"resetView":function(e){e&&e.preventDefault(),g("modal-dropzone","default"),g("modal-options","default"),l.find(".modal-cta-submit").prop("disabled",!0),l.find(".modal-dropzone-preview").empty(),l.find(".modal-input-file").val(""),b.resetInputs(),d=0,o.removeClass("hover"),l.find("form").off("submit").on("submit",w.oldSchoolSubmit),l.find("form input[name=fkey]").val(StackExchange.options.user.fkey)},"inputFileOrUrl":function(){var e=!!l.find(".user-input").filter(function(){return this.value.length}).length;l.find(".modal-cta-submit").prop("disabled",!e)},"disablePasteHandling":function(){$("body").off("paste",w.previewImage)},"enablePasteHandling":function(){$("body").on("paste",{"property":"clipboardData"},w.previewImage)},"selectFile":function(e){e.preventDefault(),l.find(".modal-input-file").click()},"clickFile":function(e){e.stopPropagation()},"previewImage":function(t){t.preventDefault();var n,i,r,o=h(t.originalEvent[t.data.property]);o&&(n=o.size>=2097152,i=l.find(".modal-dropzone-preview"),i.empty(),r=e.createObjectURL(o),$("<img>").attr("src",r).css({"maxWidth":i.css("width"),"maxHeight":i.css("height")}).on("load",{"url":r},w.loadPreviewImage).appendTo(i),l.find("form").off("submit").on("submit",o,w.ajaxSubmit),l.find(".modal-cta-submit").prop("disabled",n),g("modal-dropzone","preview"),g("modal-options",n?"toobig":"preview"))},"dragEnter":function(e){e.preventDefault(),d++,o.addClass("hover")},"dragLeave":function(){0===--d&&o.removeClass("hover")},"clickClose":function(e){e.preventDefault(),p(null)},"loadPreviewImage":function(t){e.revokeObjectURL(t.data.url)},"oldSchoolSubmit":function(e){var t="url"===m("modal-options");g("modal-options","uploading"),l.find(".modal-input-file").prop("disabled",t),l.find(".modal-input-url").prop("disabled",!t),e.target.target=a,v()},"ajaxSubmit":function(e){e.preventDefault(),g("modal-options","uploading");var t=new window.FormData;t.append("file",e.data),t.append("fkey",StackExchange.options.user.fkey),v(),$.ajax({"url":i.uploadUrl,"data":t,"cache":!1,"contentType":!1,"processData":!1,"type":"POST","success":b.ajaxResult,"error":b.ajaxError})},"checkEscape":function(e){27===e.which&&(e.preventDefault(),p(null))}},x=function(){l.css("height","auto"),l.find(".modal-options-uploading p").addSpinner(),l.find(".modal-options-default a").click(w.showLink),l.find(".modal-options-cancel").click(w.resetView),l.find(".modal-input-file").on("click",w.clickFile).on("change",w.inputFileOrUrl);var e=l.find(".modal-input-url").on("input keydown",w.inputFileOrUrl);l.find(".modal-dropzone-default").click(w.selectFile),s&&(l.find(".modal-input-file").change({"property":"target"},w.previewImage),l.find(".modal-input-url").focus(w.disablePasteHandling).blur(w.enablePasteHandling),w.enablePasteHandling()),c&&(o=l.find(".modal-dropzone-default").on("dragenter",w.dragEnter).on("dragleave",w.dragLeave).on("dragover",!1).on("drop",{"property":"dataTransfer"},w.previewImage)),l.find(".modal-close").click(w.clickClose),w.resetView(),l.focus(),i.imageUrl&&(w.showLink(),e.val(i.imageUrl),w.inputFileOrUrl())},k=function(){l.asyncLoad({"callback":function(){y(l),x()},"cache":t})},y=function(e){$('<iframe style="display: none;" src="about:blank" />').attr("id",a).attr("name",a).appendTo(e)};return l.appendTo("body").center().fadeIn("fast").promise().done(k),l.on("popupClose",w.disablePasteHandling),$("body").on("keydown",w.checkEscape),!0}}}();