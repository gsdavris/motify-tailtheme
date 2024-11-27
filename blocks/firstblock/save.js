import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import './style.scss';

export default function save () {
    const props = useBlockProps.save({
        className: 'text-5xl font-bold',
    });
    return <p { ...props }>{ __('Save w scripts') }</p>;
}
