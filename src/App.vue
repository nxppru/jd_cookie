<template>
  <div id="app">
    <Row>
      <Col span="8">
        <Menu :open-names="['1']" accordion>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"/>
              Cookie管理
            </template>
            <MenuItem name="1-1">扫码</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people"/>
              用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
          </Submenu>
        </Menu>
      </Col>
    </Row>
    <Button type="primary" @click="getQRCode">获取二维码</Button>
    <Button type="primary" @click="test">test</Button>
    <br>
    <vue-qr :text="qrcodeSrc" :size="250"></vue-qr>

  </div>
</template>

<script>
import VueQr from 'vue-qr'

export default {
  data() {
    return {
      qrcodeSrc: ''
    }
  },
  methods: {
    async getQRCode() {
      // let {data} = await this.axios.get('/api')
      // console.log(data)
      // this.qrcodeSrc = data
      this.qrcodeSrc = 'https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=m_tokenAAEAIDtQqOIGPsSdUGWm_dSpc4MyrvhqHGrwkSqx9SS7X6Gs'
      await this.wait(3000)
      this.$Message.success('Cookie获取成功！去QL查看');
    },
    async test() {
      let {data} = await this.axios.get('/api/test')
      console.log(data)
    },
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
  },
  created() {
  },
  components: {VueQr}
}
</script>

<style>
.ivu-row {
  float: left;
  width: 240px;
}
</style>