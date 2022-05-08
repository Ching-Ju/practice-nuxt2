export default function () {
  const userAgent = navigator.userAgent.toLowerCase()
  const userDevice = userAgent.includes('iphone') ? 'iphone' : userAgent.includes('android') ? 'android' : 'desktop'

  function openApp () {
    if (userDevice === 'iphone') {
      iosOpenApp()
    } else if (userDevice === 'android') {
      androidOpenApp()
    }
  }

  function iosOpenApp () {
  }

  function androidOpenApp () {
  }

  return {
    userDevice,
    openApp
  }
}
