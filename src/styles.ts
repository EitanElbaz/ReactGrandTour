const getProps = (obj: Record<string, any>, selector: string) =>
    Object.entries(obj).reduce(
        (acc, [key, val]) =>
            typeof val === 'object'
                ? `${acc}}${selector}${key}{${getProps(val, `${selector}${key}`)}`
                : `${acc}${key}:${val};`,
        '',
    );

export const styleObjectToCssStyleString = (obj: Record<string, any>) =>
    Object.entries(obj).reduce((acc, [key, val]) => {
        const props = getProps(val, key);
        return `${acc}${key}{${props}${props[props.length - 1] != '}' ? '}' : ''}`;
    }, '');

// https://coolors.co/5fad56-f2c14e-f78154-4d9078-b4436c
const styles = (speed = 0.5, primaryColor = '#f2c14e') =>
    styleObjectToCssStyleString({
        '.__react-grand-tour__': {
            'z-index': 999995,
            position: 'fixed',
            left: 0,
            top: 0,
            overlay: {
                position: 'fixed',
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                'z-index': 999996,
            },
            highlight: {
                left: 0,
                right: 0,
                position: 'fixed',
                'border-radius': '8px',
                'box-shadow': '0 0 0 calc(200vh + 200vw) rgba(0, 0, 0, .8)',
                transition: `transform ${speed}s ease, height ${speed}s ease, width ${speed}s ease`,
                'z-index': 999997,
            },
            dot: {
                cursor: 'pointer',
                display: 'contents',
                'background-color': 'inherit',
                border: 'none',
                ' div': {
                    width: '10px',
                    height: '10px',
                    'background-color': 'inherit',
                    border: '1px solid #757575',
                    'border-radius': '50%',
                    'margin-right': '7px',
                    overflow: 'hidden',
                },
                ':hover div': {
                    'background-color': '#757575',
                },
                '-selected': {
                    ' div': {
                        cursor: 'default',
                        'background-color': primaryColor,
                        border: `1px solid ${primaryColor}`,
                    },
                    ':hover div': {
                        'background-color': primaryColor,
                    },
                },
            },
            'chevron-button': {
                'background-color': 'inherit',
                border: 'none',
                color: '#757575',
                cursor: 'pointer',
                ':disabled': {
                    color: '#e0e0e0',
                    cursor: 'default',
                },
                ':enabled:hover': {
                    color: '#212121',
                },
            },
            'page-selector': {
                display: 'flex',
                'justify-content': 'space-between',
            },
            'dot-wrapper': {
                display: 'flex',
                'max-width': '200px',
                'flex-wrap': 'wrap',
                'align-items': 'center',
            },
            'close-button': {
                'background-color': 'transparent',
                border: 'none',
                color: '#757575',
                cursor: 'pointer',
                position: 'absolute',
                top: '12px',
                right: '15px',
                ':hover': {
                    color: '#212121',
                },
            },
            'page-number': {
                'background-color': primaryColor,
                color: 'white',
                'box-shadow': 'rgb(0 0 0 / 30%) 0px 0.5em 3em',
                width: '40px',
                height: '40px',
                'border-radius': '50%',
                display: 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                position: 'absolute',
                left: '-10px',
                top: '-10px',
            },
            modal: {
                'background-color': '#fff',
                'border-radius': '8px',
                'box-shadow': 'rgb(0 0 0 / 30%) 0px 0.5em 3em',
                '-position': {
                    transition: `transform ${speed}s ease, height ${speed}s ease, width ${speed}s ease`,
                    left: 0,
                    top: 0,
                    position: 'fixed',
                    'max-width': '330px',
                    'min-height': '48px',
                    'z-index': 999999,
                },
                '-content': {
                    overflow: 'hidden',
                    height: '100%',
                },
            },
            icon: {
                fill: 'currentColor',
                width: '1em',
                height: '1em',
                display: 'inline-block',
                'font-size': '1.5rem',
                transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                'flex-shrink': 0,
                'user-select': 'none',
            },
            arrow: {
                position: 'absolute',
                right: '-10px',
                top: '-10px',
                width: '40px',
                height: '40px',
                'border-radius': '50%',
                'background-color': primaryColor,
                display: 'flex',
                'justify-content': 'center',
                'align-items': 'center',
                color: 'white',
                cursor: 'pointer',
            },
            'fade-in': {
                transition: `opacity ${speed}s ease`,
                opacity: 0,
                'z-index': 999997,
                '-init': {
                    opacity: 1,
                },
            },
        },
    });

export default styles;
