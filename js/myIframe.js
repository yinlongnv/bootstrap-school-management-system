function iframeHeight() {
        var myIframe = document.getElementById("myIframe");
        myIframe.width = "100%";
        myIframe.height = document.documentElement.clientHeight + 100;
      }
      window.onresize = function() {
        iframeHeight();
      };
      $(function() {
        iframeHeight();
      });