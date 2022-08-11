// ==UserScript==
// @name         TrueAchievements without hiding
// @version      1.2
// @description  ARE YOU AN ACHIEVEMENT WHORE?
// @author       akanesign
// @match        https://www.trueachievements.com/game/*
// @match        https://www.trueachievements.com/*/*
// @match        https://www.trueachievements.com/game/*/achievements
// @exclude      https://www.trueachievements.com/gamer/*/*
// @grant        GM_getValue
// @grant        GM_setValue
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @updateURL    https://github.com/akanesign/trueachivement/raw/main/true_achievements_without_hiding.user.js
// @downloadURL  https://github.com/akanesign/trueachivement/raw/main/true_achievements_without_hiding.user.js
// ==/UserScript==

(function() {
  $("#divTab_Settings").ready(function(){
    setTimeout( function() {
      var opt_Translate = true;
      var checked = '';

      if ( GM_getValue("opt_Translate") != undefined ) opt_Translate = GM_getValue("opt_Translate");
      if ( opt_Translate ) checked = 'checked';

      $("#divTab_Settings").prepend(`
        <div>
        <label>
        <i class="fa fa-google fa-fw"></i>
        <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google�|��</font></font>
        </label>
        <div class="frm-grp frm-tgl">
        <input type="checkbox" id="chkTranslate" name="chkTranslate" ${checked}><label for="chkTranslate"> </label>
        </div>
        </div>
      `);
      $(document).on('change', '#chkTranslate', function(){
        GM_setValue( "opt_Translate", $(this).is(':checked') );
      });
    }, 1000);
  });

  $(document).ready(function(){
    $("ul[class$='ach-panels']>li").filter(
      function () {
        if ( $(this).data('secret') ) {
          $(this).find('.title').css('background-color','orange');
          $(this).find('.title').css('color','#230303');
          $(this).addClass('show');
        }
      }
    )

    $("div[class$='ach-panel nw']").filter(
      function () {
        if ( $(this).data('secret') ) {
          $(this).find('.title').css('background-color','orange');
          $(this).find('.title').css('color','#230303');
          $(this).addClass('show');
        }
      }
    )

    var opt_Translate = true;
    if ( GM_getValue("opt_Translate") != undefined ) opt_Translate = GM_getValue("opt_Translate");

    var pagetitle = document.title;
    var pattern = 'achievement';
    var skipdiv = document.querySelector(".skiptranslate");

    if( opt_Translate && ( skipdiv == null ) && ( pagetitle.toLowerCase().indexOf(pattern) > -1 ) ) {
        var transfunc = function() {
            var lang = document.getElementsByTagName("html")[0].lang;
            if(lang.length == 0) {
                lang = "en";
            }

            new google.translate.TranslateElement({
                pageLanguage: lang,
                includedLanguages: "ja",
                multilanguagePage: true
            }, "google_translate_element");

            setTimeout(function() {
                var select = document.querySelector("select.goog-te-combo");
                select.value = "ja";
                select.dispatchEvent(new Event("change"));

                setTimeout(function() {
                    var bar = document.querySelector(".skiptranslate");
                    bar.style.display = "none";
                    document.body.style.top = 0;
                }, 1000);
            }, 1000);
        };

        var libele = document.createElement("script");
        libele.setAttribute("type", "text/javascript");
        libele.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
        document.body.appendChild(libele);

        var divele = document.body.insertBefore(document.createElement("div"), document.body.firstChild);
        divele.id = "google_translate_element";
        divele.style.display = "none";

        var scriptele = document.createElement("script");
        scriptele.setAttribute("type", "text/javascript");
        scriptele.text += "function googleTranslateElementInit(){(" + transfunc.toString() + ")();}";
        document.body.appendChild(scriptele);
    }
  });
})();