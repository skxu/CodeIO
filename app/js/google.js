var _ = _ || {};
(function (_) {
    var window = this;
    try {
        _.k = function (a) {
            throw a;
        };
        _.l = void 0;
        _.n = !0;
        _.p = null;
        _.t = !1;
        _.da = function () {
            return function (a) {
                return a
            }
        };
        _.ea = function () {
            return function () {}
        };
        _.ia = function (a) {
            return function (b) {
                this[a] = b
            }
        };
        _.u = function (a) {
            return function () {
                return this[a]
            }
        };
        _.x = function (a) {
            return function () {
                return a
            }
        };
        _.G = function (a, b, c) {
            a = a.split(".");
            c = c || _.la;
            a[0] in c || !c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || b === _.l ? c = c[d] ? c[d] : c[d] = {} : c[d] = b
        };
        _.ma = function (a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
                else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        };
        _.qa = function (a) {
            return a !== _.l
        };
        _.ra = function (a) {
            return "array" == (0, _.ma)(a)
        };
        _.ta = function (a) {
            var b = (0, _.ma)(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        };
        _.xa = function (a) {
            return "string" == typeof a
        };
        var Aa = function (a, b, c) {
            return a.call.apply(a.bind, arguments)
        };
        var Ca = function (a, b, c) {
            a || (0, _.k)(Error());
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function () {
                return a.apply(b, arguments)
            }
        };
        _.H = function (a, b, c) {
            _.H = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Aa : Ca;
            return _.H.apply(_.p, arguments)
        };
        _.Ea = function (a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function () {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        };
        _.I = function (a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.O = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        };
        var _DumpException = function (a) {
            (0, _.k)(a)
        };
        _.Ga = _.Ga || {};
        _.la = this;
        _.Ia = "closure_uid_" + (1E9 * Math.random() >>> 0);
        _.Ka = Date.now || function () {
            return +new Date
        };
        Function.prototype.bind = Function.prototype.bind || function (a, b) {
            if (1 < arguments.length) {
                var c = Array.prototype.slice.call(arguments, 1);
                c.unshift(this, a);
                return _.H.apply(_.p, c)
            }
            return (0, _.H)(this, a)
        };
        _.La = window.gapi || {};
        _.Ma = window.gadgets || {};
        _.Qa = window.osapi = window.osapi || {};
        _.google = window.google || {};
    } catch (e) {
        _._DumpException(e)
    }
    try {
        window.___jsl = window.___jsl || {};
        (window.___jsl.cd = window.___jsl.cd || []).push({
            gwidget: {
                parsetags: "explicit"
            },
            appsapi: {
                plus_one_service: "/plus/v1"
            },
            client: {
                jsonpOverride: _.t
            },
            csi: {
                rate: 0.01
            },
            poshare: {
                hangoutContactPickerServer: "https://plus.google.com"
            },
            gappsutil: {
                required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
                display_on_page_ready: _.t
            },
            appsutil: {
                required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
                display_on_page_ready: _.t
            },
            "oauth-flow": {
                authUrl: "https://accounts.google.com/o/oauth2/auth",
                proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
                redirectUri: "postmessage"
            },
            iframes: {
                sharebox: {
                    params: {
                        json: "&"
                    },
                    url: ":socialhost:/:session_prefix:_/sharebox/dialog"
                },
                plus: {
                    url: ":socialhost:/u/:session_index:/_/pages/badge"
                },
                ":socialhost:": "https://apis.google.com",
                card: {
                    params: {
                        s: "#",
                        userid: "&"
                    },
                    url: ":socialhost:/:session_prefix:_/hovercard/internalcard"
                },
                ":signuphost:": "https://plus.google.com",
                plusone: {
                    url: ":socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1"
                },
                plus_share: {
                    url: ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true"
                },
                plus_circle: {
                    url: ":socialhost:/:session_prefix:_/widget/plus/circle"
                },
                configurator: {
                    url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator"
                },
                appcirclepicker: {
                    url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
                },
                ":source:": "1p"
            },
            poclient: {
                update_session: "google.updateSessionCallback"
            },
            "googleapis.config": {
                methods: {
                    "pos.plusones.list": _.n,
                    "pos.plusones.get": _.n,
                    "pos.plusones.insert": _.n,
                    "pos.plusones.delete": _.n,
                    "pos.plusones.getSignupState": _.n
                },
                requestCache: {
                    enabled: _.n
                },
                versions: {
                    pos: "v1"
                },
                rpc: "/rpc",
                root: "https://content.googleapis.com",
                "root-1p": "https://clients6.google.com",
                sessionCache: {
                    enabled: _.n
                },
                transport: {
                    isProxyShared: _.n
                },
                xd3: "/static/proxy.html",
                developerKey: "AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ",
                auth: {
                    useInterimAuth: _.t
                }
            },
            report: {
                apis: ["iframes\\..*", "gadgets\\..*", "gapi\\.appcirclepicker\\..*", "gapi\\.client\\..*"],
                rate: 1E-4
            }
        });

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Sa = function (a, b, c) {
            return a[b] = a[b] || c
        };
        _.Ta = function (a) {
            return "function" === typeof a
        };
        _.Ua = function (a) {
            return String(a).replace(Wa, "&amp;").replace(Ya, "&lt;").replace(Za, "&gt;").replace($a, "&quot;").replace(ab, "&#39;")
        };
        _.cb = function () {
            var a;
            if ((a = Object.create) && _.db.test(a)) a = a(_.p);
            else {
                a = {};
                for (var b in a) a[b] = _.l
            }
            return a
        };
        _.eb = function (a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        };
        _.fb = function (a, b) {
            a = a || {};
            for (var c in a)(0, _.eb)(a, c) && (b[c] = a[c])
        };
        _.gb = function (a, b) {
            a || (0, _.k)(Error(b || ""))
        };
        _.hb = function (a, b, c) {
            var d = RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g");
            b = RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g");
            if (a = a && (d.exec(a) || b.exec(a))) try {
                c = (0, window.decodeURIComponent)(a[2])
            } catch (f) {}
            return c
        };
        _.jb = function (a) {
            a = a.match(lb);
            var b = (0, _.cb)();
            b.nA = a[1];
            b.He = a[3] ? [a[3]] : [];
            b.bk = a[5] ? [a[5]] : [];
            return b
        };
        _.mb = function (a) {
            a = a ? a.split("&") : [];
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c].split("=", 2);
                b.push([(0, window.decodeURIComponent)(d[0]), (0, window.decodeURIComponent)(d[1])])
            }
            return b
        };
        _.ob = function (a) {
            return a.nA + (0 < a.He.length ? "?" + a.He.join("&") : "") + (0 < a.bk.length ? "#" + a.bk.join("&") : "")
        };
        var pb = function (a, b) {
            var c = [];
            if (a)
                for (var d in a)
                    if ((0, _.eb)(a, d) && a[d] != _.p) {
                        var f = b ? b(a[d]) : a[d];
                        c.push((0, window.encodeURIComponent)(d) + "=" + (0, window.encodeURIComponent)(f))
                    }
            return c
        };
        _.qb = function (a, b, c, d) {
            a = (0, _.jb)(a);
            a.He.push.apply(a.He, pb(b, d));
            a.bk.push.apply(a.bk, pb(c, d));
            return (0, _.ob)(a)
        };
        _.rb = function (a, b) {
            var c = "";
            2E3 < b.length && (c = b.substring(2E3), b = b.substring(0, 2E3));
            var d = a.createElement("div"),
                f = a.createElement("a");
            f.href = b;
            d.appendChild(f);
            d.innerHTML = d.innerHTML;
            b = String(d.firstChild.href);
            d.parentNode && d.parentNode.removeChild(d);
            return b + c
        };
        _.sb = function (a) {
            return tb.test(a)
        };
        _.ub = function (a, b, c) {
            xb(a, b, c, "add", "at")
        };
        _.yb = function (a, b, c) {
            xb(a, b, c, "remove", "de")
        };
        var xb = function (a, b, c, d, f) {
            if (a[d + "EventListener"]) a[d + "EventListener"](b, c, _.t);
            else if (a[f + "tachEvent"]) a[f + "tachEvent"]("on" + b, c)
        };
        _.Ab = function (a) {
            for (; a.firstChild;) a.removeChild(a.firstChild)
        };
        _.Bb = function (a) {
            return _.Cb.dpo ? _.Cb.h : (0, _.hb)(a, "jsh", _.Cb.h)
        };
        _.Gb = function (a) {
            return (0, _.hb)(a, "_bsh", _.Cb.bsh)
        };
        _.Hb = function () {
            return _.Cb.onl
        };
        _.Ib = function (a) {
            _.Cb.onl = a
        };
        _.Jb = function () {
            return !!_.Cb.oa
        };
        var Kb = function (a) {
            var b = window.___jsl = window.___jsl || {};
            b[a] = b[a] || [];
            return b[a]
        };
        var Ob = function (a) {
            var b = window.___jsl = window.___jsl || {};
            b.cfg = !a && b.cfg || {};
            return b.cfg
        };
        var Pb = function (a) {
            return "object" === typeof a && /\[native code\]/.test(a.push)
        };
        var Qb = function (a, b) {
            if (b)
                for (var c in b) b.hasOwnProperty(c) && (a[c] && b[c] && "object" === typeof a[c] && "object" === typeof b[c] && !Pb(a[c]) && !Pb(b[c]) ? Qb(a[c], b[c]) : b[c] && "object" === typeof b[c] ? (a[c] = Pb(b[c]) ? [] : {}, Qb(a[c], b[c])) : a[c] = b[c])
        };
        var Rb = function (a) {
            if (a && !/^\s+$/.test(a)) {
                for (; 0 == a.charCodeAt(a.length - 1);) a = a.substring(0, a.length - 1);
                var b;
                try {
                    b = window.JSON.parse(a)
                } catch (c) {}
                if ("object" === typeof b) return b;
                try {
                    b = (new Function("return (" + a + "\n)"))()
                } catch (d) {}
                if ("object" === typeof b) return b;
                try {
                    b = (new Function("return ({" + a + "\n})"))()
                } catch (f) {}
                return "object" === typeof b ? b : {}
            }
        };
        var Sb = function (a) {
            Ob(_.n);
            var b = window.___gcfg,
                c = Kb("cu");
            if (b && b !== window.___gu) {
                var d = {};
                Qb(d, b);
                c.push(d);
                window.___gu = b
            }
            var b = Kb("cu"),
                f = window.document.scripts || window.document.getElementsByTagName("script") || [],
                d = [],
                g = [];
            g.push.apply(g, Kb("us"));
            for (var h = 0; h < f.length; ++h)
                for (var m = f[h], q = 0; q < g.length; ++q) m.src && 0 == m.src.indexOf(g[q]) && d.push(m);
            0 == d.length && 0 < f.length && f[f.length - 1].src && d.push(f[f.length - 1]);
            for (f = 0; f < d.length; ++f) d[f].getAttribute("gapi_processed") || (d[f].setAttribute("gapi_processed",
                _.n), (g = d[f]) ? (h = g.nodeType, g = 3 == h || 4 == h ? g.nodeValue : g.textContent || g.innerText || g.innerHTML || "") : g = _.l, (g = Rb(g)) && b.push(g));
            a && (d = {}, Qb(d, a), c.push(d));
            d = Kb("cd");
            a = 0;
            for (b = d.length; a < b; ++a) Qb(Ob(), d[a]);
            d = Kb("ci");
            a = 0;
            for (b = d.length; a < b; ++a) Qb(Ob(), d[a]);
            a = 0;
            for (b = c.length; a < b; ++a) Qb(Ob(), c[a])
        };
        _.N = function (a, b) {
            if (!a) return Ob();
            for (var c = a.split("/"), d = Ob(), f = 0, g = c.length; d && "object" === typeof d && f < g; ++f) d = d[c[f]];
            return f === c.length && d !== _.l ? d : b
        };
        _.Tb = function (a, b) {
            var c = a;
            if ("string" === typeof a) {
                for (var d = c = {}, f = a.split("/"), g = 0, h = f.length; g < h - 1; ++g) var m = {}, d = d[f[g]] = m;
                d[f[g]] = b
            }
            Sb(c)
        };
        var Ub = function () {
            var a = window.__GOOGLEAPIS;
            a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), (0, _.Sa)(_.Cb, "ci", []).push(a), window.__GOOGLEAPIS = _.l)
        };
        _.O = function (a, b) {
            b = "function" == typeof _.Vb && (0, _.Vb)(a, b) || b;
            (0, _.G)(a, b, _.l)
        };
        var ab;
        var $a;
        var Za;
        var Ya;
        var Wa;
        _.Wb = window;
        _.Xb = window.document;
        _.Yb = _.Wb.location;
        _.db = /\[native code\]/;
        Wa = /&/g;
        Ya = /</g;
        Za = />/g;
        $a = /"/g;
        ab = /'/g;
        _.$b = (0, _.Sa)(_.Wb, "gapi", {});
        var lb = /^([^?#]*)(\?([^#]*))?(\#(.*))?$/,
            tb = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
        _.Cb = (0, _.Sa)(_.Wb, "___jsl", (0, _.cb)());
        (0, _.Sa)(_.Cb, "I", 0);
        (0, _.Sa)(_.Cb, "hel", 10);
        Ub && Ub();
        Sb();
        (0, _.O)("gapi.config.get", _.N);
        (0, _.O)("gapi.config.update", _.Tb);
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ac = function (a) {
            return !!a && "object" === typeof a && _.db.test(a.push)
        };
        _.bc = function (a, b, c) {
            if (a) {
                (0, _.gb)((0, _.ac)(a), "arrayForEach was called with a non array value");
                for (var d = 0; d < a.length; d++) b.call(c, a[d], d)
            }
        };
        _.cc = function (a, b, c) {
            if (a)
                if ((0, _.ac)(a))(0, _.bc)(a, b, c);
                else {
                    (0, _.gb)("object" === typeof a, "objectForEach was called with a non object value");
                    c = c || a;
                    for (var d in a)(0, _.eb)(a, d) && a[d] !== _.l && b.call(c, a[d], d)
                }
        };
        var dc = function (a) {
            a = a.sort();
            for (var b = [], c = _.l, d = 0; d < a.length; d++) {
                var f = a[d];
                f != c && b.push(f);
                c = f
            }
            return b
        };
        var ec = function () {
            var a = [],
                b = _.Cb.H;
            b && (0, _.cc)(b, function (b) {
                a.push.apply(a, b.L)
            });
            return dc(a)
        };
        _.fc = function (a) {
            if (_.db.test(Object.keys)) return Object.keys(a);
            var b = [],
                c;
            for (c in a)(0, _.eb)(a, c) && b.push(c);
            return b
        };
        var gc = function (a) {
            if (hc === _.l) {
                var b = (0, _.N)("report") || {}, c = b.rate,
                    d = Math.random();
                if (hc = "number" === typeof c && c > d) ic["rate." + c + "-" + d] = _.n, jc = b.timeout || 1E3, kc = b.host || "https://plus.google.com", lc = b.path || "/_/widget/report", mc = b.apis || []
            }
            if (!hc) return _.t;
            if (mc)
                for (b = 0; b < mc.length; b++)
                    if (RegExp("^" + mc[b] + "$").test(a)) return _.n;
            return _.t
        };
        var nc = function (a) {
            delete oc[a]
        };
        var pc = function () {
            qc && (_.Wb.clearTimeout(qc), qc = 0);
            qc = _.Wb.setTimeout(function () {
                var a;
                a = window.document.location.href;
                var b = (0, _.fc)(ic).join(":");
                a = [kc, lc, "?api=", (0, window.encodeURIComponent)(b), "&url=", (0, window.encodeURIComponent)(a), "&loaded=", (0, window.encodeURIComponent)(ec().join(":"))].join("");
                ic = (0, _.cb)();
                var b = new window.Image,
                    c = sc++;
                oc[c] = b;
                b.onload = b.onerror = (0, _.Ea)(nc, c);
                b.src = a;
                qc = 0
            }, jc)
        };
        _.Vb = function (a, b) {
            var c = b;
            (0, _.Ta)(b) && gc(a) && (c = function (c) {
                tc[a] || (ic[a] = _.n, tc[a] = _.n, pc());
                return b.apply(this, arguments)
            });
            return c
        };
        var hc, kc, lc, jc, qc, mc, oc = {}, sc = 0,
            tc = (0, _.cb)(),
            ic = (0, _.cb)();

    } catch (e) {
        _._DumpException(e)
    }
    try {

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.wc = function (a) {
            var b = (0, _.N)("googleapis.config/sessionIndex");
            b == _.p && (b = window.__X_GOOG_AUTHUSER);
            if (b == _.p) {
                var c = window.google;
                c && (b = c.authuser)
            }
            b == _.p && (a = a || window.location.href, b = (0, _.hb)(a, "authuser") || _.p, b == _.p && (b = (b = a.match(xc)) ? b[1] : _.p));
            return b == _.p ? _.p : String(b)
        };
        _.yc = function (a) {
            var b = (0, _.N)("googleapis.config/sessionDelegate");
            b == _.p && (b = (a = (a || window.location.href).match(zc)) ? a[1] : _.p);
            return b == _.p ? _.p : String(b)
        };
        _.Ac = function (a, b) {
            var c = (0, _.wc)(a) || b,
                d = (0, _.yc)(a),
                f = "";
            c && (f += "u/" + c + "/");
            d && (f += "b/" + d + "/");
            return f || _.p
        };
        var xc = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//,
            zc = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,})\//;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Xc = function () {};
        var Yc = function () {
            this.A = [];
            this.D = [];
            this.G = [];
            this.C = [];
            this.C[0] = 128;
            for (var a = 1; 64 > a; ++a) this.C[a] = 0;
            this.reset()
        };
        var Zc = function (a, b, c) {
            c || (c = 0);
            var d = a.G;
            if ((0, _.xa)(b))
                for (var f = 0; 16 > f; f++) d[f] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
            else
                for (f = 0; 16 > f; f++) d[f] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
            for (f = 16; 80 > f; f++) {
                var g = d[f - 3] ^ d[f - 8] ^ d[f - 14] ^ d[f - 16];
                d[f] = (g << 1 | g >>> 31) & 4294967295
            }
            b = a.A[0];
            c = a.A[1];
            for (var h = a.A[2], m = a.A[3], q = a.A[4], r, f = 0; 80 > f; f++) 40 > f ? 20 > f ? (g = m ^ c & (h ^ m), r = 1518500249) : (g = c ^ h ^ m, r = 1859775393) : 60 > f ? (g = c & h | m & (c | h), r = 2400959708) : (g = c ^ h ^ m, r = 3395469782), g = (b << 5 | b >>> 27) + g + q + r + d[f] & 4294967295, q = m, m = h, h = (c << 30 | c >>> 2) & 4294967295, c = b, b = g;
            a.A[0] = a.A[0] + b & 4294967295;
            a.A[1] = a.A[1] + c & 4294967295;
            a.A[2] = a.A[2] + h & 4294967295;
            a.A[3] = a.A[3] + m & 4294967295;
            a.A[4] = a.A[4] + q & 4294967295
        };
        _.$c = function () {
            this.A = new Yc
        };
        (0, _.I)(Yc, Xc);
        Yc.prototype.reset = function () {
            this.A[0] = 1732584193;
            this.A[1] = 4023233417;
            this.A[2] = 2562383102;
            this.A[3] = 271733878;
            this.A[4] = 3285377520;
            this.F = this.B = 0
        };
        Yc.prototype.update = function (a, b) {
            (0, _.qa)(b) || (b = a.length);
            for (var c = b - 64, d = 0, f = this.D, g = this.B; d < b;) {
                if (0 == g)
                    for (; d <= c;) Zc(this, a, d), d += 64;
                if ((0, _.xa)(a))
                    for (; d < b;) {
                        if (f[g] = a.charCodeAt(d), ++g, ++d, 64 == g) {
                            Zc(this, f);
                            g = 0;
                            break
                        }
                    } else
                        for (; d < b;)
                            if (f[g] = a[d], ++g, ++d, 64 == g) {
                                Zc(this, f);
                                g = 0;
                                break
                            }
            }
            this.B = g;
            this.F += b
        };
        Yc.prototype.ds = function () {
            var a = [],
                b = 8 * this.F;
            56 > this.B ? this.update(this.C, 56 - this.B) : this.update(this.C, 64 - (this.B - 56));
            for (var c = 63; 56 <= c; c--) this.D[c] = b & 255, b /= 256;
            Zc(this, this.D);
            for (c = b = 0; 5 > c; c++)
                for (var d = 24; 0 <= d; d -= 8) a[b] = this.A[c] >> d & 255, ++b;
            return a
        };
        _.F = _.$c.prototype;
        _.F.reset = function () {
            this.A.reset()
        };
        _.F.hx = function (a) {
            this.A.update(a)
        };
        _.F.es = function () {
            return this.A.ds()
        };
        _.F.hq = function (a) {
            a = (0, window.unescape)((0, window.encodeURIComponent)(a));
            for (var b = [], c = 0, d = a.length; c < d; ++c) b.push(a.charCodeAt(c));
            this.hx(b)
        };
        _.F.Ne = function () {
            for (var a = this.es(), b = "", c = 0; c < a.length; c++) b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c] % 16);
            return b
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var me = function () {
            var a = (0, _.Hb)();
            if (!a) {
                a = (0, _.cb)();
                (0, _.Ib)(a);
                var b = (0, _.cb)();
                a.e = function (a) {
                    var d = b[a];
                    d && (delete b[a], d())
                };
                a.a = function (a, d) {
                    b[a] = d
                };
                a.r = function (a) {
                    delete b[a]
                }
            }
            return a
        };
        var ne = function (a, b) {
            var c = b.onload;
            return (0, _.Ta)(c) ? (me().a(a, c), c) : _.p
        };
        var oe = function (a) {
            (0, _.gb)(/^\w+$/.test(a), "Unsupported id - " + a);
            me();
            return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
        };
        var pe = function (a) {
            me().r(a)
        };
        _.qe = function (a, b) {
            var c, d = 0;
            do c = b.id || ["I", re++, "_", (new Date).getTime()].join(""); while (a.getElementById(c) && 5 > ++d);
            (0, _.gb)(5 > d, "Error creating iframe id");
            return c
        };
        _.se = function (a, b, c, d) {
            var f = {}, g = {};
            (0, _.fb)(d.queryParams || {}, f);
            (0, _.fb)(d.fragmentParams || {}, g);
            var h = d.pfname,
                m = (0, _.cb)();
            m.id = c;
            m.parent = a.location.protocol + "//" + a.location.host;
            c = (0, _.hb)(a.location.href, "parent");
            h = h || "";
            !h && c && (h = (0, _.hb)(a.location.href, "id", ""), c = (0, _.hb)(a.location.href, "pfname", ""), h = h ? c + "/" + h : "");
            m.pfname = h;
            (0, _.fb)(m, g);
            (m = (0, _.hb)(b, "rpctoken") || f.rpctoken || g.rpctoken) || (m = g.rpctoken = d.rpctoken || String(Math.round(1E8 * (0, _.te)())));
            d.rpctoken = m;
            m = a.location.href;
            a =
                (0, _.cb)();
            (h = (0, _.Gb)(m)) && (a._bsh = h);
            (m = (0, _.Bb)(m)) && (a.jsh = m);
            d.hintInFragment ? (0, _.fb)(a, g) : (0, _.fb)(a, f);
            return (0, _.qb)(b, f, g, d.paramsSerializer)
        };
        var ue = function (a) {
            (0, _.gb)(!a || (0, _.sb)(a), "Illegal url for new iframe - " + a)
        };
        _.ve = function (a, b, c, d, f) {
            ue(c.src);
            var g, h = ne(d, c),
                m = h ? oe(d) : "";
            try {
                g = a.createElement('<iframe frameborder="' + (0, _.Ua)(String(c.frameborder)) + '" scrolling="' + (0, _.Ua)(String(c.scrolling)) + '" ' + m + ' name="' + (0, _.Ua)(String(c.name)) + '"/>')
            } catch (q) {
                g = a.createElement("iframe"), h && (g.onload = function () {
                    g.onload = _.p;
                    h.call(this)
                }, pe(d))
            }
            for (var r in c) a = c[r], "style" === r && "object" === typeof a ? (0, _.fb)(a, g.style) : we[r] || g.setAttribute(r, String(a));
            (r = f && f.beforeNode || _.p) || f && f.dontclear || (0, _.Ab)(b);
            b.insertBefore(g,
                r);
            g = r ? r.previousSibling : b.lastChild;
            c.allowtransparency && (g.allowTransparency = _.n);
            return g
        };
        var xe = function (a, b) {
            if (!ye || (0, _.N)("oauth-flow/authAware")) {
                var c = (0, _.wc)() || "0",
                    d = (0, _.yc)(),
                    f = (0, _.Ac)(_.l, c),
                    g = (0, _.N)("oauth-flow/authAware") ? "isLoggedIn" : "googleapis.config/signedIn";
                (g = (0, _.N)(g) === _.t ? "_/im/" : "") && (f = "");
                ye = {
                    socialhost: (0, _.N)("iframes/:socialhost:"),
                    session_index: c,
                    session_delegate: d,
                    session_prefix: f,
                    im_prefix: g
                }
            }
            return ye[b] || ""
        };
        _.ze = function (a) {
            return (0, _.rb)(_.Xb, a.replace(Ae, xe))
        };
        _.Be = function (a, b, c) {
            var d = c || {};
            c = d.attributes || {};
            (0, _.gb)(!d.allowPost || !c.onload, "onload is not supported by post iframe");
            var f = c = a;
            _.Ce.test(c) && (f = (0, _.N)("iframes/" + f.substring(1) + "/url"), (0, _.gb)( !! f, "Unknown iframe url config for - " + c));
            a = (0, _.ze)(f);
            c = b.ownerDocument || _.Xb;
            f = (0, _.qe)(c, d);
            a = (0, _.se)(c, a, f, d);
            var g = (0, _.cb)();
            (0, _.fb)(_.De, g);
            (0, _.fb)(d.attributes, g);
            g.name = g.id = f;
            g.src = a;
            d.eurl = a;
            if ((d || {}).allowPost && 2E3 < a.length) {
                var h = (0, _.jb)(a);
                g.src = "";
                g["data-postorigin"] = a;
                a = (0, _.ve)(c,
                    b, g, f);
                var m;
                if (-1 != window.navigator.userAgent.indexOf("WebKit")) {
                    m = a.contentWindow.document;
                    m.open();
                    var g = m.createElement("div"),
                        q = {}, r = f + "_inner";
                    q.name = r;
                    q.src = "";
                    q.style = "display:none";
                    (0, _.ve)(c, g, q, r, d)
                }
                d = (0, _.mb)(h.He[0]);
                h.He = [];
                g = (0, _.ob)(h);
                h = c.createElement("form");
                h.action = g;
                h.method = "POST";
                h.target = f;
                h.style.display = "none";
                for (f = 0; f < d.length; f++) g = c.createElement("input"), g.type = "hidden", g.name = d[f][0], g.value = d[f][1], h.appendChild(g);
                b.appendChild(h);
                h.submit();
                h.parentNode.removeChild(h);
                m && m.close();
                b = a
            } else b = (0, _.ve)(c, b, g, f, d);
            return b
        };
        var ye;
        var re;
        var we;
        _.De = {
            allowtransparency: "true",
            frameborder: "0",
            hspace: "0",
            marginheight: "0",
            marginwidth: "0",
            scrolling: "no",
            style: "",
            tabindex: "0",
            vspace: "0",
            width: "100%"
        };
        we = {
            allowtransparency: _.n,
            onload: _.n
        };
        re = 0;
        var Ae;
        _.Ce = /^:[\w]+$/;
        Ae = /:([a-zA-Z_]+):/g;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.te = function () {
            var a;
            Ee ? (a = new _.Wb.Uint32Array(1), Fe.getRandomValues(a), a = Number("0." + a[0])) : (a = Ge, a += (0, window.parseInt)(He.substr(0, 20), 16), He = Ie(He), a = a / (Ke + Math.pow(16, 20)));
            return a
        };
        var Le = function (a) {
            a = a || _.Wb.event;
            var b = a.screenX + a.clientX << 16,
                b = b + (a.screenY + a.clientY),
                b = b * ((new Date).getTime() % 1E6);
            Ge = Ge * b % Ke;
            0 < Me && ++Ne == Me && (0, _.yb)(_.Wb, "mousemove", Le)
        };
        var Ie = function (a) {
            var b = new _.$c;
            b.hq(a);
            return b.Ne()
        };
        var Fe = _.Wb.crypto,
            Ee = _.t,
            Me = 0,
            Ne = 0,
            Ge = 1,
            Ke = 0,
            He = "",
            Ee = !! Fe && "function" == typeof Fe.getRandomValues;
        Ee || (Ke = 1E6 * (window.screen.width * window.screen.width + window.screen.height), He = Ie(_.Xb.cookie + "|" + _.Xb.location + "|" + (new Date).getTime() + "|" + Math.random()), Me = (0, _.N)("random/maxObserveMousemove") || 0, 0 != Me && (0, _.ub)(_.Wb, "mousemove", Le));

    } catch (e) {
        _._DumpException(e)
    }
    try {

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.P = _.P || {};
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.P = _.P || {};
        _.P.Uk = function (a, b, c) {
            for (var d = [], f = 2, g = arguments.length; f < g; ++f) d.push(arguments[f]);
            return function () {
                for (var c = d.slice(), f = 0, g = arguments.length; f < g; ++f) c.push(arguments[f]);
                return b.apply(a, c)
            }
        };
        _.P.Li = function (a) {
            var b, c, d = {};
            for (b = 0; c = a[b]; ++b) d[c] = c;
            return d
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.P = _.P || {};
        (function () {
            function a(a, b) {
                return String.fromCharCode(b)
            }
            var b = {
                0: _.t,
                10: _.n,
                13: _.n,
                34: _.n,
                39: _.n,
                60: _.n,
                62: _.n,
                92: _.n,
                8232: _.n,
                8233: _.n,
                65282: _.n,
                65287: _.n,
                65308: _.n,
                65310: _.n,
                65340: _.n
            };
            _.P.escape = function (a, b) {
                if (a) {
                    if ("string" === typeof a) return _.P.Vj(a);
                    if ("Array" === typeof a)
                        for (var f = 0, g = a.length; f < g; ++f) a[f] = _.P.escape(a[f]);
                    else if ("object" === typeof a && b) {
                        f = {};
                        for (g in a) a.hasOwnProperty(g) && (f[_.P.Vj(g)] = _.P.escape(a[g], _.n));
                        return f
                    }
                }
                return a
            };
            _.P.Vj = function (a) {
                if (!a) return a;
                for (var d = [], f, g, h = 0, m = a.length; h < m; ++h) f = a.charCodeAt(h), g = b[f], g === _.n ? d.push("&#", f, ";") : g !== _.t && d.push(a.charAt(h));
                return d.join("")
            };
            _.P.sO = function (b) {
                return b ? b.replace(/&#([0-9]+);/g, a) : b
            }
        })();

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.le = _.le || {};
        _.le.uC = function () {
            var a = 0,
                b = 0;
            window.self.innerHeight ? (a = window.self.innerWidth, b = window.self.innerHeight) : window.document.documentElement && window.document.documentElement.clientHeight ? (a = window.document.documentElement.clientWidth, b = window.document.documentElement.clientHeight) : window.document.body && (a = window.document.body.clientWidth, b = window.document.body.clientHeight);
            return {
                width: a,
                height: b
            }
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.le = _.le || {};
        (function () {
            function a(a, c) {
                window.getComputedStyle(a, "").getPropertyValue(c).match(/^([0-9]+)/);
                return (0, window.parseInt)(RegExp.$1, 10)
            }
            _.le.Hb = function () {
                var b = _.le.uC().height,
                    c = window.document.body,
                    d = window.document.documentElement;
                if ("CSS1Compat" === window.document.compatMode && d.scrollHeight) return d.scrollHeight !== b ? d.scrollHeight : d.offsetHeight;
                if (0 <= window.navigator.userAgent.indexOf("AppleWebKit")) {
                    b = 0;
                    for (c = [window.document.body]; 0 < c.length;) {
                        var f = c.shift(),
                            d = f.childNodes;
                        if ("undefined" !==
                            typeof f.style) {
                            var g = f.style.overflowY;
                            g || (g = (g = window.document.defaultView.getComputedStyle(f, _.p)) ? g.overflowY : _.p);
                            if ("visible" != g && "inherit" != g && (g = f.style.height, g || (g = (g = window.document.defaultView.getComputedStyle(f, _.p)) ? g.height : ""), 0 < g.length && "auto" != g)) continue
                        }
                        for (f = 0; f < d.length; f++) {
                            g = d[f];
                            if ("undefined" !== typeof g.offsetTop && "undefined" !== typeof g.offsetHeight) var h = g.offsetTop + g.offsetHeight + a(g, "margin-bottom"),
                            b = Math.max(b, h);
                            c.push(g)
                        }
                    }
                    return b + a(window.document.body, "border-bottom") + a(window.document.body, "margin-bottom") + a(window.document.body, "padding-bottom")
                }
                if (c && d) return f = d.scrollHeight, g = d.offsetHeight, d.clientHeight !== g && (f = c.scrollHeight, g = c.offsetHeight), f > b ? f > g ? f : g : f < g ? f : g
            }
        })();

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.vc = window.gapi && window.gapi.util || {};
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.vc = _.vc || {};
        _.vc.Am = function () {
            var a = {
                Dq: "bsh",
                Rq: "h"
            };
            window.___jsl = window.___jsl || {};
            return {
                A: function () {
                    return window.___jsl[a.Dq]
                },
                Qs: function () {
                    return window.___jsl[a.Rq]
                },
                Fp: function (b) {
                    window.___jsl[a.Dq] = b
                },
                AG: function (b) {
                    window.___jsl[a.Rq] = b
                }
            }
        }();

    } catch (e) {
        _._DumpException(e)
    }
    try {
        if (window.JSON && window.JSON.parse && window.JSON.stringify) _.Lc = {
            parse: function (a) {
                try {
                    return window.JSON.parse(a)
                } catch (b) {
                    return _.t
                }
            },
            stringify: window.JSON.stringify
        };
        window.JSON && window.JSON.parse && window.JSON.stringify || (_.Lc = function () {
            function a(c) {
                var d, f, g;
                d = /[\"\\\x00-\x1f\x7f-\x9f]/g;
                switch (typeof c) {
                case "string":
                    return d.test(c) ? '"' + c.replace(d, function (a) {
                        var c = b[a];
                        if (c) return c;
                        c = a.charCodeAt();
                        return "\\u00" + Math.floor(c / 16).toString(16) + (c % 16).toString(16)
                    }) + '"' : '"' + c + '"';
                case "number":
                    return (0, window.isFinite)(c) ? String(c) : "null";
                case "boolean":
                case "null":
                    return String(c);
                case "object":
                    if (!c) return "null";
                    d = [];
                    if ("number" === typeof c.length && !c.propertyIsEnumerable("length")) {
                        g =
                            c.length;
                        for (f = 0; f < g; f += 1) d.push(a(c[f]) || "null");
                        return "[" + d.join(",") + "]"
                    }
                    for (f in c)!/___$/.test(f) && c.hasOwnProperty(f) && "string" === typeof f && (g = a(c[f])) && d.push(a(f) + ":" + g);
                    return "{" + d.join(",") + "}"
                }
                return ""
            }
            var b = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            };
            return {
                stringify: a,
                parse: function (a) {
                    return /^[\],:{}\s]*$/.test(a.replace(/\\["\\\/b-u]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ? eval("(" + a + ")") : _.t
                }
            }
        }());
        _.Lc.us = function (a) {
            var b = {};
            if (a === _.p || a === _.l) return b;
            for (var c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    _.p !== d && _.l !== d && (b[c] = "string" === typeof d ? d : _.Lc.stringify(d))
                }
            return b
        };
        (0, _.O)("gadgets.json.flatten", _.Lc.us);
        (0, _.O)("gadgets.json.parse", _.Lc.parse);
        (0, _.O)("gadgets.json.stringify", _.Lc.stringify);
        (0, _.O)("gadgets.json.flatten", _.Lc.us);
        (0, _.O)("gadgets.json.parse", _.Lc.parse);
        (0, _.O)("gadgets.json.stringify", _.Lc.stringify);

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Nc = function () {
            function a(a) {
                b(1, a)
            }

            function b(a, b) {
                if (!(a < c) && d)
                    if (2 === a && d.warn) d.warn(b);
                    else if (3 === a && d.error) try {
                    d.error(b)
                } catch (h) {} else d.log && d.log(b)
            }
            _.Na = function (a) {
                b(2, a)
            };
            _.Pa = function (a) {
                b(3, a)
            };
            _.Mc = (0, _.ea)();
            a.INFO = 1;
            a.WARNING = 2;
            a.NONE = 4;
            var c = 1,
                d = window.console ? window.console : window.opera ? window.opera.postError : _.l;
            return a
        }();

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.P = _.P || {};
        (function () {
            var a = [];
            _.P.PN = function (b) {
                a.push(b)
            };
            _.P.aO = function () {
                for (var b = 0, c = a.length; b < c; ++b) a[b]()
            }
        })();
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Oc = function (a) {
            for (var b = 0; b < this.length; b++)
                if (this[b] === a) return b;
            return -1
        };
        _.P = _.P || {};
        (function () {
            var a = _.p;
            _.P.Ka = function (b) {
                var c = "undefined" === typeof b;
                if (a !== _.p && c) return a;
                var d = {};
                b = b || window.location.href;
                var f = b.indexOf("?"),
                    g = b.indexOf("#");
                b = (-1 === g ? b.substr(f + 1) : [b.substr(f + 1, g - f - 1), "&", b.substr(g + 1)].join("")).split("&");
                for (var f = window.decodeURIComponent ? window.decodeURIComponent : window.unescape, g = 0, h = b.length; g < h; ++g) {
                    var m = b[g].indexOf("=");
                    if (-1 !== m) {
                        var q = b[g].substring(0, m),
                            m = b[g].substring(m + 1),
                            m = m.replace(/\+/g, " ");
                        try {
                            d[q] = f(m)
                        } catch (r) {}
                    }
                }
                c && (a = d);
                return d
            };
            _.P.Ka()
        })();
        (0, _.O)("gadgets.util.getUrlParameters", _.P.Ka);
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Pc = function (a) {
            Qc && Qc.log && Qc.log(a)
        };
        _.Rc = function () {};
        var Qc = window.console;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.uc = function () {
            var a = window.gadgets && window.gadgets.config && window.gadgets.config.get;
            a && (0, _.Tb)(a());
            return {
                P: function (a, c, d) {
                    d && d((0, _.N)())
                },
                get: function (a) {
                    return (0, _.N)(a)
                },
                update: function (a, c) {
                    c && (0, _.k)("Config replacement is not supported");
                    (0, _.Tb)(a)
                },
                ya: (0, _.ea)()
            }
        }();
        (0, _.O)("gadgets.config.register", _.uc.P);
        (0, _.O)("gadgets.config.get", _.uc.get);
        (0, _.O)("gadgets.config.init", _.uc.ya);
        (0, _.O)("gadgets.config.update", _.uc.update);
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Sc = function (a) {
            if ("complete" === _.Xb.readyState) a();
            else {
                var b = _.t,
                    c = function () {
                        if (!b) return b = _.n, a.apply(this, arguments)
                    };
                _.Wb.addEventListener ? (_.Wb.addEventListener("load", c, _.t), _.Wb.addEventListener("DOMContentLoaded", c, _.t)) : _.Wb.attachEvent && (_.Wb.attachEvent("onreadystatechange", function () {
                    "complete" === _.Xb.readyState && c.apply(this, arguments)
                }), _.Wb.attachEvent("onload", c))
            }
        };
        _.Uc = function (a, b) {
            var c = (0, _.Sa)(_.Cb, "watt", (0, _.cb)());
            (0, _.Sa)(c, a, b)
        };
        _.Vc = function (a, b) {
            if ("complete" !== _.Xb.readyState) try {
                a()
            } catch (c) {}(0, _.Sc)(b)
        };
        var Wc = Wc || {};
        Wc.dw = _.p;
        Wc.ev = _.p;
        Wc.Fk = _.p;
        Wc.frameElement = _.p;
        Wc = Wc || {};
        Wc.sq || (Wc.sq = function () {
            function a(a, b, c) {
                "undefined" != typeof window.addEventListener ? window.addEventListener(a, b, c) : "undefined" != typeof window.attachEvent && window.attachEvent("on" + a, b);
                "message" === a && (window.___jsl = window.___jsl || {}, a = window.___jsl, a.RPMQ = a.RPMQ || [], a.RPMQ.push(b))
            }

            function b(a) {
                var b = _.Lc.parse(a.data);
                if (b && b.f) {
                    (0, _.Mc)("gadgets.rpc.receive(" + window.name + "): " + a.data);
                    var d = _.R.Kg(b.f);
                    f && ("undefined" !== typeof a.origin ? a.origin !== d : a.domain !== /^.+:\/\/([^:]+).*/.exec(d)[1]) ? (0, _.Pa)("Invalid rpc message origin. " +
                        d + " vs " + (a.origin || "")) : c(b, a.origin)
                }
            }
            var c, d, f = _.n;
            return {
                Hs: (0, _.x)("wpm"),
                A: (0, _.x)(_.n),
                ya: function (g, h) {
                    _.uc.P("rpc", _.p, function (a) {
                        "true" === String((a && a.rpc || {}).disableForceSecure) && (f = _.t)
                    });
                    c = g;
                    d = h;
                    a("message", b, _.t);
                    d("..", _.n);
                    return _.n
                },
                Ta: function (a) {
                    d(a, _.n);
                    return _.n
                },
                call: function (a, b, c) {
                    var d = _.R.Kg(a),
                        f = _.R.yr(a);
                    d ? window.setTimeout(function () {
                        var a = _.Lc.stringify(c);
                        (0, _.Mc)("gadgets.rpc.send(" + window.name + "): " + a);
                        f.postMessage(a, d)
                    }, 0) : ".." != a && (0, _.Pa)("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message");
                    return _.n
                }
            }
        }());
        Wc = Wc || {};
        Wc.ak || (Wc.ak = function () {
            function a(a, b) {
                function c() {
                    a.apply({}, arguments)
                }
                S[b] = S[b] || c;
                return K + "." + b
            }

            function b() {
                if (z === _.p && window.document.body && r) {
                    var a = r + "?cb=" + Math.random() + "&origin=" + Q + "&jsl=1",
                        c = window.document.createElement("div");
                    c.style.height = "1px";
                    c.style.width = "1px";
                    a = '<object height="1" width="1" id="' + q + '" type="application/x-shockwave-flash"><param name="allowScriptAccess" value="always"></param><param name="movie" value="' + a + '"></param><embed type="application/x-shockwave-flash" allowScriptAccess="always" src="' + a +
                        '" height="1" width="1"></embed></object>';
                    window.document.body.appendChild(c);
                    c.innerHTML = a;
                    z = c.firstChild
                }++y;
                D !== _.p && (z !== _.p || 50 <= y) ? window.clearTimeout(D) : D = window.setTimeout(b, 100)
            }

            function c() {
                C[".."] || (m(".."), J++, 50 <= J && M !== _.p ? (window.clearTimeout(M), M = _.p) : M = window.setTimeout(c, 100))
            }

            function d() {
                if (z !== _.p && z.setup)
                    for (; 0 < E.length;) {
                        var a = E.shift(),
                            b = a.gH;
                        z.setup(a.uh, ".." === b ? _.R.em : b, ".." === b ? "INNER" : "OUTER")
                    }
                D !== _.p && window.clearTimeout(D);
                D = _.p
            }

            function f() {
                C[".."] || M !== _.p || (M = window.setTimeout(c,
                    100))
            }

            function g(a, b, c) {
                b = _.R.Kg(a);
                var d = _.R.xg(a);
                z["sendMessage_" + (".." === a ? _.R.em : a) + "_" + d + "_" + (".." === a ? "INNER" : "OUTER")].call(z, _.Lc.stringify(c), b);
                return _.n
            }

            function h(a, b) {
                var c = _.Lc.parse(a),
                    d = c._scr;
                d ? (w(d, _.n), C[d] = _.n, ".." !== d && m(d, _.n)) : window.setTimeout(function () {
                    v(c, b)
                }, 0)
            }

            function m(a, b) {
                var c = _.R.em,
                    d = {};
                d._scr = b ? ".." : c;
                d._pnt = c;
                g(a, c, d)
            }
            var q = "___xpcswf",
                r = _.p,
                s = _.t,
                v = _.p,
                w = _.p,
                z = _.p,
                E = [],
                D = _.p,
                y = 0,
                J = 0,
                M = _.p,
                C = {}, Q = window.location.protocol + "//" + window.location.host,
                K, S = function () {
                    window.___jsl =
                        window.___jsl || {};
                    var a = window.___jsl._fm = {};
                    K = "___jsl._fm";
                    return a
                }();
            _.uc.P("rpc", _.p, function (a) {
                s && (r = a && a.rpc && a.rpc.commSwf || "//xpc.googleusercontent.com/gadgets/xpc.swf")
            });
            a(d, "ready");
            a(f, "setupDone");
            a(h, "receiveMessage");
            return {
                Hs: (0, _.x)("flash"),
                A: (0, _.x)(_.n),
                ya: function (a, b) {
                    v = a;
                    w = b;
                    return s = _.n
                },
                Ta: function (a, c) {
                    E.push({
                        uh: c,
                        gH: a
                    });
                    z === _.p && D === _.p && (D = window.setTimeout(b, 100));
                    return _.n
                },
                call: g,
                aA: h,
                B: d,
                C: f
            }
        }());
        if (window.gadgets && window.gadgets.rpc) "undefined" != typeof _.R && _.R || (_.R = window.gadgets.rpc, _.R.Xa = _.R.config, _.R.P = _.R.register, _.R.Wf = _.R.unregister, _.R.Pv = _.R.registerDefault, _.R.gx = _.R.unregisterDefault, _.R.zs = _.R.forceParentVerifiable, _.R.call = _.R.call, _.R.pi = _.R.getRelayUrl, _.R.Yd = _.R.setRelayUrl, _.R.wl = _.R.setAuthToken, _.R.Ti = _.R.setupReceiver, _.R.xg = _.R.getAuthToken, _.R.vp = _.R.removeReceiver, _.R.Zs = _.R.getRelayChannel, _.R.Lv = _.R.receive, _.R.Mv = _.R.receiveSameDomain, _.R.Ca = _.R.getOrigin, _.R.Kg =
            _.R.getTargetOrigin, _.R.yr = _.R._getTargetWin, _.R.$z = _.R._parseSiblingId);
        else {
            _.R = function () {
                function a() {}

                function b(a, b) {
                    if (!X[a]) {
                        var c = fa;
                        b || (c = Fa);
                        X[a] = c;
                        for (var d = ka[a] || [], f = 0; f < d.length; ++f) {
                            var g = d[f];
                            g.t = C[a];
                            c.call(a, g.f, g)
                        }
                        ka[a] = []
                    }
                }

                function c() {
                    function a() {
                        va = _.n
                    }
                    Da || ("undefined" != typeof window.addEventListener ? window.addEventListener("unload", a, _.t) : "undefined" != typeof window.attachEvent && window.attachEvent("onunload", a), Da = _.n)
                }

                function d(b, d, f, g, h) {
                    C[d] && C[d] === f || ((0, _.Pa)("Invalid gadgets.rpc token. " +
                        C[d] + " vs " + f), a(d, 2));
                    h.onunload = function () {
                        S[d] && !va && (a(d, 1), _.R.vp(d))
                    };
                    c();
                    g = _.Lc.parse((0, window.decodeURIComponent)(g))
                }

                function f(c, d) {
                    if (c && "string" === typeof c.s && "string" === typeof c.f && c.a instanceof Array)
                        if (C[c.f] && C[c.f] !== c.t && ((0, _.Pa)("Invalid gadgets.rpc token. " + C[c.f] + " vs " + c.t), a(c.f, 2)), "__ack" === c.s) window.setTimeout(function () {
                            b(c.f, _.n)
                        }, 0);
                        else {
                            c.c && (c.callback = function (a) {
                                _.R.call(c.f, (c.g ? "legacy__" : "") + "__cb", _.p, c.c, a)
                            });
                            if (d) {
                                var f = g(d);
                                c.origin = d;
                                var h = c.r,
                                    m;
                                try {
                                    m =
                                        g(h)
                                } catch (q) {}
                                h && m == f || (h = d);
                                c.referer = h
                            }
                            f = (y[c.s] || y[""]).apply(c, c.a);
                            c.c && "undefined" !== typeof f && _.R.call(c.f, "__cb", _.p, c.c, f)
                        }
                }

                function g(a) {
                    if (!a) return "";
                    a = a.split("#")[0].split("?")[0];
                    a = a.toLowerCase();
                    0 == a.indexOf("//") && (a = window.location.protocol + a); - 1 == a.indexOf("://") && (a = window.location.protocol + "//" + a);
                    var b = a.substring(a.indexOf("://") + 3),
                        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
                    a = a.substring(0, a.indexOf("://"));
                    "http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && (0, _.k)(Error("i"));
                    var c = "",
                        d = b.indexOf(":");
                    if (-1 != d) {
                        var f = b.substring(d + 1),
                            b = b.substring(0, d);
                        if ("http" === a && "80" !== f || "https" === a && "443" !== f) c = ":" + f
                    }
                    return a + "://" + b + c
                }

                function h(a) {
                    if ("/" == a.charAt(0)) {
                        var b = a.indexOf("|");
                        return {
                            id: 0 < b ? a.substring(1, b) : a.substring(1),
                            origin: 0 < b ? a.substring(b + 1) : _.p
                        }
                    }
                    return _.p
                }

                function m(a) {
                    if ("undefined" === typeof a || ".." === a) return window.parent;
                    var b = h(a);
                    if (b) return window.top.frames[b.id];
                    a = String(a);
                    return (b = window.frames[a]) ? b : (b = window.document.getElementById(a)) && b.contentWindow ?
                        b.contentWindow : _.p
                }

                function q(a, b) {
                    if (S[a] !== _.n) {
                        "undefined" === typeof S[a] && (S[a] = 0);
                        var c = m(a);
                        ".." !== a && c == _.p || fa.Ta(a, b) !== _.n ? S[a] !== _.n && 10 > S[a]++ ? window.setTimeout(function () {
                            q(a, b)
                        }, 500) : (X[a] = Fa, S[a] = _.n) : S[a] = _.n
                    }
                }

                function r(a) {
                    (a = J[a]) && "/" === a.substring(0, 1) && (a = "/" === a.substring(1, 2) ? window.document.location.protocol + a : window.document.location.protocol + "//" + window.document.location.host + a);
                    return a
                }

                function s(a, b, c) {
                    b && !/http(s)?:\/\/.+/.test(b) && (0 == b.indexOf("//") ? b = window.location.protocol +
                        b : "/" == b.charAt(0) ? b = window.location.protocol + "//" + window.location.host + b : -1 == b.indexOf("://") && (b = window.location.protocol + "//" + b));
                    J[a] = b;
                    "undefined" !== typeof c && (M[a] = !! c)
                }

                function v(a, b) {
                    b = b || "";
                    C[a] = String(b);
                    q(a, b)
                }

                function w(a) {
                    a = (a.passReferrer || "").split(":", 2);
                    ca = a[0] || "none";
                    U = a[1] || "origin"
                }

                function z(a) {
                    "true" === String(a.useLegacyProtocol) && (fa = Wc.Fk || Fa, fa.ya(f, b))
                }

                function E(a, b) {
                    function c(d) {
                        d = d && d.rpc || {};
                        w(d);
                        var f = d.parentRelayUrl || "",
                            f = g(Y.parent || b) + f;
                        s("..", f, "true" === String(d.useLegacyProtocol));
                        z(d);
                        v("..", a)
                    }!Y.parent && b ? c({}) : _.uc.P("rpc", _.p, c)
                }

                function D(a, b, c) {
                    if (".." === a) E(c || Y.rpctoken || Y.ifpctok || "", b);
                    else t: {
                        var d = _.p;
                        if ("/" != a.charAt(0)) {
                            if (!_.P) break t;
                            (d = window.document.getElementById(a)) || (0, _.k)(Error("j`" + a))
                        }
                        d = d && d.src;
                        b = b || _.R.Ca(d);
                        s(a, b);
                        b = _.P.Ka(d);
                        v(a, c || b.rpctoken)
                    }
                }
                var y = {}, J = {}, M = {}, C = {}, Q = 0,
                    K = {}, S = {}, Y = {}, X = {}, ka = {}, ca = _.p,
                    U = _.p,
                    Z = window.top !== window.self,
                    Ba = window.name,
                    ya = window.console,
                    ua = ya && ya.log && function (a) {
                        ya.log(a)
                    } || (0, _.ea)(),
                    Fa = function () {
                        function a(b) {
                            return function () {
                                ua(b +
                                    ": call ignored")
                            }
                        }
                        return {
                            getCode: (0, _.x)("noop"),
                            isParentVerifiable: (0, _.x)(_.n),
                            init: a("init"),
                            setup: a("setup"),
                            call: a("call")
                        }
                    }();
                _.P && (Y = _.P.Ka());
                var va = _.t,
                    Da = _.t,
                    fa = function () {
                        if ("flash" == Y.rpctx) return Wc.ak;
                        if ("rmr" == Y.rpctx) return Wc.dw;
                        var a = "function" === typeof window.postMessage ? Wc.sq : "object" === typeof window.postMessage ? Wc.sq : window.ActiveXObject ? Wc.ak ? Wc.ak : Wc.ev ? Wc.ev : Wc.Fk : 0 < window.navigator.userAgent.indexOf("WebKit") ? Wc.dw : "Gecko" === window.navigator.product ? Wc.frameElement : Wc.Fk;
                        a || (a = Fa);
                        return a
                    }();
                y[""] = function () {
                    ua("Unknown RPC service: " + this.s)
                };
                y.__cb = function (a, b) {
                    var c = K[a];
                    c && (delete K[a], c.call(this, b))
                };
                return {
                    Xa: function (b) {
                        "function" === typeof b.iw && (a = b.iw)
                    },
                    P: function (a, b) {
                        "__cb" !== a && "__ack" !== a || (0, _.k)(Error("k"));
                        "" === a && (0, _.k)(Error("l"));
                        y[a] = b
                    },
                    Wf: function (a) {
                        "__cb" !== a && "__ack" !== a || (0, _.k)(Error("m"));
                        "" === a && (0, _.k)(Error("n"));
                        delete y[a]
                    },
                    Pv: function (a) {
                        y[""] = a
                    },
                    gx: function () {
                        delete y[""]
                    },
                    zs: (0, _.ea)(),
                    call: function (a, b, c, d) {
                        a = a || "..";
                        var f =
                            "..";
                        ".." === a ? f = Ba : "/" == a.charAt(0) && (f = _.R.Ca(window.location.href), f = "/" + Ba + (f ? "|" + f : ""));
                        ++Q;
                        c && (K[Q] = c);
                        var g = {
                            s: b,
                            f: f,
                            c: c ? Q : 0,
                            a: Array.prototype.slice.call(arguments, 3),
                            t: C[a],
                            l: !! M[a]
                        }, m;
                        t: if ("bidir" === ca || "c2p" === ca && ".." === a || "p2c" === ca && ".." !== a) {
                            m = window.location.href;
                            var q = "?";
                            if ("query" === U) q = "#";
                            else if ("hash" === U) break t;
                            q = m.lastIndexOf(q);
                            q = -1 === q ? m.length : q;
                            m = m.substring(0, q)
                        } else m = _.p;
                        m && (g.r = m);
                        if (".." === a || h(a) != _.p || window.document.getElementById(a))(m = X[a]) || h(a) === _.p || (m = fa),
                        0 === b.indexOf("legacy__") && (m = fa, g.s = b.substring(8), g.c = g.c ? g.c : Q), g.g = _.n, g.r = f, m ? (M[a] && (m = Wc.Fk), m.call(a, f, g) === _.t && (X[a] = Fa, fa.call(a, f, g))) : ka[a] ? ka[a].push(g) : ka[a] = [g]
                    },
                    pi: r,
                    Yd: s,
                    wl: v,
                    Ti: D,
                    xg: function (a) {
                        return C[a]
                    },
                    vp: function (a) {
                        delete J[a];
                        delete M[a];
                        delete C[a];
                        delete S[a];
                        delete X[a]
                    },
                    Zs: function () {
                        return fa.Hs()
                    },
                    Lv: function (a, b) {
                        4 < a.length ? fa.aA(a, f) : d.apply(_.p, a.concat(b))
                    },
                    Mv: function (a) {
                        a.a = Array.prototype.slice.call(a.a);
                        window.setTimeout(function () {
                            f(a)
                        }, 0)
                    },
                    Ca: g,
                    Kg: function (a) {
                        var b =
                            _.p,
                            b = r(a);
                        b || (b = (b = h(a)) ? b.origin : ".." == a ? Y.parent : window.document.getElementById(a).src);
                        return g(b)
                    },
                    ya: function () {
                        fa.ya(f, b) === _.t && (fa = Fa);
                        Z ? D("..") : _.uc.P("rpc", _.p, function (a) {
                            a = a.rpc || {};
                            w(a);
                            z(a)
                        })
                    },
                    yr: m,
                    $z: h,
                    A: "__ack",
                    em: Ba || "..",
                    D: 0,
                    C: 1,
                    B: 2
                }
            }();
            _.R.ya()
        };
        _.R.Xa({
            iw: function (a) {
                (0, _.k)(Error("o`" + a))
            }
        });
        _.Mc = _.Rc;
        (0, _.O)("gadgets.rpc.config", _.R.Xa);
        (0, _.O)("gadgets.rpc.register", _.R.P);
        (0, _.O)("gadgets.rpc.unregister", _.R.Wf);
        (0, _.O)("gadgets.rpc.registerDefault", _.R.Pv);
        (0, _.O)("gadgets.rpc.unregisterDefault", _.R.gx);
        (0, _.O)("gadgets.rpc.forceParentVerifiable", _.R.zs);
        (0, _.O)("gadgets.rpc.call", _.R.call);
        (0, _.O)("gadgets.rpc.getRelayUrl", _.R.pi);
        (0, _.O)("gadgets.rpc.setRelayUrl", _.R.Yd);
        (0, _.O)("gadgets.rpc.setAuthToken", _.R.wl);
        (0, _.O)("gadgets.rpc.setupReceiver", _.R.Ti);
        (0, _.O)("gadgets.rpc.getAuthToken", _.R.xg);
        (0, _.O)("gadgets.rpc.removeReceiver", _.R.vp);
        (0, _.O)("gadgets.rpc.getRelayChannel", _.R.Zs);
        (0, _.O)("gadgets.rpc.receive", _.R.Lv);
        (0, _.O)("gadgets.rpc.receiveSameDomain", _.R.Mv);
        (0, _.O)("gadgets.rpc.getOrigin", _.R.Ca);
        (0, _.O)("gadgets.rpc.getTargetOrigin", _.R.Kg);

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.P = _.P || {};
        _.P.vj = function (a, b, c, d) {
            "undefined" != typeof a.addEventListener ? a.addEventListener(b, c, d) : "undefined" != typeof a.attachEvent ? a.attachEvent("on" + b, c) : (0, _.Na)("cannot attachBrowserEvent: " + b)
        };
        _.P.uF = function (a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent ? a.detachEvent("on" + b, c) : (0, _.Na)("cannot removeBrowserEvent: " + b)
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.zd = function () {
            function a() {
                f[0] = 1732584193;
                f[1] = 4023233417;
                f[2] = 2562383102;
                f[3] = 271733878;
                f[4] = 3285377520;
                s = r = 0
            }

            function b(a) {
                for (var b = h, c = 0; 64 > c; c += 4) b[c / 4] = a[c] << 24 | a[c + 1] << 16 | a[c + 2] << 8 | a[c + 3];
                for (c = 16; 80 > c; c++) b[c] = ((b[c - 3] ^ b[c - 8] ^ b[c - 14] ^ b[c - 16]) << 1 | (b[c - 3] ^ b[c - 8] ^ b[c - 14] ^ b[c - 16]) >>> 31) & 4294967295;
                a = f[0];
                for (var d = f[1], g = f[2], m = f[3], q = f[4], r, s, c = 0; 80 > c; c++) 40 > c ? 20 > c ? (r = m ^ d & (g ^ m), s = 1518500249) : (r = d ^ g ^ m, s = 1859775393) : 60 > c ? (r = d & g | m & (d | g), s = 2400959708) : (r = d ^ g ^ m, s = 3395469782), r = ((a << 5 | a >>> 27) & 4294967295) +
                    r + q + s + b[c] & 4294967295, q = m, m = g, g = (d << 30 | d >>> 2) & 4294967295, d = a, a = r;
                f[0] = f[0] + a & 4294967295;
                f[1] = f[1] + d & 4294967295;
                f[2] = f[2] + g & 4294967295;
                f[3] = f[3] + m & 4294967295;
                f[4] = f[4] + q & 4294967295
            }

            function c(a, c) {
                if ("string" === typeof a) {
                    a = (0, window.unescape)((0, window.encodeURIComponent)(a));
                    for (var d = [], f = 0, h = a.length; f < h; ++f) d.push(a.charCodeAt(f));
                    a = d
                }
                c || (c = a.length);
                d = 0;
                if (0 == r)
                    for (; d + 64 < c;) b(a.slice(d, d + 64)), d += 64, s += 64;
                for (; d < c;)
                    if (g[r++] = a[d++], s++, 64 == r)
                        for (r = 0, b(g); d + 64 < c;) b(a.slice(d, d + 64)), d += 64, s += 64
            }

            function d() {
                var a = [],
                    d = 8 * s;
                56 > r ? c(m, 56 - r) : c(m, 64 - (r - 56));
                for (var h = 63; 56 <= h; h--) g[h] = d & 255, d >>>= 8;
                b(g);
                for (h = d = 0; 5 > h; h++)
                    for (var q = 24; 0 <= q; q -= 8) a[d++] = f[h] >> q & 255;
                return a
            }
            for (var f = [], g = [], h = [], m = [128], q = 1; 64 > q; ++q) m[q] = 0;
            var r, s;
            a();
            return {
                reset: a,
                update: c,
                ds: d,
                Ne: function () {
                    for (var a = d(), b = "", c = 0; c < a.length; c++) b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c] % 16);
                    return b
                }
            }
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.xf = function () {
            function a(b) {
                b = b || window.event;
                var c = b.screenX + b.clientX << 16,
                    c = c + (b.screenY + b.clientY),
                    c = c * ((new Date).getTime() % 1E6);
                h = h * c % m;
                0 < d && ++f == d && _.P.uF(window, "mousemove", a, _.t)
            }

            function b(a) {
                var b = (0, _.zd)();
                b.update(a);
                return b.Ne()
            }
            var c = window.crypto;
            if (c && "function" == typeof c.getRandomValues) return function () {
                var a = new window.Uint32Array(1);
                c.getRandomValues(a);
                return Number("0." + a[0])
            };
            var d = (0, _.N)("random/maxObserveMousemove");
            d == _.p && (d = -1);
            var f = 0,
                g = Math.random(),
                h = 1,
                m = 1E6 * (window.screen.width *
                    window.screen.width + window.screen.height);
            0 != d && _.P.vj(window, "mousemove", a, _.t);
            var q = b(window.document.cookie + "|" + window.document.location + "|" + (new Date).getTime() + "|" + g);
            return function () {
                var a = h,
                    a = a + (0, window.parseInt)(q.substr(0, 20), 16);
                q = b(q);
                return a / (m + Math.pow(16, 20))
            }
        }();
        (0, _.O)("shindig.random", _.xf);
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Fh = window.iframer = {};
        _.V = {};
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.V.uA = function (a, b, c) {
            var d = Array.prototype.slice.call(arguments);
            _.V.Ws(function (a) {
                a.sameOrigin && (d.unshift("/" + a.claimedOpenerId + "|" + window.location.protocol + "//" + window.location.host), _.R.call.apply(_.R, d))
            })
        };
        _.V.oF = function (a, b) {
            _.R.P(a, b)
        };
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Bc = function (a, b, c) {
            a = String(a);
            if (((0, _.hb)(a, "authuser") || _.p) != _.p || ((0, _.hb)(a, "hd") || _.p) != _.p) return a;
            b = (0, _.wc)(b);
            if (c) {
                var d = a,
                    f = d.match(/^((https?:)?\/\/[^\/?#]*)?(\/[^\/?#]+)\/[0-9]+([\/][^?#]*)([?#].*)?$/);
                if (f && f[0]) {
                    var g = f[1],
                        h = f[4],
                        m = f[5];
                    f[3] == "/" + c && (d = (g || "") + (h || "/") + (m || ""))
                }
                if ((f = d.match(/^(((https?:)?\/\/[^\/?#]*)([\/][^?#]*)?|([\/][^?#]*))([?#].*)?$/)) && f[0]) return g = f[2], a = f[4] || f[5], m = f[6], b != _.p && (d = (g || "") + "/" + c + "/" + (0, window.encodeURIComponent)(b) + (a || "/") + (m || "")),
                d
            }
            c = b == _.p ? (0, window.encodeURIComponent)("authuser") + "=0" : b.match(/^([-a-z0-9]+[.])+[-a-z0-9]+$/) ? [(0, window.encodeURIComponent)("authuser") + "=", (0, window.encodeURIComponent)(String(b)), "&" + (0, window.encodeURIComponent)("hd") + "=", (0, window.encodeURIComponent)(b)].join("") : ["authuser=", (0, window.encodeURIComponent)(b)].join("");
            a = a.split("#");
            b = a[0].indexOf("?");
            0 > b ? a[0] = [a[0], "?", c].join("") : (d = [a[0]], b < a[0].length - 1 && d.push("&"), d.push(c), a[0] = d.join(""));
            return d = a.join("#")
        };
        _.google.LN = _.Bc;
        _.google.Vn = _.wc;
        _.google.cN = _.yc;
        _.google.dN = _.Ac;

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.V.ea = _.V.ea || {};
        _.V.ea.vA = function (a) {
            try {
                return !!a.document
            } catch (b) {}
            return _.t
        };
        _.V.ea.ht = function (a) {
            var b = a.parent;
            return a != b && _.V.ea.vA(b) ? _.V.ea.ht(b) : a
        };
        _.V.ea.iN = function (a) {
            var b = a.userAgent || "";
            a = a.product || "";
            return 0 != b.indexOf("Opera") && -1 == b.indexOf("WebKit") && "Gecko" == a && 0 < b.indexOf("rv:1.")
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Gh = function (a) {
            _.V.pl[a] || (_.V.pl[a] = {}, _.R.P(a, function (b, c) {
                var d = this.f;
                if ("string" == typeof b && !(b in {} || d in {})) {
                    var f = this.callback,
                        g = _.V.pl[a][d],
                        h;
                    g && Object.hasOwnProperty.call(g, b) ? h = g[b] : Object.hasOwnProperty.call(_.V.Lg, a) && (h = _.V.Lg[a]);
                    if (h) return d = Array.prototype.slice.call(arguments, 1), h._iframe_wrapped_rpc_ && f && d.push(f), h.apply({}, d)
                }(0, _.Pa)(['Unregistered call in window "', window.name, '" for method "', a, '", via proxyId "', b, '" from frame "', d, '".'].join(""));
                return _.p
            }));
            return _.V.pl[a]
        };
        var Hh = function (a, b, c) {
            function d(d) {
                var g = Array.prototype.slice.call(arguments, 0),
                    h = g[g.length - 1];
                if ("function" === typeof h) {
                    var m = h;
                    g.pop()
                }
                g.unshift(b, a, m, c);
                _.R.call.apply(_.R, g)
            }
            d._iframe_wrapped_rpc_ = _.n;
            return d
        };
        var Ih = function () {
            window.setTimeout(function () {
                _.R.call("..", "_noop_echo", _.V.UE)
            }, 0)
        };
        var Jh = function () {
            _.R.P("_noop_echo", function () {
                this.callback(_.V.cC(_.V.We[this.f]))
            })
        };
        _.Kh = function () {
            return _.Wb.location.origin || _.Wb.location.protocol + "//" + _.Wb.location.host
        };
        var Lh = function (a) {
            var b = (0, _.hb)(a.location.href, "urlindex");
            if (b = (0, _.Sa)(_.Cb, "fUrl", [])[b]) {
                var c = a.location.hash,
                    b = b + (/#/.test(b) ? c.replace(/^#/, "&") : c);
                a.location.replace(b)
            }
        };
        var Mh = function () {
            _.V.yu++;
            return ["I", _.V.yu, "_", (new Date).getTime()].join("")
        };
        var Nh = function (a) {
            return a instanceof Array ? a.join(",") : a instanceof Object ? _.Lc.stringify(a) : a
        };
        var Oh = function () {};
        var Ph = function (a) {
            a && a.match(Qh) && (0, _.Tb)("googleapis.config/gcv", a)
        };
        var Rh = function (a) {
            _.vc.Am.AG(a)
        };
        var Sh = function (a) {
            _.vc.Am.Fp(a)
        };
        _.Th = function (a, b) {
            var c = b || {}, d;
            for (d in a) a.hasOwnProperty(d) && (c[d] = a[d]);
            return c
        };
        _.Uh = function (a, b, c, d, f) {
            var g = [],
                h;
            for (h in a)
                if (a.hasOwnProperty(h)) {
                    var m = b,
                        q = c,
                        r = a[h],
                        s = d,
                        v = Gh(h);
                    v[m] = v[m] || {};
                    s = _.P.Uk(s, r);
                    r._iframe_wrapped_rpc_ && (s._iframe_wrapped_rpc_ = _.n);
                    v[m][q] = s;
                    g.push(h)
                }
            if (f)
                for (h in _.V.Lg) _.V.Lg.hasOwnProperty(h) && g.push(h);
            return g.join(",")
        };
        var Vh = function (a, b, c) {
            var d = {};
            if (a && a._methods) {
                a = a._methods.split(",");
                for (var f = 0; f < a.length; f++) {
                    var g = a[f];
                    d[g] = Hh(g, b, c)
                }
            }
            return d
        };
        var Wh = function (a) {
            return a && a.disableMultiLevelParentRelay ? _.t : _.Fh && _.Fh._open && "inline" != a.style && a.inline !== _.n && !(a.container && ("string" == typeof a.container && window.document.getElementById(a.container) || window.document == (a.container.ownerDocument || a.container.document)))
        };
        var Xh = function (a, b) {
            var c = {}, d = b.params || {}, f;
            for (f in a) "#" == f.charAt(0) && (c[f.substring(1)] = a[f]), 0 == f.indexOf("fr-") && (c[f.substring(3)] = a[f]), "#" == d[f] && (c[f] = a[f]);
            for (var g in c) delete a["fr-" + g], delete a["#" + g], delete a[g];
            return c
        };
        var Yh = function (a) {
            if (":" == a.charAt(0)) {
                var b = (0, _.N)("iframes/" + a.substring(1));
                a = {};
                (0, _.fb)(b, a);
                (b = a.url) && (a.url = (0, _.ze)(b));
                a.params || (a.params = {});
                return a
            }
            return {
                url: (0, _.ze)(a)
            }
        };
        var Zh = function (a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.prototype = new c
        };
        var $h = function (a, b, c, d, f, g, h, m) {
            this.Xa = Yh(a);
            this.openParams = this.bl = b;
            this.Kb = c || {};
            this.xb = d;
            this.Gl = _.t;
            ai(this, b.style);
            this.Rh = {};
            bi(this, function () {
                var a;
                (a = this.bl.style) && _.V.Yi[a] ? a = _.V.Yi[a] : a ? ((0, _.Na)(['Missing handler for style "', a, '". Continuing with default handler.'].join("")), a = _.p) : a = ci;
                if (a) {
                    var b;
                    if ("function" === typeof a) b = a(this);
                    else {
                        var c = {};
                        for (b in a) {
                            var d = a[b];
                            c[b] = "function" === typeof d ? _.P.Uk(a, d, this) : d
                        }
                        b = c
                    }
                    for (var h in f) a = b[h], "function" === typeof a && di(this, f[h],
                        _.P.Uk(b, a))
                }
                g && di(this, "close", g)
            });
            this.Ee = this.ac = h;
            this.ep = (m || []).slice();
            h && this.ep.unshift(h.Z())
        };
        var ai = function (a, b) {
            if (!a.Gl) {
                var c = b && !_.V.Yi[b] && _.V.Om[b];
                c ? (a.Nm = [], c(function () {
                    a.Gl = _.n;
                    for (var b = 0, c = a.Nm.length; b < c; ++b) a.Nm[b].call(a)
                })) : a.Gl = _.n
            }
        };
        var bi = function (a, b) {
            a.Gl ? b.call(a) : a.Nm.push(b)
        };
        var di = function (a, b, c) {
            a.Rh[b] = a.Rh[b] || [];
            a.Rh[b].push(c)
        };
        var ei = function (a, b) {
            return "number" == typeof b ? {
                value: b,
                An: b + "px"
            } : "100%" == b ? {
                value: 100,
                An: "100%",
                Ou: _.n
            } : _.p
        };
        var fi = function (a, b, c, d, f, g, h) {
            $h.call(this, a, b, c, d, gi, f, g, h);
            this.id = b.id || Mh();
            this.B = b.rpcToken || Math.round(1E9 * (0, _.xf)());
            this.D = Xh(this.Kb, this.Xa);
            this.tn = {};
            bi(this, function () {
                this.yd("open");
                (0, _.Th)(this.tn, this)
            })
        };
        var hi = function (a, b, c, d, f, g, h) {
            $h.call(this, a, b, c, d, ii, f, g, h);
            this.url = a;
            this.A = _.p;
            this.lp = Mh();
            bi(this, function () {
                this.yd("beforeparentopen");
                var a = (0, _.Th)(this.xb);
                a._onopen = this.OE;
                a._ready = this.$k;
                a._onclose = this.NE;
                this.Kb._methods = (0, _.Uh)(a, "..", this.lp, this, _.n);
                var a = {}, b;
                for (b in this.Kb) a[b] = Nh(this.Kb[b]);
                var c = this.Xa.url;
                if (this.bl.hideUrlFromParent) {
                    b = window.name;
                    var d = c,
                        c = (0, _.qb)(this.Xa.url, this.Kb, {}, Nh),
                        f = a,
                        a = {};
                    a._methods = f._methods;
                    a["#opener"] = f["#opener"];
                    a["#urlindex"] =
                        f["#urlindex"];
                    a["#opener"] && f["#urlindex"] != _.l ? (a["#opener"] = b + "," + a["#opener"], b = {
                        url: d,
                        Kb: a
                    }) : (d = (0, _.Sa)(_.Cb, "fUrl", []), f = d.length, d[f] = c, _.Cb.rUrl = Lh, a["#opener"] = b, a["#urlindex"] = f, b = _.vc.Ca(_.Wb.location.href), c = (0, _.N)("iframes/relay_url_" + (0, window.encodeURIComponent)(b)) || "/_/gapi/sibling/1/frame.html", b = {
                        url: b + c,
                        Kb: a
                    });
                    c = b.url;
                    a = b.Kb
                }
                _.Fh._open({
                    url: c,
                    openParams: this.bl,
                    params: a,
                    proxyId: this.lp,
                    openedByProxyChain: this.ep
                })
            })
        };
        var ji = function (a, b, c, d, f, g, h) {
            $h.call(this, a, b, c, d, ii, g, h);
            this.id = b.id || Mh();
            this.B = f;
            d._close = this.close;
            this.onClosed = this.A;
            this.rx = 0;
            bi(this, function () {
                this.yd("beforeparentopen");
                var b = (0, _.Th)(this.xb);
                this.Kb._methods = (0, _.Uh)(b, "..", this.lp, this, _.n);
                b = {};
                b.queryParams = this.Kb;
                a = (0, _.se)(_.Xb, this.Xa.url, this.id, b);
                var c = f.vv(a);
                this.canAutoClose = function (a) {
                    a(f.Pr(c))
                };
                f.Ew(c, this);
                this.rx = c
            })
        };
        var ki = function (a) {
            return _.V.Yi[a]
        };
        var li = function (a, b) {
            _.V.Yi[a] = b
        };
        var mi = function (a) {
            a = a || {};
            "auto" === a.height && (a.height = _.le.Hb());
            var b = window && ni && ni.Ga();
            b ? b.Yv(a.width || 0, a.height || 0) : _.Fh && _.Fh._resizeMe && _.Fh._resizeMe(a)
        };
        var oi = function (a) {
            Ph(a)
        };
        if (window.ToolbarApi) ni = window.ToolbarApi, ni.Ga = window.ToolbarApi.getInstance, ni.prototype = window.ToolbarApi.prototype, _.F = ni.prototype, _.F.vv = ni.prototype.openWindow, _.F.Wr = ni.prototype.closeWindow, _.F.Ew = ni.prototype.setOnCloseHandler, _.F.Pr = ni.prototype.canClosePopup, _.F.Yv = ni.prototype.resizeWindow;
        else {
            var pi = _.p,
                ni = (0, _.ea)();
            ni.Ga = function () {
                !pi && window.external && window.external.GTB_IsToolbar && (pi = new ni);
                return pi
            };
            _.F = ni.prototype;
            _.F.vv = function (a) {
                return window.external.GTB_OpenPopup &&
                    window.external.GTB_OpenPopup(a)
            };
            _.F.Wr = function (a) {
                window.external.GTB_ClosePopupWindow && window.external.GTB_ClosePopupWindow(a)
            };
            _.F.Ew = function (a, b) {
                window.external.GTB_SetOnCloseHandler && window.external.GTB_SetOnCloseHandler(a, b)
            };
            _.F.Pr = function (a) {
                return window.external.GTB_CanClosePopup && window.external.GTB_CanClosePopup(a)
            };
            _.F.Yv = function (a, b) {
                return window.external.GTB_ResizeWindow && window.external.GTB_ResizeWindow(a, b)
            };
            window.ToolbarApi = ni;
            window.ToolbarApi.getInstance = ni.Ga
        };
        var Qh = /^[-_.0-9A-Za-z]+$/,
            gi = {
                open: "open",
                onready: "ready",
                close: "close",
                onresize: "resize",
                onOpen: "open",
                onReady: "ready",
                onClose: "close",
                onResize: "resize",
                onRenderStart: "renderstart"
            }, ii = {
                onBeforeParentOpen: "beforeparentopen"
            }, ci = {
                onOpen: function (a) {
                    var b = a.Ja();
                    a.Ic(b.container || b.element);
                    return a
                },
                onClose: function (a) {
                    a.remove()
                }
            };
        _.V.Qn = function (a) {
            var b = (0, _.cb)();
            (0, _.fb)(_.De, b);
            (0, _.fb)(a, b);
            return b
        };
        _.F = $h.prototype;
        _.F.Ja = (0, _.u)("bl");
        _.F.Re = (0, _.u)("Kb");
        _.F.lk = (0, _.u)("xb");
        _.F.ob = (0, _.u)("Ee");
        _.F.Qa = function (a, b) {
            bi(this, function () {
                di(this, a, b)
            })
        };
        _.F.Dd = function (a, b) {
            bi(this, function () {
                var c = this.Rh[a];
                if (c)
                    for (var d = 0, f = c.length; d < f; ++d)
                        if (c[d] === b) {
                            c.splice(d, 1);
                            break
                        }
            })
        };
        _.F.yd = function (a, b) {
            var c, d = this.Rh[a];
            if (d)
                for (var f = Array.prototype.slice.call(arguments, 1), g = 0, h = d.length; g < h; ++g) try {
                    c = d[g].apply({}, f)
                } catch (m) {
                    (0, _.Pa)(['Exception when calling callback "', a, '" with exception "', m.name, ": ", m.message, '".'].join(""))
                }
            return c
        };
        Zh(fi, $h);
        _.F = fi.prototype;
        _.F.Ic = function (a, b) {
            if (!this.Xa.url) return (0, _.Pa)("Cannot open iframe, empty URL."), this;
            var c = this.id;
            _.V.We[c] = this;
            var d = (0, _.Th)(this.xb);
            d._ready = this.$k;
            d._close = this.close;
            d._open = this.wv;
            d._resizeMe = this.Uq;
            d._renderstart = this.ov;
            var f = this.D;
            this.B && (f.rpctoken = this.B);
            f._methods = (0, _.Uh)(d, c, "", this, _.n);
            this.C = a = "string" === typeof a ? window.document.getElementById(a) : a;
            d = {};
            d.id = c;
            if (b) {
                d.attributes = b;
                var g = b.style;
                if ("string" === typeof g) {
                    var h;
                    if (g) {
                        h = [];
                        for (var g = g.split(";"), m = 0, q = g.length; m <
                            q; ++m) {
                            var r = g[m];
                            if (0 != r.length || m + 1 != q) r = r.split(":"), 2 == r.length && r[0].match(/^[ a-zA-Z_-]+$/) && r[1].match(/^[ +.%0-9a-zA-Z_-]+$/) ? h.push(r.join(":")) : (0, _.Pa)(['Iframe style "', g[m], '" not allowed.'].join(""))
                        }
                        h = h.join(";")
                    } else h = "";
                    b.style = h
                }
            }
            this.Ja().allowPost && (d.allowPost = _.n);
            d.queryParams = this.Kb;
            d.fragmentParams = f;
            d.paramsSerializer = Nh;
            this.A = (0, _.Be)(this.Xa.url, a, d);
            f = this.A.getAttribute("data-postorigin") || this.A.src;
            _.V.We[c] = this;
            _.R.wl(this.id, this.B);
            _.R.Yd(this.id, f);
            return this
        };
        _.F.Fb = function (a, b) {
            this.tn[a] = b
        };
        _.F.Z = (0, _.u)("id");
        _.F.Fa = (0, _.u)("A");
        _.F.ka = (0, _.u)("C");
        _.F.Gd = (0, _.ia)("C");
        _.F.$k = function (a) {
            var b = Vh(a, this.id, "");
            this.Ee && "function" == typeof this.xb._ready && (a._methods = (0, _.Uh)(b, this.Ee.Z(), this.id, this, _.t), this.xb._ready(a));
            (0, _.Th)(a, this);
            (0, _.Th)(b, this);
            this.yd("ready", a)
        };
        _.F.ov = function (a) {
            this.yd("renderstart", a)
        };
        _.F.close = function (a) {
            a = this.yd("close", a);
            delete _.V.We[this.id];
            return a
        };
        _.F.remove = function () {
            var a = window.document.getElementById(this.id);
            a && a.parentNode && a.parentNode.removeChild(a)
        };
        _.F.wv = function (a) {
            var b = Vh(a.params, this.id, a.proxyId);
            delete a.params._methods;
            "_parent" == a.openParams.anchor && (a.openParams.anchor = this.C);
            if (Wh(a.openParams)) new hi(a.url, a.openParams, a.params, b, b._onclose, this, a.openedByProxyChain);
            else {
                var c = new fi(a.url, a.openParams, a.params, b, b._onclose, this, a.openedByProxyChain),
                    d = this;
                bi(c, function () {
                    var a = {
                        childId: c.Z()
                    }, g = c.tn;
                    g._toclose = c.close;
                    a._methods = (0, _.Uh)(g, d.id, c.id, c, _.t);
                    b._onopen(a)
                })
            }
        };
        _.F.Uq = function (a) {
            if (this.yd("resize", a) === _.l && this.A) {
                var b = ei(this, a.width);
                b != _.p && (this.A.style.width = b.An);
                a = ei(this, a.height);
                a != _.p && (this.A.style.height = a.An);
                this.A.parentElement && (b != _.p && b.Ou || a != _.p && a.Ou) && (this.A.parentElement.style.display = "block")
            }
        };
        Zh(hi, $h);
        hi.prototype.B = (0, _.u)("A");
        hi.prototype.OE = function (a) {
            this.A = a.childId;
            var b = Vh(a, "..", this.A);
            (0, _.Th)(b, this);
            this.close = b._toclose;
            _.V.We[this.A] = this;
            this.Ee && this.xb._onopen && (a._methods = (0, _.Uh)(b, this.Ee.Z(), this.A, this, _.t), this.xb._onopen(a))
        };
        hi.prototype.$k = function (a) {
            var b = String(this.A),
                c = Vh(a, "..", b);
            (0, _.Th)(a, this);
            (0, _.Th)(c, this);
            this.yd("ready", a);
            this.Ee && this.xb._ready && (a._methods = (0, _.Uh)(c, this.Ee.Z(), b, this, _.t), this.xb._ready(a))
        };
        hi.prototype.NE = function (a) {
            if (this.Ee && this.xb._onclose) this.xb._onclose(a);
            else return a = this.yd("close", a), delete _.V.We[this.A], a
        };
        Zh(ji, $h);
        ji.prototype.close = function (a) {
            a = this.yd("close", a);
            this.B.Wr(this.rx);
            return a
        };
        ji.prototype.A = function () {
            this.yd("close")
        };
        (function () {
            _.V.We = {};
            _.V.Yi = {};
            _.V.Om = {};
            _.V.yu = 0;
            _.V.pl = {};
            _.V.Lg = {};
            _.V.fl = _.p;
            _.V.el = [];
            _.V.UE = function (a) {
                var b = _.t;
                try {
                    if (a != _.p) var f = window.parent.frames[a.id],
                    b = f.iframer.id == a.id && f.iframes.openedId_(_.Fh.id)
                } catch (g) {}
                try {
                    _.V.fl = {
                        origin: this.origin,
                        referer: this.referer,
                        claimedOpenerId: a && a.id,
                        claimedOpenerProxyChain: a && a.proxyChain || [],
                        sameOrigin: b
                    };
                    for (a = 0; a < _.V.el.length; ++a) _.V.el[a](_.V.fl);
                    _.V.el = []
                } catch (h) {}
            };
            _.V.cC = function (a) {
                var b = a && a.Ee,
                    f = _.p;
                b && (f = {}, f.id = b.Z(), f.proxyChain =
                    a.ep);
                return f
            };
            Jh();
            if (window.parent != window) {
                var a = _.P.Ka();
                a.gcv && Ph(a.gcv);
                var b = a.jsh;
                b && Rh(b);
                (0, _.Th)(Vh(a, "..", ""), _.Fh);
                (0, _.Th)(a, _.Fh);
                Ih()
            }
            _.V.Ia = ki;
            _.V.Za = li;
            _.V.zG = oi;
            _.V.xc = mi;
            _.V.LB = function (a) {
                return _.V.Om[a]
            };
            _.V.Ip = function (a, b) {
                _.V.Om[a] = b
            };
            _.V.GF = mi;
            _.V.PG = oi;
            _.V.Dk = {};
            _.V.Dk.get = ki;
            _.V.Dk.set = li;
            _.V.eA = function (a, b) {
                Gh(a);
                _.V.Lg[a] = b || window[a]
            };
            _.V.MM = function (a) {
                delete _.V.Lg[a]
            };
            _.V.open = function (a, b, f, g, h, m) {
                3 == arguments.length ? g = {} : 4 == arguments.length && "function" === typeof g &&
                    (h = g, g = {});
                var q = "bubble" === b.style && ni && ni.Ga();
                return q ? new ji(a, b, f, g, q, h, m) : Wh(b) ? new hi(a, b, f, g, h, m) : new fi(a, b, f, g, h, m)
            };
            _.V.close = function (a, b) {
                _.Fh && _.Fh._close && _.Fh._close(a, b)
            };
            _.V.Ie = function (a, b, f) {
                2 == arguments.length && "function" === typeof b && (f = b, b = {});
                var g = a || {};
                "height" in g || (g.height = _.le.Hb());
                g._methods = (0, _.Uh)(b || {}, "..", "", _.Fh, _.n);
                _.Fh && _.Fh._ready && _.Fh._ready(g, f)
            };
            _.V.Ws = function (a) {
                _.V.fl ? a(_.V.fl) : _.V.el.push(a)
            };
            _.V.RE = function (a) {
                return !!_.V.We[a]
            };
            _.V.QB = function () {
                return ["https://ssl.gstatic.com/gb/js/", (0, _.N)("googleapis.config/gcv")].join("")
            };
            _.V.Jv = function (a) {
                var b = {
                    mouseover: 1,
                    mouseout: 1
                };
                if (_.Fh._event)
                    for (var f = 0; f < a.length; f++) {
                        var g = a[f];
                        g in b && _.P.vj(window.document, g, function (a) {
                            _.Fh._event({
                                event: a.type,
                                timestamp: (new Date).getTime()
                            })
                        }, _.n)
                    }
            };
            _.V.CG = Rh;
            _.V.Fp = Sh;
            _.V.Wu = Oh;
            _.V.Eu = _.Fh
        })();
        (0, _.O)("iframes.allow", _.V.eA);
        (0, _.O)("iframes.callSiblingOpener", _.V.uA);
        (0, _.O)("iframes.registerForOpenedSibling", _.V.oF);
        (0, _.O)("iframes.close", _.V.close);
        (0, _.O)("iframes.getGoogleConnectJsUri", _.V.QB);
        (0, _.O)("iframes.getHandler", _.V.Ia);
        (0, _.O)("iframes.getDeferredHandler", _.V.LB);
        (0, _.O)("iframes.getParentInfo", _.V.Ws);
        (0, _.O)("iframes.iframer", _.V.Eu);
        (0, _.O)("iframes.open", _.V.open);
        (0, _.O)("iframes.openedId_", _.V.RE);
        (0, _.O)("iframes.propagate", _.V.Jv);
        (0, _.O)("iframes.ready", _.V.Ie);
        (0, _.O)("iframes.resize", _.V.xc);
        (0, _.O)("iframes.setGoogleConnectJsVersion", _.V.zG);
        (0, _.O)("iframes.setBootstrapHint", _.V.Fp);
        (0, _.O)("iframes.setJsHint", _.V.CG);
        (0, _.O)("iframes.setHandler", _.V.Za);
        (0, _.O)("iframes.setDeferredHandler", _.V.Ip);
        (0, _.O)("IframeBase", $h);
        (0, _.O)("IframeBase.prototype.addCallback", $h.prototype.Qa);
        (0, _.O)("IframeBase.prototype.getMethods", $h.prototype.lk);
        (0, _.O)("IframeBase.prototype.getOpenerIframe", $h.prototype.ob);
        (0, _.O)("IframeBase.prototype.getOpenParams", $h.prototype.Ja);
        (0, _.O)("IframeBase.prototype.getParams", $h.prototype.Re);
        (0, _.O)("IframeBase.prototype.removeCallback", $h.prototype.Dd);
        (0, _.O)("Iframe", fi);
        (0, _.O)("Iframe.prototype.close", fi.prototype.close);
        (0, _.O)("Iframe.prototype.exposeMethod", fi.prototype.Fb);
        (0, _.O)("Iframe.prototype.getId", fi.prototype.Z);
        (0, _.O)("Iframe.prototype.getIframeEl", fi.prototype.Fa);
        (0, _.O)("Iframe.prototype.getSiteEl", fi.prototype.ka);
        (0, _.O)("Iframe.prototype.openInto", fi.prototype.Ic);
        (0, _.O)("Iframe.prototype.remove", fi.prototype.remove);
        (0, _.O)("Iframe.prototype.setSiteEl", fi.prototype.Gd);
        (0, _.O)("Iframe.prototype.addCallback", fi.prototype.Qa);
        (0, _.O)("Iframe.prototype.getMethods", fi.prototype.lk);
        (0, _.O)("Iframe.prototype.getOpenerIframe", fi.prototype.ob);
        (0, _.O)("Iframe.prototype.getOpenParams", fi.prototype.Ja);
        (0, _.O)("Iframe.prototype.getParams", fi.prototype.Re);
        (0, _.O)("Iframe.prototype.removeCallback", fi.prototype.Dd);
        (0, _.O)("IframeProxy", hi);
        (0, _.O)("IframeProxy.prototype.getTargetIframeId", hi.prototype.B);
        (0, _.O)("IframeProxy.prototype.addCallback", hi.prototype.Qa);
        (0, _.O)("IframeProxy.prototype.getMethods", hi.prototype.lk);
        (0, _.O)("IframeProxy.prototype.getOpenerIframe", hi.prototype.ob);
        (0, _.O)("IframeProxy.prototype.getOpenParams", hi.prototype.Ja);
        (0, _.O)("IframeProxy.prototype.getParams", hi.prototype.Re);
        (0, _.O)("IframeProxy.prototype.removeCallback", hi.prototype.Dd);
        (0, _.O)("IframeWindow", ji);
        (0, _.O)("IframeWindow.prototype.close", ji.prototype.close);
        (0, _.O)("IframeWindow.prototype.onClosed", ji.prototype.A);
        (0, _.O)("iframes.util.getTopMostAccessibleWindow", _.V.ea.ht);
        (0, _.O)("iframes.handlers.get", _.V.Dk.get);
        (0, _.O)("iframes.handlers.set", _.V.Dk.set);
        (0, _.O)("iframes.resizeMe", _.V.GF);
        (0, _.O)("iframes.setVersionOverride", _.V.PG);
        $h.prototype.send = function (a, b, c) {
            _.V.lw(this, a, b, c)
        };
        _.Fh.send = function (a, b, c) {
            _.V.lw(_.Fh, a, b, c)
        };
        $h.prototype.P = function (a, b) {
            var c = this;
            c.Qa(a, function (a) {
                b.call(c, a)
            })
        };
        _.V.lw = function (a, b, c, d) {
            var f = [];
            c !== _.l && f.push(c);
            d && f.push(function (a) {
                d.call(this, [a])
            });
            a[b] && a[b].apply(a, f)
        };
        _.V.Nc = (0, _.x)(_.n);
        (0, _.O)("iframes.CROSS_ORIGIN_IFRAMES_FILTER", _.V.Nc);
        (0, _.O)("IframeBase.prototype.send", $h.prototype.send);
        (0, _.O)("IframeBase.prototype.register", $h.prototype.P);
        (0, _.O)("Iframe.prototype.send", fi.prototype.send);
        (0, _.O)("Iframe.prototype.register", fi.prototype.P);
        (0, _.O)("IframeProxy.prototype.send", hi.prototype.send);
        (0, _.O)("IframeProxy.prototype.register", hi.prototype.P);
        (0, _.O)("IframeWindow.prototype.send", ji.prototype.send);
        (0, _.O)("IframeWindow.prototype.register", ji.prototype.P);
        (0, _.O)("iframes.iframer.send", _.V.Eu.send);

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.xd = window.googleapis && window.googleapis.server || {};
    } catch (e) {
        _._DumpException(e)
    }
    try {

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.P = _.P || {};
        (function () {
            function a(b) {
                var c = "";
                if (3 == b.nodeType || 4 == b.nodeType) c = b.nodeValue;
                else if (b.innerText) c = b.innerText;
                else if (b.innerHTML) c = b.innerHTML;
                else if (b.firstChild) {
                    c = [];
                    for (b = b.firstChild; b; b = b.nextSibling) c.push(a(b));
                    c = c.join("")
                }
                return c
            }
            _.P.createElement = function (a) {
                var c;
                if (!window.document.body || window.document.body.namespaceURI) try {
                    c = window.document.createElementNS("http://www.w3.org/1999/xhtml", a)
                } catch (d) {}
                return c || window.document.createElement(a)
            };
            _.P.Lm = function (a) {
                var c = _.P.createElement("iframe");
                try {
                    var d = ["<", "iframe"],
                        f = a || {}, g;
                    for (g in f) f.hasOwnProperty(g) && (d.push(" "), d.push(g), d.push('="'), d.push(_.P.Vj(f[g])), d.push('"'));
                    d.push("></");
                    d.push("iframe");
                    d.push(">");
                    var h = _.P.createElement(d.join(""));
                    h && (!c || h.tagName == c.tagName && h.namespaceURI == c.namespaceURI) && (c = h)
                } catch (m) {}
                d = c;
                a = a || {};
                for (var q in a) a.hasOwnProperty(q) && (d[q] = a[q]);
                return c
            };
            _.P.Fs = function () {
                if (window.document.body) return window.document.body;
                try {
                    var a = window.document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "body");
                    if (a && 1 == a.length) return a[0]
                } catch (c) {}
                return window.document.documentElement || window.document
            };
            _.P.XM = function (b) {
                return a(b)
            }
        })();

    } catch (e) {
        _._DumpException(e)
    }
    try {

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Cc = window.oauth2 || {};
        _.Dc = window.auth_firstparty || {};
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Ec = function (a, b) {
            this.A = a;
            var c = b || {};
            this.D = c.CN;
            this.B = c.domain;
            this.C = c.path;
            this.F = c.YF
        };
        _.Fc = function (a) {
            this.A = a
        };
        _.Gc = function (a) {
            this.A = a;
            this.B = window.sessionStorage
        };
        var Hc = /^[-+/_=.:|%&a-zA-Z0-9@]*$/,
            Ic = /^[A-Z_][A-Z0-9_]{0,63}$/;
        _.Ec.prototype.kh = function () {
            for (var a = this.A + "=", b = window.document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
                var d = b[c];
                if (0 == d.indexOf(a)) return d.substr(a.length)
            }
        };
        _.Ec.prototype.write = function (a, b) {
            Ic.test(this.A) || (0, _.k)("Invalid cookie name");
            Hc.test(a) || (0, _.k)("Invalid cookie value");
            var c = this.A + "=" + a;
            this.B && (c += ";domain=" + this.B);
            this.C && (c += ";path=" + this.C);
            var d = "number" === typeof b ? b : this.D;
            if (0 <= d) {
                var f = new Date;
                f.setSeconds(f.getSeconds() + d);
                c += ";expires=" + f.toUTCString()
            }
            this.F && (c += ";secure");
            window.document.cookie = c
        };
        _.Ec.prototype.clear = function () {
            this.write("", 0)
        };
        _.Ec.iterate = function (a) {
            for (var b = window.document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
                var d = b[c].split("="),
                    f = d.shift();
                a(f, d.join("="))
            }
        };
        var Jc = {};
        _.Fc.prototype.kh = function () {
            if (Jc.hasOwnProperty(this.A)) return Jc[this.A]
        };
        _.Fc.prototype.write = function (a) {
            Jc[this.A] = a
        };
        _.Fc.prototype.clear = function () {
            delete Jc[this.A]
        };
        _.Fc.iterate = function (a) {
            for (var b in Jc) Jc.hasOwnProperty(b) && a(b, Jc[b])
        };
        _.Gc.prototype.kh = function () {
            return this.B.getItem(this.A)
        };
        _.Gc.prototype.write = function (a) {
            this.B.setItem(this.A, a)
        };
        _.Gc.prototype.clear = function () {
            this.B.removeItem(this.A)
        };
        _.Gc.iterate = function (a) {
            for (var b = 0, c = window.sessionStorage.length; b < c; ++b) {
                var d = window.sessionStorage.key(b);
                a(d, window.sessionStorage[d])
            }
        };
        for (var Kc = 0; 64 > Kc; ++Kc);
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var cd;
        _.ad = function () {
            return Math.floor((new Date).getTime() / 1E3)
        };
        _.bd = function (a) {
            a = a.toUpperCase();
            for (var b = 0, c = cd.length; b < c; ++b) {
                var d = a.split(cd[b]);
                2 == d.length && "" === d[1] && (a = d[0])
            }
            a = a.replace(/-/g, "_").toUpperCase();
            40 < a.length && (b = new _.$c, b.hq(a), a = b.Ne().toUpperCase());
            return a
        };
        _.dd = function (a) {
            var b = a.substr(1),
                c = "",
                d = window.location.hostname;
            if ("" !== b) {
                c = (0, window.parseInt)(b, 10);
                if ((0, window.isNaN)(c)) return _.p;
                b = d.split(".");
                if (b.length < c - 1) return _.p;
                b.length == c - 1 && (d = "." + d)
            } else d = "";
            return {
                hb: "S" == a.charAt(0),
                domain: d,
                Sc: c
            }
        };
        _.ed = function (a) {
            if (0 !== a.indexOf("GCSC")) return _.p;
            var b = {
                Ii: _.t
            };
            a = a.substr(4);
            if (!a) return b;
            var c = a.charAt(0);
            a = a.substr(1);
            var d = a.lastIndexOf("_");
            if (-1 == d) return b;
            var f = (0, _.dd)(a.substr(d + 1));
            if (f == _.p) return b;
            a = a.substring(0, d);
            if ("_" !== a.charAt(0)) return b;
            d = "E" === c && f.hb;
            return !d && ("U" !== c || f.hb) || d && !_.gd ? b : {
                Ii: _.n,
                hb: d,
                Tr: a.substr(1),
                domain: f.domain,
                Sc: f.Sc
            }
        };
        var hd = function (a) {
            this.B = a;
            this.A = _.p
        };
        _.id = function (a) {
            if (!a) return _.p;
            "single_host_origin" !== a && (a = _.R.Ca(a));
            var b = window.location.hostname,
                c = b,
                d = _.gd;
            if ("single_host_origin" !== a) {
                c = a.split("://");
                if (2 == c.length) d = "https" === c.shift();
                else return (0, _.Pc)("WARNING invalid cookie_policy: " + a), _.p;
                c = c[0]
            }
            if (-1 !== c.indexOf(":")) c = b = "";
            else {
                a = "." + c;
                if (b.lastIndexOf(a) !== b.length - a.length) return (0, _.Pc)("Invalid cookie_policy domain: " + c), _.p;
                c = a;
                b = c.split(".").length - 1
            }
            return {
                domain: c,
                hb: d,
                Sc: b
            }
        };
        var jd = function (a) {
            if (!a) return _.p;
            var b = a.client_id;
            if (!b) return _.p;
            b = (0, _.bd)(b);
            a = (0, _.id)(a.cookie_policy);
            return a ? !_.gd && a.hb ? ((0, _.Pc)("WARNING: https cookie_policy set for http domain"), _.p) : ["GCSC", a.hb ? "E" : "U", "_", b, "_", a.hb ? "S" : "H", a.Sc].join("") : _.p
        };
        _.kd = function (a) {
            return a ? {
                domain: a.domain,
                path: "/",
                YF: a.hb
            } : _.p
        };
        _.ld = function (a) {
            var b = md[a];
            b || (b = new hd(new _.Fc(a)), md[a] = b);
            return {
                Uf: b,
                key: a
            }
        };
        _.nd = function (a, b) {
            var c = b ? od : md,
                d = b ? _.pd : _.Gc,
                f = a && jd(a),
                g = !! f;
            a && !a.g_user_cookie_policy && (d = _.Fc, f = "token");
            if (!f)
                if (!b && _.qd) f = _.qd;
                else return _.p;
            var h = c[f];
            if (!h) {
                h = (0, _.ed)(f);
                if (!("token" === f || h && h.Ii)) return _.p;
                h = new d(f, (0, _.kd)(h));
                b || (h = new hd(h))
            }
            c[f] = h;
            return {
                Uf: h,
                key: f,
                zB: g
            }
        };
        _.rd = function (a, b, c) {
            a = a && "token" !== a ? (0, _.ld)(a) : (0, _.nd)();
            if (!a) return _.p;
            if (c) {
                c = a.Uf;
                (0, _.cb)();
                var d = c.B.kh();
                c = _.p;
                try {
                    c = _.Lc.parse(d)
                } catch (f) {}
                c == _.t && (c = _.p);
                d = (0, _.wc)() || "0";
                d = String(d);
                c = c && c[d]
            } else c = a.Uf.kh();
            c && c.expires_at && (0, _.ad)() > c.expires_at && (a.Uf.clear(), c = _.p);
            c && c.error && !b && (c = _.p);
            return c
        };
        _.sd = function (a, b) {
            var c = "";
            if (!a) return c;
            var d = b || "&",
                f;
            for (f in a)
                if ({}.hasOwnProperty.call(a, f)) {
                    var g;
                    g = a[f];
                    if (g != _.p) {
                        var h = [(0, window.encodeURIComponent)(f), "="];
                        if (g instanceof Array) {
                            for (var m = [], q = 0; q < g.length; q++) m.push((0, window.encodeURIComponent)(g[q]));
                            h.push(m.join("+"))
                        } else h.push((0, window.encodeURIComponent)(g));
                        g = h.join("")
                    } else g = "";
                    g && (c && (c += d), c += g)
                }
            return c
        };
        _.td = {};
        cd = [".APPS.GOOGLEUSERCONTENT.COM", "@DEVELOPER.GSERVICEACCOUNT.COM"];
        _.gd = "https:" === window.location.protocol;
        _.pd = _.gd || "http:" === window.location.protocol ? _.Ec : _.Fc;
        var wd;
        var od;
        var md;
        md = (0, _.cb)();
        od = (0, _.cb)();
        _.ud = (0, _.cb)();
        _.vd = (0, _.cb)();
        _.qd = _.p;
        wd = "state code cookie_policy g_user_cookie_policy authuser prompt g-oauth-window".split(" ");
        hd.prototype.write = function (a) {
            var b = (0, _.cb)(),
                c = (0, _.cb)(),
                d;
            for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = a[d], b[d] = a[d]);
            d = 0;
            for (var f = wd.length; d < f; ++d) delete c[wd[d]];
            a = String(a.authuser || 0);
            d = (0, _.cb)();
            d[a] = _.P.Ka("#" + (0, _.sd)(c));
            this.B.write(_.Lc.stringify(d));
            this.A = b
        };
        hd.prototype.kh = (0, _.u)("A");
        hd.prototype.clear = function () {
            this.B.clear();
            this.A = (0, _.cb)()
        };
        _.Gc.iterate(function (a) {
            var b = (0, _.ed)(a);
            b && b.Ii && (md[a] = new hd(new _.Gc(a, (0, _.kd)(b))))
        });
        _.pd.iterate(function (a) {
            md[a] && (od[a] = new _.pd(a, (0, _.kd)((0, _.ed)(a))))
        });

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.vc.Ca = function (a) {
            if (!a) return "";
            a = a.split("#")[0].split("?")[0];
            a = a.toLowerCase();
            0 == a.indexOf("//") && (a = window.location.protocol + a);
            /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
            var b = a.substring(a.indexOf("://") + 3),
                c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
            a = a.substring(0, a.indexOf("://"));
            "http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && (0, _.k)(Error("i"));
            var c = "",
                d = b.indexOf(":");
            if (-1 != d) {
                var f = b.substring(d + 1),
                    b = b.substring(0, d);
                if ("http" === a && "80" !== f || "https" === a && "443" !== f) c = ":" + f
            }
            return a + "://" + b + c
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.yd = function () {
            var a = /\s*;\s*/;
            return {
                get: function (b, c) {
                    for (var d = b + "=", f = (window.document.cookie || "").split(a), g = 0, h; h = f[g]; ++g)
                        if (0 == h.indexOf(d)) return h.substr(d.length);
                    return c
                }
            }
        }();
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Dc = function () {
            function a() {
                var a = window.__OVERRIDE_SID;
                a == _.p && (a = _.yd.get("SID"));
                return !!a
            }
            return {
                lu: function (a) {
                    var c = {
                        SAPISIDHASH: _.n,
                        APISIDHASH: _.n
                    };
                    return a && (a.OriginToken || a.Authorization && c[String(a.Authorization).split(" ")[0]]) ? _.n : _.t
                },
                $D: a,
                dC: function () {
                    var b = _.p;
                    a() && (b = window.__PVT, b == _.p && (b = _.yd.get("BEAT")));
                    return b
                },
                $h: function () {
                    var b = _.vc.Ca(String(window.location.href));
                    if (a()) {
                        var c = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:"),
                            d = c ? "SAPISID" : "APISID",
                            f = c ? window.__SAPISID : window.__APISID;
                        f == _.p && (f = _.yd.get(d));
                        if (f) return c = c ? "SAPISIDHASH" : "APISIDHASH", d = (0, _.zd)(), d.reset(), d.update([f, b].join(" ")), c + " " + d.Ne().toLowerCase()
                    }
                    return _.p
                }
            }
        }();

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.yf = 2147483648 * Math.random() | 0;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var gg;
        var eg;
        var dg;
        var Uf;
        var Tf;
        var Sf;
        var Rf;
        var Qf;
        var Cf;
        var Df;
        var Ef;
        var Ff;
        var Gf;
        _.zf = function (a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        };
        _.Af = function (a, b) {
            return -1 != a.indexOf(b)
        };
        _.Bf = function (a, b) {
            if (b) return a.replace(Cf, "&amp;").replace(Df, "&lt;").replace(Ef, "&gt;").replace(Ff, "&quot;");
            if (!Gf.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Cf, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Df, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ef, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ff, "&quot;"));
            return a
        };
        _.Hf = function (a, b) {
            return 0 == a.lastIndexOf(b, 0)
        };
        _.If = function () {
            return _.la.navigator ? _.la.navigator.userAgent : _.p
        };
        var Jf = function () {
            return _.la.navigator
        };
        var Kf = function () {
            var a = _.la.document;
            return a ? a.documentMode : _.l
        };
        _.Lf = function (a) {
            var b;
            if (!(b = Mf[a])) {
                b = 0;
                for (var c = (0, _.zf)(String(Nf)).split("."), d = (0, _.zf)(String(a)).split("."), f = Math.max(c.length, d.length), g = 0; 0 == b && g < f; g++) {
                    var h = c[g] || "",
                        m = d[g] || "",
                        q = RegExp("(\\d*)(\\D*)", "g"),
                        r = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var s = q.exec(h) || ["", "", ""],
                            v = r.exec(m) || ["", "", ""];
                        if (0 == s[0].length && 0 == v[0].length) break;
                        b = ((0 == s[1].length ? 0 : (0, window.parseInt)(s[1], 10)) < (0 == v[1].length ? 0 : (0, window.parseInt)(v[1], 10)) ? -1 : (0 == s[1].length ? 0 : (0, window.parseInt)(s[1], 10)) > (0 == v[1].length ?
                            0 : (0, window.parseInt)(v[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == v[2].length) ? -1 : (0 == s[2].length) > (0 == v[2].length) ? 1 : 0) || (s[2] < v[2] ? -1 : s[2] > v[2] ? 1 : 0)
                    } while (0 == b)
                }
                b = Mf[a] = 0 <= b
            }
            return b
        };
        _.Of = function (a) {
            return _.T && Pf >= a
        };
        Gf = /[&<>\"]/;
        Ff = /\"/g;
        Ef = />/g;
        Df = /</g;
        Cf = /&/g;
        Uf = Tf = Sf = Rf = Qf = _.t;
        var Yf;
        if (Yf = (0, _.If)()) {
            var Zf = Jf();
            Qf = (0, _.Hf)(Yf, "Opera");
            Rf = !Qf && ((0, _.Af)(Yf, "MSIE") || (0, _.Af)(Yf, "Trident"));
            Tf = (Sf = !Qf && (0, _.Af)(Yf, "WebKit")) && (0, _.Af)(Yf, "Mobile");
            Uf = !Qf && !Sf && !Rf && "Gecko" == Zf.product
        }
        _.$f = Qf;
        _.T = Rf;
        _.ag = Uf;
        _.bg = Sf;
        _.cg = Tf;
        dg = Jf();
        eg = dg && dg.platform || "";
        _.Vf = (0, _.Af)(eg, "Mac");
        _.Wf = (0, _.Af)(eg, "Win");
        _.Xf = (0, _.Af)(eg, "Linux");
        _.fg = !! Jf() && (0, _.Af)(Jf().appVersion || "", "X11");
        t: {
            var hg = "",
                ig;
            if (_.$f && _.la.opera) var jg = _.la.opera.version,
            hg = "function" == typeof jg ? jg() : jg;
            else if (_.ag ? ig = /rv\:([^\);]+)(\)|;)/ : _.T ? ig = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : _.bg && (ig = /WebKit\/(\S+)/), ig) var kg = ig.exec((0, _.If)()),
            hg = kg ? kg[1] : "";
            if (_.T) {
                var lg = Kf();
                if (lg > (0, window.parseFloat)(hg)) {
                    gg = String(lg);
                    break t
                }
            }
            gg = hg
        }
        var Nf = gg,
            Mf = {}, mg = _.la.document,
            Pf = mg && _.T ? Kf() || ("CSS1Compat" == mg.compatMode ? (0, window.parseInt)(Nf, 10) : 5) : _.l;

    } catch (e) {
        _._DumpException(e)
    }
    try {

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.en = function (a) {
            return Array.prototype.join.call(arguments, "")
        };
        _.fn = function (a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        };
        _.gn = function (a, b, c, d, f, g, h) {
            var m = "";
            a && (m += a + ":");
            c && (m += "//", b && (m += b + "@"), m += c, d && (m += ":" + d));
            f && (m += f);
            g && (m += "?" + g);
            h && (m += "#" + h);
            return m
        };
        _.hn = function (a) {
            if (jn) {
                jn = _.t;
                var b = _.la.location;
                if (b) {
                    var c = b.href;
                    c && (c = (c = (0, _.hn)(c)[3] || _.p) && (0, window.decodeURIComponent)(c)) && c != b.hostname && (jn = _.n, (0, _.k)(Error()))
                }
            }
            return a.match(kn)
        };
        _.ln = function (a) {
            if (a[1]) {
                var b = a[0],
                    c = b.indexOf("#");
                0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
                c = b.indexOf("?");
                0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = _.l)
            }
            return a.join("")
        };
        _.mn = function (a, b, c) {
            if ((0, _.ra)(b))
                for (var d = 0; d < b.length; d++)(0, _.mn)(a, String(b[d]), c);
            else b != _.p && c.push("&", a, "" === b ? "" : "=", (0, window.encodeURIComponent)(String(b)))
        };
        _.nn = function (a, b) {
            for (var c in b)(0, _.mn)(c, b[c], a);
            return a
        };
        _.on = function (a, b) {
            (0, _.fn)(a, "/") && (a = a.substr(0, a.length - 1));
            (0, _.Hf)(b, "/") && (b = b.substr(1));
            return (0, _.en)(a, "/", b)
        };
        var kn = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
            jn = _.bg;

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var pn = function (a, b) {
            var c = _.P.Lm({
                id: a,
                name: a
            });
            c.style.width = "1px";
            c.style.height = "1px";
            c.style.position = "absolute";
            c.style.top = "-100px";
            var d;
            if (window.navigator) {
                d = window.navigator.userAgent || "";
                var f = window.navigator.product || "";
                d = 0 != d.indexOf("Opera") && -1 == d.indexOf("WebKit") && "Gecko" == f && 0 < d.indexOf("rv:1.")
            } else d = _.t;
            c.src = d ? "about:blank" : b;
            window.document.body.appendChild(c);
            d && (c.src = b);
            return c
        };
        _.qn = function () {
            function a(a, b, c, d) {
                for (var f = 0; f < z.length; f++) {
                    var g = z[f];
                    window.setTimeout(function () {
                        g(a, b, c, d)
                    }, 1)
                }
            }

            function b(a, b, c, d) {
                var f = m("proxy");
                if (c || !f) var f = m("root"),
                g = m("root-1p") || f, h = m("xd3"), f = (c || String(b ? g : f)) + h;
                (b = _.P.Ka().jsh || _.vc.Am.Qs()) && (f += (0 <= f.indexOf("?") ? "&" : "?") + "jsh=" + (0, window.encodeURIComponent)(b));
                m("push") && (f += (0 <= f.indexOf("?") ? "&" : "?") + "p=1");
                f += "#parent=" + (0, window.encodeURIComponent)(d != _.p ? String(d) : _.vc.Ca(window.document.location.href));
                return f += "&rpctoken=" +
                    a
            }

            function c(b, c, d, h) {
                var m = f(d, h),
                    q = pn(m, c);
                _.R.P("ready:" + b, function () {
                    _.R.Wf("ready:" + b);
                    if (!v[m]) {
                        v[m] = _.n;
                        var c = w[m];
                        w[m] = [];
                        for (var f = 0, q = c.length; f < q; ++f) {
                            var r = c[f];
                            g(r.Pi, r.DF, r.eb)
                        }
                        a("ready", (new Date).getTime(), d, h || _.p)
                    }
                });
                _.R.Ti(m, c);
                s[m] = q
            }

            function d(d, f) {
                var g = String(2147483647 * (0, _.xf)() | 0),
                    h = b(g, d, f);
                a("loading", (new Date).getTime(), d, f || _.p);
                (0, _.Sc)(function () {
                    c(g, h, d, f)
                })
            }

            function f(a, c) {
                var d = b("", a, c, ""),
                    f = r[d];
                f || (f = (0, _.zd)(), f.update(d), f = f.Ne().toLowerCase(), f += Math.random(),
                    r[d] = f);
                return "apiproxy" + f
            }

            function g(a, b, c) {
                function g(a) {
                    a && (m = a.root || m, q = _.Dc.lu(a.headers))
                }
                var m = _.p,
                    q = _.t;
                if ("makeRequest" === a || "listen" === a) g(b);
                else if ("makeHttpRequests" === a && b) {
                    for (var r = (0, _.N)("client/jsonpOverride"), z = 0, S = b.length; z < S; ++z) {
                        var Y = b[z];
                        Y && (Y = Y.params, g(Y), r && h(Y, c))
                    }
                    if (r) return
                }
                r = f(q, m);
                s[r] || d(q, m);
                v[r] ? _.R.call(r, a, function (b) {
                    var d = _.Lc.parse(b);
                    if ("makeRequest" == a && d) {
                        for (var f = {}, g = 0; g < d.length; g++) f[d[g].id] = d[g];
                        c(f, b)
                    } else c(d, b)
                }, b) : (w[r] || (w[r] = []), w[r].push({
                    Pi: a,
                    DF: b,
                    eb: c
                }))
            }

            function h(a, b) {
                "GET" != a.httpMethod && (0, _.k)("JSONP supports GET methods only.");
                var c = "jpcb" + String(2147483647 * (0, _.xf)() | 0),
                    d = window.document.createElement("script"),
                    f = window.document.getElementsByTagName("head")[0];
                window[c] = function (a) {
                    b(a);
                    try {
                        delete window[c]
                    } catch (g) {
                        window[c] = _.l
                    }
                    window.setTimeout(function () {
                        f.removeChild(d)
                    }, 1)
                };
                var g = a.root || m("root"),
                    h = a.urlParams;
                h.callback = c;
                g = (0, _.on)(g, a.url);
                h = (0, _.ln)((0, _.nn)([g], h));
                d.setAttribute("id", c);
                d.setAttribute("src", h);
                d.setAttribute("charset",
                    "utf-8");
                f.appendChild(d)
            }

            function m(a) {
                return (0, _.N)("googleapis.config/" + a)
            }
            var q = window.location ? String(window.location.href) : _.p,
                r = {}, s = {}, v = {}, w = {}, z = [];
            return {
                Kh: function (a, b) {
                    var c = a || {}, d;
                    window.location != _.p ? q = d = String(window.location.href) : d = q;
                    d = _.vc.Ca(d);
                    c["X-Origin"] = d;
                    d = c.Authorization;
                    var f = c.OriginToken;
                    if (d == _.p && f == _.p) {
                        if (d == _.p) {
                            var g;
                            _.Cc && _.td && (g = (0, _.rd)(_.l, _.l));
                            g && g.access_token && (d = String(g.token_type || "Bearer") + " " + g.access_token)
                        }
                        d == _.p && m("auth/useFirstPartyAuth") &&
                            _.Dc.$D() && (g = c["X-Goog-AuthUser"], g == _.p && (g = _.google.Vn(b) || "0"), (d = _.Dc.$h()) && (c["X-Goog-AuthUser"] = g));
                        d ? c.Authorization = d : m("auth/useOriginToken") !== _.t && (f = _.Dc.dC()) && (c.OriginToken = f)
                    }
                    return c
                },
                cA: function (a) {
                    z.push(a)
                },
                A: h,
                wF: function (a) {
                    for (var b = 0; b < z.length; b++)
                        if (z[b] == a) {
                            z.splice(b, 1);
                            break
                        }
                },
                hf: g
            }
        }();

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var ___;
        _.rn = window.tamings___ || [];
        _.sn = window.caja___;
        ___ = window.___;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var tn = function (a, b, c) {
            this.method = a;
            this.transport = b;
            this.rpc = c
        };
        _.Qa.To = function () {
            function a(a) {
                var b = {
                    method: a.request.method,
                    id: a.key
                };
                a.request.rpc && (b.params = a.request.rpc);
                return b
            }
            var b = {}, c = [];
            b.execute = function (b) {
                function f(a) {
                    a.error && (g.error = a.error);
                    for (var f = 0; f < c.length; f++) {
                        var h = c[f].key,
                            q = a[h];
                        q && (g[h] = q.error ? q : q.data || q.result)
                    }
                    m--;
                    0 === m && b(g)
                }
                for (var g = {}, h = {}, m = 0, q = [], r = 0; r < c.length; r++) {
                    var s = c[r].request.transport;
                    h[s.name] || (q.push(s), m++);
                    h[s.name] = h[s.name] || [];
                    h[s.name].push(a(c[r]))
                }
                for (r = 0; r < q.length; r++) q[r].execute(h[q[r].name], f);
                0 == m && window.setTimeout(function () {
                    b(g)
                }, 0)
            };
            b.add = function (a, f) {
                f && a && c.push({
                    key: a,
                    request: f
                });
                return b
            };
            return b
        };
        _.Qa.om = function (a, b) {
            if ("newBatch" !== a) {
                for (var c = a.split("."), d = window.osapi, f = 0; f < c.length - 1; f++) d[c[f]] = d[c[f]] || {}, d = d[c[f]];
                var g = c[c.length - 1];
                d[g] ? (d.__dupwarn || (0, _.Na)("Skipping duplicate osapi method definition " + a + " on transport " + b.name + "; others may exist, but suppressing warnings"), d.__dupwarn = _.n) : (d[g] = function (c) {
                    c = c || {};
                    c.userId = c.userId || "@viewer";
                    c.groupId = c.groupId || "@self";
                    return new tn(a, b, c)
                }, "undefined" !== typeof _.rn && _.rn.push(function () {
                    _.sn.markTameAsFunction(d[g], a)
                }))
            }
        };
        tn.prototype.execute = function (a) {
            var b = "undefined" !== typeof _.sn && _.sn.getUseless && _.sn.getUseless(),
                c = b ? _.sn.getUseless() : this,
                d = b ? _.sn.untame(a) : a;
            a = _.Qa.To();
            a.add(this.method, this);
            a.execute(function (a) {
                a.error ? d.call(c, a.error) : d.call(c, a[c.method])
            })
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var un = function (a, b) {
            for (var c = a.split("."), d = b || window, f; f = c.shift();)
                if (d[f] != _.p) d = d[f];
                else return _.p;
            return d
        };
        var vn = function (a, b, c) {
            a = a.split(".");
            c = c || window;
            a[0] in c || !c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || b === _.l ? c = c[d] ? c[d] : c[d] = {} : c[d] = b
        };
        var wn = function (a, b) {
            _.Qa.om(a, {
                name: "googleapis",
                execute: xn,
                root: b
            });
            var c = un(a, window.osapi);
            vn(a, c);
            if (0 != a.indexOf("googleapis.")) {
                var d = a.substring(a.indexOf(".") + 1),
                    f = d.lastIndexOf(".delete"); - 1 != f && f + 7 == d.length && (d = d.replace(".delete", ".remove"));
                vn("googleapis." + d, c)
            }
        };
        _.yn = function (a) {
            for (var b in a) a.hasOwnProperty(b) && (zn[b] = a[b])
        };
        _.An = function (a) {
            Bn("key", a)
        };
        var Bn = function (a, b) {
            b == _.p ? Cn(a) : (_.Dn = _.Dn || {}, _.Dn[a] = b)
        };
        var Cn = function (a) {
            _.Dn && delete _.Dn[a]
        };
        var En = function (a) {
            a = a || {};
            if (window.navigator) {
                for (var b = ["appVersion", "platform", "userAgent"], c = [], d = 0; d < b.length; d++) window.navigator[b[d]] && c.push((0, window.encodeURIComponent)(b[d]) + "=" + (0, window.encodeURIComponent)(window.navigator[b[d]]));
                a["X-ClientDetails"] = c.join("&")
            }
            return a
        };
        var Fn = function (a, b) {
            for (var c = 0; c < Gn.length; c++) window.setTimeout(function (b) {
                return function () {
                    b(a)
                }
            }(Gn[c]), 1);
            return function () {
                var a = arguments;
                b.apply(_.p, a);
                for (var c = 0; c < Hn.length; c++) window.setTimeout(function (b) {
                    return function () {
                        b.apply(_.p, a)
                    }
                }(Hn[c]), 1)
            }
        };
        var In = function (a) {
            a.applicationName = Jn;
            a.clientVersion = "1.0.0-alpha";
            _.Dn && (a.urlParams = _.Dn, _.Dn.key && (a.developerKey = _.Dn.key))
        };
        var xn = function (a, b) {
            for (var c = this.root || _.p, d = 0; d < a.length; d++) {
                var f = a[d],
                    g = f.method.substring(0, f.method.indexOf("."));
                f.jsonrpc = "2.0";
                f.key = f.id;
                c = f.root || c;
                (g = zn[g] || "v1") && !f.apiVersion && (f.apiVersion = g)
            }
            d = {};
            d = _.qn.Kh(d);
            d = En(d);
            c = {
                requests: a,
                headers: d,
                root: c
            };
            In(c);
            d = Fn(a, b);
            _.qn.hf("makeRequest", c, d)
        };
        var Kn = function (a) {
            Gn.push(a)
        };
        var Ln = function (a) {
            Hn.push(a)
        };
        var Mn = function (a) {
            for (var b = 0; b < Gn.length; b++)
                if (Gn[b] == a) {
                    Gn.splice(b, 1);
                    break
                }
        };
        var Nn = function (a) {
            for (var b = 0; b < Hn.length; b++)
                if (Hn[b] == a) {
                    Hn.splice(b, 1);
                    break
                }
        };
        var On = function (a, b) {
            for (var c = 0, d = a.length; c < d; c++) {
                var f = a[c];
                f.key = f.id;
                var g = f.params.headers || {}, g = _.qn.Kh(g),
                    g = En(g);
                f.params.headers = g;
                In(f.params)
            }
            c = Fn(a, b);
            _.qn.hf("makeHttpRequests", a, c)
        };
        var Pn = function () {
            var a = _.P.Ka(),
                b = {
                    debug: "googleapis.config/debug"
                }, c;
            for (c in b) a[c] && (0, _.Tb)(b[c], "true" == a[c]);
            for (var d in (0, _.N)("googleapis.config/methods")) wn(d);
            (0, _.N)("googleapis.config/versions") && (0, _.yn)((0, _.N)("googleapis.config/versions"));
            (0, _.N)("googleapis.config/developerKey") && (0, _.An)((0, _.N)("googleapis.config/developerKey"));
            _.Qa.om("googleapis.newHttpRequest", {
                name: "googleapis",
                execute: On
            });
            vn("googleapis.newHttpRequest", un("googleapis.newHttpRequest", window.osapi))
        };
        var Qn = function () {
            this.B = {};
            this.A = _.Qa.To()
        };
        var Hn;
        var Gn;
        var zn;
        var Jn;
        Jn = _.p;
        zn = {};
        Gn = [];
        Hn = [];
        Pn();
        Qn.prototype.add = function (a, b, c) {
            this.B[a] = c;
            this.A.add(a, b);
            return this
        };
        Qn.prototype.execute = function (a) {
            var b = this;
            this.A.execute(function (c) {
                var d = {}, f = _.t,
                    g;
                for (g in c)
                    if (c.hasOwnProperty(g)) {
                        var h = c[g],
                            m = b.B[g];
                        m ? m(h) : (d[g] = h, f = _.n)
                    }
                f && a && a(d)
            })
        };
        (0, _.O)("googleapis.ApiClient.register", wn);
        (0, _.O)("googleapis.ApiClient.setVersions", _.yn);
        (0, _.O)("googleapis.ApiClient.setDeveloperKey", _.An);
        (0, _.O)("googleapis.ApiClient.setUrlParameter", Bn);
        (0, _.O)("googleapis.ApiClient.removeUrlParameter", Cn);
        (0, _.O)("googleapis.ApiClient.addExecuteListener", Kn);
        (0, _.O)("googleapis.ApiClient.addResponseListener", Ln);
        (0, _.O)("googleapis.ApiClient.removeExecuteListener", Mn);
        (0, _.O)("googleapis.ApiClient.removeResponseListener", Nn);
        (0, _.O)("googleapis.ApiClient.init", Pn);
        (0, _.O)("googleapis.Batch", Qn);
        (0, _.O)("googleapis.Batch.prototype.add", Qn.prototype.add);
        (0, _.O)("googleapis.Batch.prototype.execute", Qn.prototype.execute);
        (0, _.O)("googleapis.init", function () {
            Pn()
        });
        (0, _.O)("googleapis.newBatch", function () {
            return new Qn
        });
        (0, _.O)("googleapis.newRequest", function (a, b, c) {
            b = b || {};
            var d = {
                name: "googleapis",
                execute: xn,
                root: c
            }, f = _.Qa.To(),
                g = this;
            c = {};
            c.method = a;
            c.transport = d;
            c.rpc = b;
            c.execute = function (c) {
                f.add(a, {
                    method: a,
                    rpc: b,
                    transport: d
                });
                f.execute(function (b) {
                    b.error ? c.call(g, b.error) : c.call(g, b[a])
                })
            };
            return c
        });
        (0, _.O)("googleapis.register", function (a, b) {
            wn(a, b)
        });
        (0, _.O)("googleapis.setUrlParameter", function (a, b) {
            Bn(a, b)
        });
        (0, _.O)("googleapis.removeUrlParameter", function (a) {
            Cn(a)
        });
        (0, _.O)("googleapis.setDeveloperKey", function (a) {
            (0, _.An)(a)
        });
        (0, _.O)("googleapis.setApplicationName", function (a) {
            Jn = a
        });
        (0, _.O)("googleapis.setVersions", function (a) {
            (0, _.yn)(a)
        });
        (0, _.O)("googleapis.addExecuteListener", function (a) {
            Kn(a)
        });
        (0, _.O)("googleapis.removeExecuteListener", function (a) {
            Mn(a)
        });
        (0, _.O)("googleapis.addResponseListener", function (a) {
            Ln(a)
        });
        (0, _.O)("googleapis.removeResponseListener", function (a) {
            Nn(a)
        });
        (0, _.O)("googleapis.addTransportInitListener", function (a) {
            _.qn.cA(a)
        });
        (0, _.O)("googleapis.removeTransportInitListener", function (a) {
            _.qn.wF(a)
        });

    } catch (e) {
        _._DumpException(e)
    }
})(_);

// Copyright 2002-2013 Google Inc.