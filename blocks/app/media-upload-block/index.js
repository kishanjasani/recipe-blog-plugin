import block_icons from '../icons/index';
import './editor.scss';

const { registerBlockType }         =   wp.blocks;
const { Button, Dashicon }          =   wp.components;
const { __ }                        =   wp.i18n;
const { MediaUpload, MediaUploadCheck } = wp.editor;

registerBlockType( 'udemy/media-upload', {
    title:                              __( 'Image Media Upload', 'recipe' ),
    description:                        __( 'Image Media Upload', 'recipe' ),
    category:                           'common',
    icon:                               block_icons.wapuu,
    attributes: {

    },
    edit: ( props ) => {

    },
    save: ( props ) => {
        return (
            <div>

            </div>
        )
    }
});
