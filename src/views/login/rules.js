export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error('パスワードは必ず6位以上'))
    } else {
      callback()
    }
  }
}
