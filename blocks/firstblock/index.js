import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';

registerBlockType( 'tailtheme/firstblock', {
	edit: Edit,
	save: Save,
} );
