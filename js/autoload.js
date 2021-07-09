const live2d_path="https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/";function loadExternalResource(i,l){return new Promise((e,s)=>{let t;if(l==="css"){t=document.createElement("link");t.rel="stylesheet";t.href=i}else if(l==="js"){t=document.createElement("script");t.src=i}if(t){t.onload=()=>e(i);t.onerror=()=>s(i);document.head.appendChild(t)}})}if(screen.width>=768){Promise.all([loadExternalResource("/css/APlayerDesktop.min.css","css"),loadExternalResource(live2d_path+"waifu.css","css"),loadExternalResource(live2d_path+"live2d.min.js","js"),loadExternalResource(live2d_path+"waifu-tips.js","js"),loadExternalResource("/css/customDesktop.css","css")]).then(()=>{initWidget({waifuPath:live2d_path+"waifu-tips.json",cdnPath:"https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/"})})}else{Promise.all([loadExternalResource("/css/APlayerMobile.min.css","css"),loadExternalResource("/css/waifu.css","css"),loadExternalResource(live2d_path+"live2d.min.js","js"),loadExternalResource(live2d_path+"waifu-tips.js","js"),loadExternalResource("/css/customMobile.css","css")]).then(()=>{initWidget({waifuPath:live2d_path+"waifu-tips.json",cdnPath:"https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/"})})}console.log(`
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
`);