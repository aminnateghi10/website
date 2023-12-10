"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(s){function n(t){return t.is('[type="checkbox"]')?t.prop("checked"):t.is('[type="radio"]')?!!s('[name="'+t.attr("name")+'"]:checked').length:t.val()}function o(t,e){this.options=e,this.validators=s.extend({},o.VALIDATORS,e.custom),this.$element=s(t),this.$btn=s('button[type="submit"], input[type="submit"]').filter('[form="'+this.$element.attr("id")+'"]').add(this.$element.find('input[type="submit"], button[type="submit"]')),this.update(),this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator",s.proxy(this.onInput,this)),this.$element.on("submit.bs.validator",s.proxy(this.onSubmit,this)),this.$element.on("reset.bs.validator",s.proxy(this.reset,this)),this.$element.find("[data-match]").each(function(){var e=s(this),t=e.data("match");s(t).on("input.bs.validator",function(t){n(e)&&e.trigger("input.bs.validator")})}),this.$inputs.filter(function(){return n(s(this))}).trigger("focusout"),this.$element.attr("novalidate",!0),this.toggleSubmit()}function e(a){return this.each(function(){var t=s(this),e=s.extend({},o.DEFAULTS,t.data(),"object"==_typeof(a)&&a),r=t.data("bs.validator");!r&&"destroy"==a||(r||t.data("bs.validator",r=new o(this,e)),"string"!=typeof a)||r[a]()})}o.VERSION="0.11.5",o.INPUT_SELECTOR=':input:not([type="hidden"], [type="submit"], [type="reset"], button)',o.FOCUS_OFFSET=20,o.DEFAULTS={delay:500,html:!1,disable:!0,focus:!0,custom:{},errors:{match:"Does not match",minlength:"Not long enough"},feedback:{success:"glyphicon-ok",error:"glyphicon-remove"}},o.VALIDATORS={native:function(t){t=t[0];if(t.checkValidity)return!t.checkValidity()&&!t.validity.valid&&(t.validationMessage||"error!")},match:function(t){var e=t.data("match");return t.val()!==s(e).val()&&o.DEFAULTS.errors.match},minlength:function(t){var e=t.data("minlength");return t.val().length<e&&o.DEFAULTS.errors.minlength}},o.prototype.update=function(){return this.$inputs=this.$element.find(o.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]')),this},o.prototype.onInput=function(t){var e=this,r=s(t.target),t="focusout"!==t.type;this.$inputs.is(r)&&this.validateInput(r,t).done(function(){e.toggleSubmit()})},o.prototype.validateInput=function(e,r){n(e);var a,o=e.data("bs.validator.errors"),i=(e.is('[type="radio"]')&&(e=this.$element.find('input[name="'+e.attr("name")+'"]')),s.Event("validate.bs.validator",{relatedTarget:e[0]}));if(this.$element.trigger(i),!i.isDefaultPrevented())return(a=this).runValidators(e).done(function(t){e.data("bs.validator.errors",t),t.length?r?a.defer(e,a.showErrors):a.showErrors(e):a.clearErrors(e),o&&t.toString()===o.toString()||(i=t.length?s.Event("invalid.bs.validator",{relatedTarget:e[0],detail:t}):s.Event("valid.bs.validator",{relatedTarget:e[0],detail:o}),a.$element.trigger(i)),a.toggleSubmit(),a.$element.trigger(s.Event("validated.bs.validator",{relatedTarget:e[0]}))})},o.prototype.runValidators=function(a){var o=[],e=s.Deferred();function i(t){return a.data(t+"-error")||((t=a[0].validity).typeMismatch?a.data("type-error"):t.patternMismatch?a.data("pattern-error"):t.stepMismatch?a.data("step-error"):t.rangeOverflow?a.data("max-error"):t.rangeUnderflow?a.data("min-error"):t.valueMissing?a.data("required-error"):null)||a.data("error")}return a.data("bs.validator.deferred")&&a.data("bs.validator.deferred").reject(),a.data("bs.validator.deferred",e),s.each(this.validators,s.proxy(function(t,e){var r=null;(n(a)||a.attr("required"))&&(a.data(t)||"native"==t)&&(r=e.call(this,a))&&(r=i(t)||r,~o.indexOf(r)||o.push(r))},this)),!o.length&&n(a)&&a.data("remote")?this.defer(a,function(){var t={};t[a.attr("name")]=n(a),s.get(a.data("remote"),t).fail(function(t,e,r){o.push(i("remote")||r)}).always(function(){e.resolve(o)})}):e.resolve(o),e.promise()},o.prototype.validate=function(){var e=this;return s.when(this.$inputs.map(function(t){return e.validateInput(s(this),!1)})).then(function(){e.toggleSubmit(),e.focusError()}),this},o.prototype.focusError=function(){var t;this.options.focus&&0!==(t=this.$element.find(".has-error:first :input")).length&&(s("html, body").animate({scrollTop:t.offset().top-o.FOCUS_OFFSET},250),t.focus())},o.prototype.showErrors=function(t){var e=this.options.html?"html":"text",r=t.data("bs.validator.errors"),t=t.closest(".form-group"),a=t.find(".help-block.with-errors"),o=t.find(".form-control-feedback");r.length&&(r=s("<ul/>").addClass("list-unstyled").append(s.map(r,function(t){return s("<li/>")[e](t)})),void 0===a.data("bs.validator.originalContent")&&a.data("bs.validator.originalContent",a.html()),a.empty().append(r),t.addClass("has-error has-danger"),t.hasClass("has-feedback"))&&o.removeClass(this.options.feedback.success)&&o.addClass(this.options.feedback.error)&&t.removeClass("has-success")},o.prototype.clearErrors=function(t){var e=t.closest(".form-group"),r=e.find(".help-block.with-errors"),a=e.find(".form-control-feedback");r.html(r.data("bs.validator.originalContent")),e.removeClass("has-error has-danger has-success"),e.hasClass("has-feedback")&&a.removeClass(this.options.feedback.error)&&a.removeClass(this.options.feedback.success)&&n(t)&&a.addClass(this.options.feedback.success)&&e.addClass("has-success")},o.prototype.hasErrors=function(){return!!this.$inputs.filter(function(){return!!(s(this).data("bs.validator.errors")||[]).length}).length},o.prototype.isIncomplete=function(){return!!this.$inputs.filter("[required]").filter(function(){var t=n(s(this));return!("string"==typeof t?s.trim(t):t)}).length},o.prototype.onSubmit=function(t){this.validate(),(this.isIncomplete()||this.hasErrors())&&t.preventDefault()},o.prototype.toggleSubmit=function(){this.options.disable&&this.$btn.toggleClass("disabled",this.isIncomplete()||this.hasErrors())},o.prototype.defer=function(t,e){if(e=s.proxy(e,this,t),!this.options.delay)return e();window.clearTimeout(t.data("bs.validator.timeout")),t.data("bs.validator.timeout",window.setTimeout(e,this.options.delay))},o.prototype.reset=function(){return this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success),this.$inputs.removeData(["bs.validator.errors","bs.validator.deferred"]).each(function(){var t=s(this),e=t.data("bs.validator.timeout");window.clearTimeout(e)&&t.removeData("bs.validator.timeout")}),this.$element.find(".help-block.with-errors").each(function(){var t=s(this),e=t.data("bs.validator.originalContent");t.removeData("bs.validator.originalContent").html(e)}),this.$btn.removeClass("disabled"),this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success"),this},o.prototype.destroy=function(){return this.reset(),this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"),this.$inputs.off(".bs.validator"),this.options=null,this.validators=null,this.$element=null,this.$btn=null,this};var t=s.fn.validator;s.fn.validator=e,s.fn.validator.Constructor=o,s.fn.validator.noConflict=function(){return s.fn.validator=t,this},s(window).on("load",function(){s('form[data-toggle="validator"]').each(function(){var t=s(this);e.call(t,t.data())})})}(jQuery);