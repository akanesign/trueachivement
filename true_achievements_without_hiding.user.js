// ==UserScript==
// @name         TrueAchievements without hiding
// @version      3.7
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

  $("#divTab_Settings").ready(function(){
    setTimeout( function() {
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
        <div style='border-bottom:none;padding-bottom:0px;'>
        <label>
        <i class="fa fa-share-alt fa-fw"></i>
        <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Change Twitter share button to achievement completion post.</font></font><br>
        </label>
        <div class="frm-grp frm-tgl" style='border-bottom:none;padding-bottom:0px;'>
        <input type="checkbox" id="chkTwitterShare" name="chkTwitterShare" ${TwitterShare_checked}><label for="chkTwitterShare"> </label>
        </div>
        </div>
        <div style='border-bottom:none;padding-bottom:0px;'>
        Client-ID:<input type="text" id="opt_Imgurl_id" value="${opt_Imgurl_id}" style="max-width:130px;padding:0;line-height:28px;height:30px;font-size:90%"><a id="set_imgurl" ${share_style}">設定</a>
        </div>
        <div>
        <a href='https://imgur.com/register?redirect=%2F' target="_blank">imgurl registration required.</a>
        </div>
      `);
      $(document).on('change', '#chkTranslate', function(){
        GM_setValue( "opt_Translate", $(this).is(':checked') );
      });
      $(document).on('change', '#chkTwitterShare', function(){
        GM_setValue( "opt_TwitterShare", $(this).is(':checked') );
      });
      $(document).on('click', '#set_imgurl', function(){
        GM_setValue( "opt_Imgurl_id", $("#opt_Imgurl_id").val() );

        if( $("#opt_Imgurl_id").val() ) {
          $("#set_imgurl").css('cssText','background-color: #4299e1;');
        } else {
          $("#set_imgurl").css('cssText','background-color: red;');
        }
        location.reload();
      });
    }, 1000);
  });

  //Mysterious words that even adults don't know
  $("#nn_bfa_wrapper").ready(function(){
    $(".lb_holder").remove();
    $(".pro-upgrade").remove();
    $(".ad-wrap").remove();
    $(".nn_player").remove();
    $(".nn_player_w").remove();
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
  });

  $(window).on('load', function(){
    $(".lb_holder").remove();
    $(".pro-upgrade").remove();
    $(".ad-wrap").remove();
    $(".nn_player").remove();
    $(".nn_player_w").remove();
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
  });
  //

  $(document).ready(function(){
    // google translate highlight
    GM_addStyle(GM_getResourceText("GGTT"));

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

    if( query.toLowerCase().indexOf('gamerid=') != -1 ) {
      var max_gamesocre = $("div[title='Maximum Gamerscore']").first().text();
      var my_gamescore = $("div[title='Gamerscore Earned']").text();
      var game_title = $("div[class=info]>h2>a").first().text();

      var opt_TwitterShare = false;
      var opt_Imgurl_id = '';
      if ( GM_getValue("opt_TwitterShare") != undefined ) opt_TwitterShare = GM_getValue("opt_TwitterShare");
      if ( GM_getValue("opt_Imgurl_id") != undefined ) opt_Imgurl_id = GM_getValue("opt_Imgurl_id");

      if ( opt_TwitterShare && opt_Imgurl_id && ( max_gamesocre == my_gamescore ) ) {
        $("span[class='twitter']").attr('title', '実績をコンプリートしたよ！');
        $("span[class='twitter']").css('cssText','background-color: green; !important;');
        $("span[class='twitter']").removeAttr("onclick");
        $("span[class='twitter']>i").removeClass('fa-twitter');
        $("span[class='twitter']>i").addClass('fa-trophy');

        $("span[class='twitter']").on("click", function() {
          $(this).prop('disabled',true);
          var achivement_image = $("meta[name ='twitter:image']").attr('content');
          var achivement_image_url = '';
          var base64Data = '';
          toBase64( achivement_image, function( base64Data ){
            $.ajax({
              url: 'https://api.imgur.com/3/image',
              async: false,
              method: 'POST',
              headers: {
                "Authorization": 'Client-ID ' + opt_Imgurl_id
              },
             data: {
               image: base64Data,
               type: 'base64'
             }
           }).done(function(resp){
             achivement_image_url = 'https://imgur.com/' + resp.data.id;
             window.open( 'https://twitter.com/intent/tweet?text=' + game_title + 'の実績をコンプリートしたよ！&url=' + encodeURI( achivement_image_url ), '_blank' );
           }).fail(function(error){
             window.open( 'https://twitter.com/intent/tweet?text=' + game_title + 'の実績をコンプリートしたよ！', '_blank' );
             $(this).prop('disabled',false);
           });
         });
        });
      }
    }

    var opt_Translate = true;
    if ( GM_getValue("opt_Translate") != undefined ) opt_Translate = GM_getValue("opt_Translate");

    var skipdiv = document.querySelector(".skiptranslate");

    if( opt_Translate && ( skipdiv == null ) && ( url.toLowerCase().indexOf('game.aspx') != -1 || ( url.toLowerCase().indexOf('gamer/') == -1 ) && ( url.toLowerCase().indexOf('.aspx') == -1 ) ) ) {
        var transfunc = function() {

            new google.translate.TranslateElement({
                pageLanguage: "en",
                includedLanguages: "ja",
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                multilanguagePage: true
            }, "google_translate_element");

            var removePopup = document.getElementById('goog-gt-tt');
            removePopup.parentNode.removeChild(removePopup);

            setTimeout(function() {
                //var select = document.querySelector("select.goog-te-combo");
                //select.value = "ja";
                //select.dispatchEvent(new Event("change"));

                setTimeout(function() {
                    var bar = document.querySelector(".skiptranslate");
                    //bar.style.display = "none";
                    document.body.style.top = 0;
                }, 1000);
            }, 1000);

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
