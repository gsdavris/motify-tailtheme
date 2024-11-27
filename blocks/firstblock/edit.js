import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function edit () {
    const props = useBlockProps({
        className: 'text-5xl font-bold',
    });
    return <p { ...props }>{ __('Edit w scripts') }</p>;
}
