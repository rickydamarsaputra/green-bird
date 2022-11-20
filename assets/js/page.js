/*!
 * Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
window.addEventListener('DOMContentLoaded', (e) => {
	var t = function () {
		const e = document.body.querySelector('#mainNav');
		e && (0 === window.scrollY ? e.classList.remove('navbar-shrink') : e.classList.add('navbar-shrink'));
	};
	t(), document.addEventListener('scroll', t);
	const n = document.body.querySelector('.navbar-toggler');
	[].slice.call(document.querySelectorAll('#navbarResponsive .nav-link')).map(function (e) {
		e.addEventListener('click', () => {
			'none' !== window.getComputedStyle(n).display && n.click();
		});
	}),
		document.querySelectorAll('a[href^="#"]').forEach((e) => {
			e.addEventListener('click', function (e) {
				e.preventDefault(), document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
			});
		}),
		AOS.init({ duration: 1e3, easing: 'ease-in-out', once: !0, mirror: !1 }),
		document.addEventListener('scroll', function () {
			var e = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			document.documentElement.scrollTop / e > 0.2 ? ((o.style.visibility = 'visible'), (o.style.opacity = '1')) : ((o.style.visibility = 'hidden'), (o.style.opacity = '0'));
		});
	var o = document.querySelector('.back-to-top');
	const i = document.getElementById('bg-audio');
	i.volume = 0.5;
	const c = document.getElementById('audio-btn');
	c.addEventListener('click', function () {
		i.paused ? (i.play(), (c.innerHTML = '<i class="fa-solid fa-volume-high"></i>')) : (i.pause(), (c.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'));
	});
});
