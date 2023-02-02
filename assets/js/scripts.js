var list = document.getElementById('gal');

list.innerHTML = '';
for (var i = 1; i <= 48; i++) {
	list.innerHTML += `
	<div class="col-lg-3 col-sm-6 mb-4">
		<div class="container-img rounded">
				<img class="img-fluid image rounded shadow" src="assets/images/gallery/v3/img (${i}).jpg" alt="keterangan gallery ${i}" />
			</div>
	</div>
	`;
}

// for (var i = 1; i <= 23; i++) {
// 	list.innerHTML += `\n<div class="col-lg-3 col-sm-6 mb-4">\n<div class="container-img rounded">\n<img class="img-fluid image rounded shadow" src="assets/images/gallery/${i}.jpg" alt="${data_pura.keterangan[i - 1]}" />\n<div class="middle">\n<div class="text">${
// 		data_pura.keterangan[i - 1]
// 	}</div>\n</div>\n</div>\n</div>\n`;
// }

Promise.all(
	Array.from(document.images)
		.filter((a) => !a.complete)
		.map(
			(a) =>
				new Promise((e) => {
					a.onload = a.onerror = e;
				})
		)
).then(() => {
	new Masonry('#gal').layout();
	new Viewer(document.getElementById('gal'));
});
