const isSafari =
    typeof navigator !== 'undefined'
        ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        : false;

export default isSafari;
