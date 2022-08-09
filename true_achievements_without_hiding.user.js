// ==UserScript==
// @name         TrueAchievements without hiding
// @version      1.0a
// @description  ARE YOU AN ACHIEVEMENT WHORE?
// @author       akanesign
// @match        https://www.trueachievements.com/game/*
// @match        https://www.trueachievements.com/*/*
// @match        https://www.trueachievements.com/game/*/achievements
// @exclude      https://www.trueachievements.com/gamer/*/*
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @updateURL    https://github.com/akanesign/trueachivement/raw/main/true_achievements_without_hiding.user.js
// @downloadURL  https://github.com/akanesign/trueachivement/raw/main/true_achievements_without_hiding.user.js
// ==/UserScript==

(function() {
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
          $(this).addClass('show');
        }
      }
    )

    var skipdiv = document.querySelector(".skiptranslate");

    if(skipdiv == null) {
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