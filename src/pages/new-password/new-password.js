const cancelAddNewPassword = (event) => {
  event.preventDefault()
  const linkRedirect = document.getElementById('redirectLinkHome')
  linkRedirect.click()
}