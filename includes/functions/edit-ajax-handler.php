<?php

/**
 * Edit AJAX handler.
 *
 * @date    28/07/2020
 * @since   1.0.0
 */
function spxEditButtonAjaxHandlerGetString( $value, $type ): string {
	return trim( wp_kses( htmlspecialchars( str_replace( $_POST['nonce'] . $type, '', $value ), ENT_QUOTES, 'UTF-8' ), FALSE ) );
}

function spxEditButtonAjaxHandler() {
	if ( wp_verify_nonce( $_POST['nonce'], 'ajax-nonce' ) ) {
		$post_id = $_POST['post_id'];

		foreach ( $_POST as $key => $value ) {

			if ( strpos( $value, $_POST['nonce'] . 'acf' ) !== FALSE ) {
				update_field( $key, spxEditButtonAjaxHandlerGetString( $value, 'acf' ), $post_id );
			}

			if ( strpos( $value, $_POST['nonce'] . 'option' ) !== FALSE ) {
				update_option( $key, spxEditButtonAjaxHandlerGetString( $value, 'option' ) );
			}

			if ( strpos( $value, $_POST['nonce'] . 'parentacf' ) !== FALSE ) {

				$string = str_replace( ',_', ",", $key );
				$array  = explode( ',', $string );

				update_sub_field( $array, spxEditButtonAjaxHandlerGetString( $value, 'parentacf' ), $post_id );
			}
		}
		do_action( 'spxEditButtonAjax' );

	}
	die ();
}

add_action( 'plugins_loaded', function () {
	add_action( 'wp_ajax_spxEditButtonAjaxHandler', 'spxEditButtonAjaxHandler' );
} );
