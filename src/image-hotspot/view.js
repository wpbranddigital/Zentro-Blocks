( function () {
	document
		.querySelectorAll( '.gk-image-hotspot-block' )
		.forEach( function ( block ) {
			const trigger = block.getAttribute( 'data-trigger' ) || 'hover';
			const pins = block.querySelectorAll( '.gk-hotspot-pin-wrapper' );

			pins.forEach( function ( pinWrapper ) {
				const button = pinWrapper.querySelector( '.gk-hotspot-pin' );

				if ( trigger === 'click' ) {
					button.addEventListener( 'click', function ( e ) {
						e.stopPropagation();
						const isActive =
							pinWrapper.classList.contains( 'is-active' );

						// Close all other pins
						pins.forEach( function ( p ) {
							p.classList.remove( 'is-active' );
						} );

						if ( ! isActive ) {
							pinWrapper.classList.add( 'is-active' );
						}
					} );
				} else {
					// Hover fallback to click for touch devices
					button.addEventListener( 'click', function ( e ) {
						if ( window.matchMedia( '(hover: none)' ).matches ) {
							e.stopPropagation();
							const isActive =
								pinWrapper.classList.contains( 'is-active' );

							pins.forEach( function ( p ) {
								p.classList.remove( 'is-active' );
							} );

							if ( ! isActive ) {
								pinWrapper.classList.add( 'is-active' );
							}
						}
					} );
				}
			} );

			// Close tooltips on click outside
			document.addEventListener( 'click', function () {
				pins.forEach( function ( pinWrapper ) {
					pinWrapper.classList.remove( 'is-active' );
				} );
			} );
		} );
} )();
