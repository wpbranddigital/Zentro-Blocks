( function () {
	document.querySelectorAll( '.gk-tabs' ).forEach( function ( tabsBlock ) {
		const activeColor = tabsBlock.dataset.activeColor || '#0073aa';
		// Scope to this block only, so nested Tabs blocks work independently.
		const buttons = tabsBlock.querySelectorAll(
			':scope > .gk-tabs__nav > .gk-tabs__nav-btn'
		);
		const panels = tabsBlock.querySelectorAll(
			':scope > .gk-tabs__panels > .gk-tabs__panel'
		);

		function activate( index ) {
			buttons.forEach( function ( btn, i ) {
				const isActive = i === index;
				btn.classList.toggle( 'is-active', isActive );
				btn.setAttribute( 'aria-selected', String( isActive ) );
				btn.setAttribute( 'tabindex', isActive ? '0' : '-1' );
				btn.style.color = isActive ? activeColor : '';
				btn.style.borderBottomColor = isActive ? activeColor : '';
			} );
			panels.forEach( function ( panel, i ) {
				const isActive = i === index;
				panel.classList.toggle( 'is-active', isActive );
				if ( isActive ) {
					panel.removeAttribute( 'hidden' );
				} else {
					panel.setAttribute( 'hidden', '' );
				}
			} );
		}

		buttons.forEach( function ( btn, index ) {
			btn.addEventListener( 'click', function () {
				activate( index );
			} );

			btn.addEventListener( 'keydown', function ( e ) {
				let next = index;
				if ( e.key === 'ArrowRight' ) {
					next = ( index + 1 ) % buttons.length;
				}
				if ( e.key === 'ArrowLeft' ) {
					next = ( index - 1 + buttons.length ) % buttons.length;
				}
				if ( e.key === 'Home' ) {
					next = 0;
				}
				if ( e.key === 'End' ) {
					next = buttons.length - 1;
				}
				if ( next !== index ) {
					e.preventDefault();
					activate( next );
					buttons[ next ].focus();
				}
			} );
		} );
	} );
} )();
