import axios from 'axios'

const express = require('express');
const router = express.Router();

router.get('/', async (request: any, response: any) => {
  const USER_AGENT = 'jdapp;android;10.0.5;11;0393465333165363-5333430323261366;network/wifi;model/M2102K1C;osVer/30;appBuild/88681;partner/lc001;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 11; M2102K1C Build/RKQ1.201112.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045534 Mobile Safari/537.36'
  let config: any = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json, text/plain, */*',
      'Referer': 'https://plogin.m.jd.com/login/login?appid=300&returnurl=https://wq.jd.com/passport/LoginRedirect?state=${Date.now()}&returnurl=https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action&source=wq_passport',
      'User-Agent': USER_AGENT,
      'Host': 'plogin.m.jd.com'
    }
  }
  let {headers, data} = await axios.get(`https://plogin.m.jd.com/cgi-bin/mm/new_login_entrance?lang=chs&appid=300&returnurl=https://wq.jd.com/passport/LoginRedirect?state=${Date.now()}&returnurl=https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action&source=wq_passport`, config)
  let s_token: string = data['s_token']
  let setCookie: string = ''
  for (let h of headers['set-cookie'])
    setCookie += h + ';'

  let guid: string = setCookie.match(/guid=([^;]*)/)![1]
  let lsid: string = setCookie.match(/lsid=([^;]*)/)![1]

  let lstoken: string = setCookie.match(/lstoken=([^;]*)/)![1]

  let cookies: string = `guid=${guid};lang=chs;lsid=${lsid};lstoken=${lstoken};`
  let body = {
    'lang': 'chs',
    'appid': '300',
    'returnurl': `https://wqlogin2.jd.com/passport/LoginRedirect?state=${Date.now()}&returnurl=//home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action`,
    'source': 'wq_passport',
  }
  config.headers.cookie = cookies
  let res: any = await axios.post(`https://plogin.m.jd.com/cgi-bin/m/tmauthreflogurl?s_token=${s_token}&v=${Date.now()}&remember=true`, encodeURIComponent(JSON.stringify(body)), config)
  console.log(res.data)
  let token: string = res.data.token;
  let okl_token: string = res.headers['set-cookie'][0].match(/okl_token=([^;]*)/)![1]
  let url: string = `https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${token}`
  console.log(url)
  response.send(url)
});

router.get('/test', ((req: any, res: any) => {
  res.send('test ok')
}))

module.exports = router;
