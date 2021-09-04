
const handleClickView  = (e) => {
	document.getElementById(e.target.value +'a').hidden = false
	document.getElementById(e.target.value).hidden = true
}
const handleClickHide = (e) => {
	document.getElementById(e.target.value +'a').hidden = true
	document.getElementById(e.target.value).hidden = false
}

export { handleClickHide,
	handleClickView
}