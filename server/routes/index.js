"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var express = require('express');
var router = express.Router();
router.get('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var USER_AGENT, config, _a, headers, data, s_token, setCookie, _i, _b, h, guid, lsid, lstoken, cookies, body, res, token, okl_token, url;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                USER_AGENT = 'jdapp;android;10.0.5;11;0393465333165363-5333430323261366;network/wifi;model/M2102K1C;osVer/30;appBuild/88681;partner/lc001;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 11; M2102K1C Build/RKQ1.201112.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045534 Mobile Safari/537.36';
                config = {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json, text/plain, */*',
                        'Referer': 'https://plogin.m.jd.com/login/login?appid=300&returnurl=https://wq.jd.com/passport/LoginRedirect?state=${Date.now()}&returnurl=https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action&source=wq_passport',
                        'User-Agent': USER_AGENT,
                        'Host': 'plogin.m.jd.com'
                    }
                };
                return [4 /*yield*/, axios_1["default"].get("https://plogin.m.jd.com/cgi-bin/mm/new_login_entrance?lang=chs&appid=300&returnurl=https://wq.jd.com/passport/LoginRedirect?state=" + Date.now() + "&returnurl=https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action&source=wq_passport", config)];
            case 1:
                _a = _c.sent(), headers = _a.headers, data = _a.data;
                s_token = data['s_token'];
                setCookie = '';
                for (_i = 0, _b = headers['set-cookie']; _i < _b.length; _i++) {
                    h = _b[_i];
                    setCookie += h + ';';
                }
                guid = setCookie.match(/guid=([^;]*)/)[1];
                lsid = setCookie.match(/lsid=([^;]*)/)[1];
                lstoken = setCookie.match(/lstoken=([^;]*)/)[1];
                cookies = "guid=" + guid + ";lang=chs;lsid=" + lsid + ";lstoken=" + lstoken + ";";
                body = {
                    'lang': 'chs',
                    'appid': '300',
                    'returnurl': "https://wqlogin2.jd.com/passport/LoginRedirect?state=" + Date.now() + "&returnurl=//home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action",
                    'source': 'wq_passport'
                };
                config.headers.cookie = cookies;
                return [4 /*yield*/, axios_1["default"].post("https://plogin.m.jd.com/cgi-bin/m/tmauthreflogurl?s_token=" + s_token + "&v=" + Date.now() + "&remember=true", encodeURIComponent(JSON.stringify(body)), config)];
            case 2:
                res = _c.sent();
                console.log(res.data);
                token = res.data.token;
                okl_token = res.headers['set-cookie'][0].match(/okl_token=([^;]*)/)[1];
                url = "https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=" + token;
                console.log(url);
                response.send(url);
                return [2 /*return*/];
        }
    });
}); });
router.get('/test', (function (req, res) {
    res.send('test ok');
}));
module.exports = router;
