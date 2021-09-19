import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
    codeStyle: {
        padding: '2px 3px 1px',
        border: '1px solid rgba(29,28,29,0.13)',
        color: '#e01e5a',
        borderRadius: '3px',
        backgroundColor: 'rgba(29,28,29,.04)',
    },
    multilineStyle: {
        border: '1px solid rgba(29,28,29, 0.13)',
        borderRadius: '4px',
        backgroundColor: 'rgba(29,28,29,.04)',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        wordBreak: 'normal',
        width: '100%',
        padding: '8px',
    },
}));
const CodeBlock: React.FC<{ multiLine?: boolean }> = ({ multiLine = false, children }) => {
    const { codeStyle, multilineStyle } = useStyle();
    if (multiLine) {
        return <pre className={multilineStyle}>{children}</pre>;
    }
    return <code className={codeStyle}>{children}</code>;
};

export default CodeBlock;
