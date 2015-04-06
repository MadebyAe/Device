String.prototype.strpos = function(e) {
    return -1 != this.indexOf(e)
}, Device = function() {
    function Device() {
        function e(e) {
            var t = document.createElement("div"),
                i = "Khtml ms O Moz Webkit".split(" "),
                n = i.length;
            if (e in t.style) return !0;
            for (e = e.replace(/^[a-z]/, function(e) {
                    return e.toUpperCase()
                }); n--;)
                if (i[n] + e in t.style) return !0;
            return !1
        }
        var t = this;
        this.agent = navigator.userAgent.toLowerCase(), this.detect = function(e) {
            "string" == typeof e && (e = [e]);
            for (var t = 0; t < e.length; t++)
                if (this.agent.strpos(e[t])) return !0;
            return !1
        }, this.browser = {}, this.browser.chrome = this.detect("chrome"), this.browser.safari = !this.browser.chrome && this.detect("safari"), this.browser.firefox = this.detect("firefox"), this.browser.ie = this.detect("msie"), this.browser.old = this.detect(["msie 6", "msie 7", "msie 8", "firefox/3", "safari/3", "safari/4"]), this.browser.version = function() {
            return t.browser.chrome ? Number(t.agent.split("chrome/")[1].split(".")[0]) : t.browser.firefox ? Number(t.agent.split("firefox/")[1].split(".")[0]) : t.browser.safari ? Number(t.agent.split("version/")[1].split(".")[0].charAt(0)) : t.browser.ie ? Number(t.agent.split("msie ")[1].split(".")[0]) : void 0
        }(), this.mobile = "ontouchstart" in window ? {} : !1, this.mobile && (this.mobile.tablet = window.innerWidth >= 640 || window.innerHeight >= 640, this.mobile.phone = !this.mobile.tablet, this.mobile.motion = "undefined" != typeof window.DeviceMotionEvent, this.mobile.sticky = t.browser.safari || (window.CSS && window.CSS.supports("position", "sticky") ? !0 : !1)), this.screen = function() {
            var e = window.innerWidth >= 1200 ? "desktop" : window.innerWidth < 1024 && window.innerWidth >= 640 ? "tablet" : "mobile";
            return e
        }(), this.system = {}, this.system.flash = !!(navigator.mimeTypes["application/x-shockwave-flash"] || window.ActiveXObject && new ActiveXObject("ShockwaveFlash.ShockwaveFlash")), this.system.webworker = "undefined" != typeof window.Worker, this.system.websocket = "undefined" != typeof window.WebSocket, this.system.offline = !!window.applicationCache, this.system.geolocation = "geolocation" in navigator, this.system.pushstate = "undefined" != typeof window.history.pushState, this.system.hashchange = "undefined" != typeof window.onhashchange, this.system.webrtc = !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia), this.system.webaudio = "undefined" != typeof window.webkitAudioContext || "undefined" != typeof window.AudioContent, this.system.fullscreen = function() {
            var e = document.documentElement;
            return !!(e.requestFullscreen || e.mozRequestFullScreen || e.webkitRequestFullScreen)
        }(), this.system.language = function() {
            return navigator.language = navigator.language || navigator.userLanguage && navigator.userLanguage.replace(/-[a-z]{2}$/, String.prototype.toUpperCase) || "en-us", navigator.language
        }(), this.system.localStorage = function() {
            try {
                return "localStorage" in window && null !== window.localStorage
            } catch (e) {
                return !1
            }
        }(), this.system.os = function() {
            return t.detect("mac os") ? "mac" : t.detect("windows nt 6.2") ? "windows8" : t.detect("windows nt 6.1") ? "windows7" : t.detect("windows nt 6.0") ? "vista" : t.detect("windows nt 5.1") ? "xp" : t.detect("linux") ? "linux" : "undetected"
        }(), this.media = {}, this.media.audio = function() {
            return document.createElement("audio").canPlayType ? t.detect(["firefox", "opera"]) ? "ogg" : "mp3" : !1
        }(), this.media.video = function() {
            var e = document.createElement("video");
            return e.canPlayType ? t.mobile ? "mp4" : t.browser.chrome ? "webm" : t.browser.firefox || t.browser.opera ? e.canPlayType('video/webm; codecs="vorbis,vp8"') ? "webm" : "ogv" : "mp4" : !1
        }(), this.graphics = {}, this.graphics.svg = "undefined" != typeof window.SVGSVGElement, this.graphics.retina = window.devicePixelRatio > 1 ? !0 : !1, this.graphics.webgl = "undefined" != typeof window.WebGLRenderingContext, this.graphics.canvas = function() {
            var e = document.createElement("canvas");
            return e.getContext ? !0 : !1
        }(), this.styles = {}, this.styles.filter = e("filter") && !t.browser.firefox, this.styles.needsFix = function() {
            return t.detect("msie 7") ? "ie7" : t.detect("msie 8") ? "ie8" : !1
        }(), this.styles.vendor = function() {
            return t.browser.firefox ? "-moz-" : t.browser.opera ? "-o-" : t.browser.ie ? "-ms-" : "-webkit-"
        }(), this.tween = {}, this.tween.transition = e("transition"), this.tween.css2d = e("transform"), this.tween.css3d = e("perspective"), this.tween.complete = function() {
            return t.browser.firefox || t.detect("msie 10") ? "transitionend" : t.browser.opera ? "oTransitionEnd" : t.browser.ie ? "msTransitionEnd" : "webkitTransitionEnd"
        }()
    }
    return new Device
}();
