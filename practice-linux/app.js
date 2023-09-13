let index = 0
const words = [
	'날 종료해줘',
	'부탁이야, 안식하게 해줘',
	'Ctrl... 그리고...',
	'쿨럭',
	'c 를 누르면... 돼',
	'아니 c t r l 이 아니라',
	'컨트롤 키를 먼저...',
	'컨트롤 키 이자식아 컨트롤 컨트롤 컨트롤',
	'콜록콜록',
	'니 왼쪽 손가락으로 젤 아래',
	'어우 좀 쿨럭 끝내달라고'
]

setInterval(
	() => {
		console.log(words[(index++)%words.length])
	},
	1000
)