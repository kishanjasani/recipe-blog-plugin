import block_icons from '../icons/index';

const { registerBlockType } = wp.blocks;
const { RichText }          = wp.editor;
const { __ }                = wp.i18n;

registerBlockType( 'udemy/rich-text', {
    title:       __( 'Rich text Example', 'recipe' ),
    description: __( 'Rich Text Example.', 'recipe' ),
    category:    'common',
	icon:        block_icons.wapuu,
	attributes:  {
		message: {
			type:     'array',
			source:   'children',
			selector: '.message-ctr'
		}
	},
	edit: ( props ) => {
		return (
			<div className={props.className}>
				<h3>Rich text example block</h3>
				<RichText tagName="div"
						  multiline="p"
						  placeholder={ __( 'Add your content here.', 'recipe' ) }
						  onChange={ ( new_value ) => {
							props.setAttributes({ message: new_value });
						  }}
						  value={ props.attributes.message } />
			</div>
		);
	},
	save: ( props ) => {
		return (
			<div>
				<h3>Rich text example block</h3>
				<div className="message-ctr">
					{ props.attributes.message }
				</div>
			</div>
		);
	}
});
