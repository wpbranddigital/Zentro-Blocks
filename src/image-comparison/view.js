( function () {
	function initComparison( container ) {
		const orientation = container.classList.contains(
			'gk-image-comparison--vertical'
		)
			? 'vertical'
			: 'horizontal';

		function getCoordinate( e ) {
			const touch = e.touches ? e.touches[ 0 ] : e;
			return orientation === 'vertical' ? touch.clientY : touch.clientX;
		}

		function updateOffset( coord ) {
			const rect = container.getBoundingClientRect();
			let percentage;
			if ( orientation === 'vertical' ) {
				percentage = ( ( coord - rect.top ) / rect.height ) * 100;
			} else {
				percentage = ( ( coord - rect.left ) / rect.width ) * 100;
			}
			percentage = Math.max( 0, Math.min( 100, percentage ) );
			container.style.setProperty(
				'--gk-slider-offset',
				percentage + '%'
			);
		}

		function drag( e ) {
			// Handle moves fluidly
			drag.active = true;
			updateOffset( getCoordinate( e ) );
		}

		function endDrag() {
			window.removeEventListener( 'mousemove', drag );
			window.removeEventListener( 'touchmove', drag );
			window.removeEventListener( 'mouseup', endDrag );
			window.removeEventListener( 'touchend', endDrag );
		}

		function startDrag( e ) {
			// Bypass if not main click
			if ( e.button && e.button !== 0 ) {
				return;
			}

			// Prevent standard browser image dragging ghosting
			e.preventDefault();

			updateOffset( getCoordinate( e ) );

			window.addEventListener( 'mousemove', drag );
			window.addEventListener( 'touchmove', drag, { passive: true } );
			window.addEventListener( 'mouseup', endDrag );
			window.addEventListener( 'touchend', endDrag );
		}

		container.addEventListener( 'mousedown', startDrag );
		container.addEventListener( 'touchstart', startDrag, {
			passive: false,
		} );
	}

	// Initialize all on page load
	document
		.querySelectorAll( '.gk-image-comparison' )
		.forEach( initComparison );
} )();
