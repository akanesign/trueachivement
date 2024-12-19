// ==UserScript==
// @name         TrueAchievement Revealed
// @version      5.2
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
            <div style='border-bottom:none;padding-bottom:0px;'>
            <label>
            <i class="fa fa-share-alt fa-fw"></i>
            <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Change Twitter/BlueSky share button to achievement completion post.</font></font><br>
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
        clearInterval(checkElement);
      }
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
    $(".gh-btn .gh").remove();
    $("#ads_4283351906").remove();
    $('.avp-player-ui').children().contents().unwrap();
    $('.avp-body .avp-shadow').remove();
    $('#nn_mpu2').remove();
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
    $(".gh-btn .gh").remove();
    $("#ads_4283351906").remove();
    $('.avp-player-ui').children().contents().unwrap();
    $('.avp-body .avp-shadow').remove();
    $('#nn_mpu2').remove();
  });
  //

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

        $("span[class='email']").attr('title', '実績をコンプリートしたよ！');
        $("span[class='email']").css('cssText','background-color: green; !important;');
        $("span[class='email']").removeAttr("onclick");
        $("span[class='email']>i").removeClass('fa-envelope');
        $("span[class='email']>i").addClass('fa-bluesky');
        $("span[class='email']").on("click", function() {
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
             window.open( 'https://bsky.app/intent/compose?text=' + game_title + 'の実績をコンプリートしたよ！ ' + encodeURI( achivement_image_url ), '_blank' );
           }).fail(function(error){
             window.open( 'https://bsky.app/intent/compose?text=' + game_title + 'の実績をコンプリートしたよ！', '_blank' );
             $(this).prop('disabled',false);
           });
         });
        });
      } else {
          $("span[class='email']").attr('title', 'BlueSkyでシェア');
          $("span[class='email']").css('cssText','background-color: #1e90ff; !important;');
          $("span[class='email']").removeAttr("onclick");
          $("span[class='email']>i").removeClass('fa-envelope');
          $("span[class='email']>i").addClass('fa-bluesky');
          $("span[class='email']").on("click", function() {
            var sharetext = $("meta[property='og:url']").attr('content');
            window.open( 'https://bsky.app/intent/compose?text=Check out this game on TrueAchievements ' + encodeURI( sharetext ), '_blank' );
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
