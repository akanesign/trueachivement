// ==UserScript==
// @name         TrueAchievement Revealed
// @version      5.7
// @description  ARE YOU AN ACHIEVEMENT WHORE?
// @author       akanesign
// @match        https://www.trueachievements.com/
// @match        https://www.trueachievements.com/*
// @match        https://www.trueachievements.com/*/*
// @match        https://www.trueachievements.com/*/*/achievements
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM.xmlHttpRequest
// @connect      img.trueachievements.com
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @updateURL    https://github.com/akanesign/trueachivement/raw/main/true_achievements_without_hiding.user.js
// @downloadURL  https://github.com/akanesign/trueachivement/raw/main/true_achievements_without_hiding.user.js
// @resource     GGTT https://github.com/akanesign/trueachivement/raw/main/css/google_tt.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

(function() {
  var url = location.pathname;
  var query = location.search;

  $("iframe").not("[class*='skiptranslate']").not("[src*='translate.googleapis.com']").remove();

  const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
          $(mutation.addedNodes).each(function() {
              if ( $(this).is("iframe") && !$(this).is("[class*='skiptranslate']") && !$(this).is("[src*='translate.googleapis.com']") ) {
                  var src = $(this).attr('src');
                  if (!src || !src.includes('youtube.com')) {
                      $(this).remove();
                  }
              }
              $(".lb_holder").remove();
              $(".pro-upgrade").remove();
              $(".ad-wrap").remove();
              $(".nn_player").remove();
              $(".nn_player_w").remove();
              $("#nn_player").remove();
              $("#nn_player_w").remove();
              $(".nn-sticky").remove();
              $("#nn_mobile_lb1_wrap").remove();
              $("#nn_skinl").remove();
              $("#nn_skinr").remove();
              $("#nn_lb2_wrap").remove();
              $("#nn_bfa_wrapper").remove();
              $("#primis_playerSekindoSPlayer6301082005443").remove();
              $("#nn_lb2").remove();
              $("#nn_lb3").remove();
              $("#nn_lb4").remove();
              $("#nn_lb5").remove();
              $(".ad-center").remove();
              $("#aniBox").remove();
              $(".AV64d0c3441477ebeb0e037ef4").remove();
              $("#ad_unit").remove();
              $(".gh-btn .gh").remove();
              $("#ads_4283351906").remove();
              $('.avp-player-ui').children().contents().unwrap();
              $('.avp-body .avp-shadow').remove();
              $('#nn_mpu2').remove();
              $('#mpu-1').remove();
              $('#mpu-2').remove();
              $('#ta-ab-overlay').remove();
              $(".dyn-lb").remove();
          });
      });
  });
  observer.observe(document.body, { childList: true, subtree: true });

  $("#divTab_Settings").ready(function(){

    const checkElement = setInterval(function () {
      if ($("#divTab_Settings").length > 0) {
        var opt_Translate = true;
        var opt_TwitterShare = false;
        var opt_Imgurl_id = '';
        var Translate_checked = '';
        var TwitterShare_checked = '';
        var share_style= '';

        if ( GM_getValue("opt_Translate") != undefined ) opt_Translate = GM_getValue("opt_Translate");
          if ( GM_getValue("opt_TwitterShare") != undefined ) opt_TwitterShare = GM_getValue("opt_TwitterShare");
          if ( GM_getValue("opt_Imgurl_id") != undefined ) opt_Imgurl_id = GM_getValue("opt_Imgurl_id");
          if ( opt_Translate ) Translate_checked = 'checked';
          if ( opt_TwitterShare ) TwitterShare_checked = 'checked';
          if ( !opt_Imgurl_id ) share_style = "style='background-color:red;'";

          $("#divTab_Settings").prepend(`
            <div>
            <label>
            <i class="fa fa-google fa-fw"></i>
            <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google Translate</font></font>
            </label>
            <div class="frm-grp frm-tgl" >
            <input type="checkbox" id="chkTranslate" name="chkTranslate" ${Translate_checked}><label for="chkTranslate"> </label>
            </div>
            </div>
          `);
          $(document).on('change', '#chkTranslate', function(){
            GM_setValue( "opt_Translate", $(this).is(':checked') );
          });
         clearInterval(checkElement);
       }
    }, 1000);
  });

  $(document).ready(function(){
    // google translate highlight
    GM_addStyle(GM_getResourceText("GGTT"));
    GM_addStyle(`
      .fa-bluesky {
        display: inline-block;
        width: 1em;
        height: 1em;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565C.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479c.815 2.736 3.713 3.66 6.383 3.364q.204-.03.415-.056q-.207.033-.415.056c-3.912.58-7.387 2.005-2.83 7.078c5.013 5.19 6.87-1.113 7.823-4.308c.953 3.195 2.05 9.271 7.733 4.308c4.267-4.308 1.172-6.498-2.74-7.078a9 9 0 0 1-.415-.056q.21.026.415.056c2.67.297 5.568-.628 6.383-3.364c.246-.828.624-5.79.624-6.478c0-.69-.139-1.861-.902-2.206c-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8'/%3E%3C/svg%3E");
        background-color: currentColor;
        -webkit-mask-image: var(--svg);
        mask-image: var(--svg);
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
      }
    `);
    $("ul[class$='ach-panels']>li").filter(
      function () {
        if ( $(this).data('secret') ) {
          $(this).find('.title').css('background-color','orange');
          $(this).find('.title').css('color','#230303');
          $(this).addClass('show');
        }
      }
    )

    $("div[class$='ach-panel']").filter(
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

    var skipdiv = document.querySelector(".skiptranslate");

    if( opt_Translate && ( skipdiv == null ) && ( url.toLowerCase().indexOf('game.aspx') != -1 || ( url.toLowerCase().indexOf('gamer/') == -1 ) && ( url.toLowerCase().indexOf('.aspx') == -1 ) ) ) {
        var transfunc = function() {

            new google.translate.TranslateElement({
                pageLanguage: "en",
                includedLanguages: "ja",
                //layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                multilanguagePage: true
            }, "google_translate_element");

            var removePopup = document.getElementById('goog-gt-tt');
            removePopup.parentNode.removeChild(removePopup);

        };

        var libele = document.createElement("script");
        libele.setAttribute("type", "text/javascript");
        libele.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit&" + ( new Date() ).getTime() );
        document.body.appendChild(libele);

        var divele = document.body.insertBefore(document.createElement("div"), document.body.firstChild);
        divele.id = "google_translate_element";
        divele.style.display = "none";

        var scriptele = document.createElement("script");
        scriptele.setAttribute("type", "text/javascript");
        scriptele.text += "function googleTranslateElementInit(){(" + transfunc.toString() + ")();}";
        document.body.appendChild(scriptele);

        setTimeout(function() {
            var select = document.querySelector("select.goog-te-combo");
            select.value = "ja";
            select.dispatchEvent(new Event("change"));

            setTimeout(function() {
                var bar = document.querySelector(".skiptranslate");
                //bar.style.display = "none";
                //document.body.style.top = 0;
            }, 1000);
        }, 1000);

    }
  });
})();

function toBase64(url, callback){
  GM.xmlHttpRequest({
    method: "GET",
    url: url,
    headers: { referer: url, origin: url },
    withCredentials: true,
    responseType: 'blob',
    onload: function(response) {
      callback( btoa( response.responseText ) );
    }
  });
}
