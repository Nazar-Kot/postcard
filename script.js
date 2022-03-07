document.addEventListener("mousemove", function(e)
	{
		let body = document.querySelector('body');
		let heart = document.createElement("span");
		let x = e.offsetX;
		let y = e.offsetY;
		heart.style.left = x+'px';
		heart.style.top = y+'px';
		let size = Math.random() * 50;
		heart.style.width = 1+size+'px';
		heart.style.height = 1+size+'px';
		body.appendChild(heart);

		setTimeout(function() {
			heart.remove();
		}, 2000)
	}
)


var names = ['зірочка', 'русалочка', 'Сакура', 'Сонік', 'ялиночка', 'фея', 'пантера', 'лисичка', 'снігурочка', 'кудряшка', 'жарптиця'];
let text = 'З 8 березня';

document.getElementById('button').addEventListener("click", function(e)
	{
		let random = Math.floor(Math.random() * names.length);

		document.getElementById('text').innerHTML = `${text} ${names[random]}!`
	}
)