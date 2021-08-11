const smartgrid = require('smart-grid');
const settings = {
	outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '20px', /* gutter width px || % || rem */
    mobileFirst: false,
    container: {
        maxWidth: '1440px', /* max-width оn very large screen */
        fields: '120px', /* side fields боковые поля */
    },
    breakPoints: {
        
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
            fields: '60px',
        },
        md: {
            width: '960px',
            fields: '30px',
        },
        sm: {
            width: '780px',
            fields: '15px', /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '560px',
        },
        phone: {
            width: '320px', /* -> @media (max-width: 420px) */
        },
    }
};

smartgrid('./src/scss/mixins/', settings);