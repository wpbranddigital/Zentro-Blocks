( function () {
	function initCarousel( wrapper ) {
		const track = wrapper.querySelector(
			'.gk-testimonials-carousel__track'
		);
		const slides = wrapper.querySelectorAll(
			'.gk-testimonials-carousel__card'
		);
		const prevBtn = wrapper.querySelector(
			'.gk-testimonials-carousel__prev'
		);
		const nextBtn = wrapper.querySelector(
			'.gk-testimonials-carousel__next'
		);
		const dots = wrapper.querySelectorAll( '.gk-testimonials-carousel__dot' );

		if ( ! track || slides.length === 0 ) {
			return;
		}

		let currentSlide = 0;
		let autoplayTimer = null;
		const isAutoplay = wrapper.getAttribute( 'data-autoplay' ) === 'true';
		const speed =
			parseInt( wrapper.getAttribute( 'data-autoplay-speed' ), 10 ) ||
			4000;

		function goToSlide( index ) {
			if ( index < 0 ) {
				index = slides.length - 1;
			} else if ( index >= slides.length ) {
				index = 0;
			}

			track.style.transform = 'translateX(-' + index * 100 + '%)';

			dots.forEach( ( dot, idx ) => {
				dot.classList.toggle( 'is-active', idx === index );
			} );

			currentSlide = index;
		}

		function nextSlide() {
			goToSlide(currentSlide + 1);
		}

		function prevSlide() {
			goToSlide(currentSlide - 1);
		}

		if ( prevBtn ) {
			prevBtn.addEventListener('click', function () {
				prevSlide();
				resetAutoplay();
			} );
		}
		if ( nextBtn ) {
			nextBtn.addEventListener('click', function () {
				nextSlide();
				resetAutoplay();
			} );
		}

		dots.forEach( ( dot ) => {
			dot.addEventListener( 'click', function () {
				const slideIdx = parseInt( dot.getAttribute( 'data-slide' ), 10 );
				goToSlide( slideIdx );
				resetAutoplay();
			} );
		} );

		// Autoplay functions
		function startAutoplay() {
			if ( isAutoplay && ! autoplayTimer ) {
				autoplayTimer = setInterval( nextSlide, speed );
			}
		}

		function stopAutoplay() {
			if ( autoplayTimer ) {
				clearInterval( autoplayTimer );
				autoplayTimer = null;
			}
		}

		function resetAutoplay() {
			stopAutoplay();
			startAutoplay();
		}

		// Pause on hover
		wrapper.addEventListener( 'mouseenter', stopAutoplay );
		wrapper.addEventListener( 'mouseleave', startAutoplay );

		// Swipe detection for mobile devices
		let touchStartX = 0;
		let touchEndX = 0;

		wrapper.addEventListener(
			'touchstart',
			function ( e ) {
				touchStartX = e.changedTouches[ 0 ].screenX;
			},
			{ passive: true }
		);

		wrapper.addEventListener(
			'touchend',
			function ( e ) {
				touchEndX = e.changedTouches[ 0 ].screenX;
				handleSwipe();
			},
			{ passive: true }
		);

		function handleSwipe() {
			const threshold = 50;
			if ( touchStartX - touchEndX > threshold ) {
				nextSlide();
				resetAutoplay();
			} else if ( touchEndX - touchStartX > threshold ) {
				prevSlide();
				resetAutoplay();
			}
		}

		// Run
		startAutoplay();
	}

	document
		.querySelectorAll( '.gk-testimonials-carousel-wrapper' )
		.forEach( initCarousel );
} )();
