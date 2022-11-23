data_pura = {
	keterangan: [
		'Pintu Masuk',
		'Green Bird Villa',
		'Family Room',
		'Deluxe Room',
		'Halaman Deluxe Room',
		'Jembatan',
		'Kolam Berenang',
		'Family Room',
		'Rumah Pohon',
		'Rumah Pohon',
		'Rumah Pohon',
		'Rumah Pohon',
		'Breeding Murai Batu',
		'Pool Bike',
		'Kolam Berenang',
		'Massage & Spa',
		'Bed Deluxe Room',
		'Burung Love Bird',
		'Mini Bar',
		'Burung Murai Batu',
		'Bed Family Room',
		'Bale Bengong',
		'Supperior Room',
	],
};
var list = document.getElementById('gal');
list.innerHTML = '';
for (var i = 1; i <= 23; i++) {
	list.innerHTML += `\n<div class="col-lg-3 col-sm-6 mb-4">\n<div class="container-img rounded">\n<img class="img-fluid image rounded shadow" src="assets/images/gallery/${i}.jpg" alt="${data_pura.keterangan[i - 1]}" />\n<div class="middle">\n<div class="text">${
		data_pura.keterangan[i - 1]
	}</div>\n</div>\n</div>\n</div>\n`;
}

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
