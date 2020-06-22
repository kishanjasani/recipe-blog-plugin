import classnames from 'classnames';
import block_icons from '../icons/index';
import btn_icon from './icon';
import './editor.scss';

const { registerBlockType }         =   wp.blocks;
const { __ }                        =   wp.i18n;
const { BlockControls }             =   wp.editor;

registerBlockType( 'udemy/night-mode', {
    title:                              __( 'Night Mode', 'recipe' ),
    description:                        __( 'Content with night mode.', 'recipe'),
    category:                           'common',
    icon:                               block_icons.wapuu,
    attributes: {

    },
    edit: ( props ) => {
        return (
            <div className={ props.className }>
                <BlockControls>

                </BlockControls>
                <div className="content-example">
                    This is an example of a block with night mode.
                </div>
            </div>
        );
    },
    save: ( props ) => {
        return (
            <div>
                <div className="content-example">
                    This is an example of a block with night mode.
                </div>
            </div>
        )
    },

});
