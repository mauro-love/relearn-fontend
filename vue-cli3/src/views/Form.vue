<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"/>
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"/>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import Strategy from '../assets/utils'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (values) {
      const strate = new Strategy()
      strate.add(this.username, 'isNonEmpty')
      // this.test(this.username)
      console.log('submit', values)
    },
    test (val) {
      const reg = new RegExp('^[0-9a-zA-Z_]{1,}$')
      reg.test(val)
      console.log(reg.test(val))
    }
  }
}
</script>
