function unlikeitall(){
    let height = 0
    const likes = document.querySelectorAll('[data-testid=unlike]')
	if (likes.length != 0){
        for (let l of likes){
            l.click()
		}
		console.log("unliked %i post/s", likes.length)
        height += 700
        window.scrollTo(0, height)
	}
	else {
		clearInterval(unliking)
		console.log("No more likes found. Process stopped.")
	}
}
var unliking = setInterval(unlikeitall, 4500)
