import { ModalPosition, ReactGrandTourStep } from '../types';

const alignHorizontally = (
    currentPosition: ModalPosition,
    topMargin: number,
    bottomMargin: number,
): ModalPosition => {
    if (topMargin > bottomMargin) {
        if (bottomMargin < 0) {
            // this happens when the highlighted element is near the bottom of the page
            // need to make sure the modal goes above it instead of displaying within
            // the element's boundaries
            return {
                ...currentPosition,
                top: topMargin + bottomMargin - currentPosition.height / 2,
            };
        }
        // align bottom of modal to the bottom of the element
        // doing this because the top margin is larger than bottom margin so giving modal room to get larger
        return { ...currentPosition, top: topMargin, bottom: currentPosition.bottom + 10 };
    }

    // align top of modal to the top of the element
    return { ...currentPosition, top: topMargin };
};

const alignVeritcally = (
    currentPosition: ModalPosition,
    leftMargin: number,
    rightMargin: number,
    left: number,
    right: number,
    width: number,
    docWidth: number,
) => {
    if (leftMargin > rightMargin) {
        // if left margin is bigger than right align with left, unless the space is to narrow then go right
        if (left + width < currentPosition.width + 10) {
            return { ...currentPosition, left: 10 };
        }
        return { ...currentPosition, right: docWidth - right - 10 };
    }
    if (docWidth - left < currentPosition.width + 10) {
        return { ...currentPosition, right: 10 };
    }
    return { ...currentPosition, left: left - 10 };
};

const getModalPosition = (
    { top, left, right, width, height, bottom }: DOMRect,
    modalHeight: number,
    preferredPosition: ReactGrandTourStep['preferredModalPosition'],
): ModalPosition => {
    let result: ModalPosition = {};
    const { clientWidth: docWidth, clientHeight: docHeight } = document.documentElement;

    // calc size of margins surrounding the element (space between element and edge of viewport)
    const leftMargin = left - 10;
    const rightMargin = docWidth - (width + left + 10);
    const topMargin = top - 10;
    const bottomMargin = docHeight - bottom;

    result.width = docWidth < 350 ? docWidth - 20 : 330;
    result.height = modalHeight;

    let positionDecided = false;

    // place Modal to right side if there is enough space
    if (
        !positionDecided &&
        rightMargin >= result.width + 20 &&
        (preferredPosition === 'auto' || preferredPosition === 'right')
    ) {
        // Set modals left border to align alongside element right border with 10px gap
        result.left = left + width + 20;
        result = alignHorizontally(result, topMargin, bottomMargin);
        positionDecided = true;
    }
    // place modal on left side if there is more space on the left than the right and enough space to fit the modal
    if (
        // leftMargin > rightMargin &&
        !positionDecided &&
        leftMargin >= result.width + 20 &&
        (preferredPosition === 'auto' || preferredPosition === 'left')
    ) {
        // set modals right border to align alongside element left border with 10px gap
        result.right = docWidth - left + 20;
        result = alignHorizontally(result, topMargin, bottomMargin);
        positionDecided = true;
    }
    // place modal above element if top margin is larger than bottom margin and there is enough room
    if (
        // topMargin > bottomMargin &&
        !positionDecided &&
        topMargin > modalHeight &&
        (preferredPosition === 'auto' || preferredPosition === 'top')
    ) {
        // align bottom of modal with top of element being tracked
        result.bottom = top - 20;
        result = alignVeritcally(result, leftMargin, rightMargin, left, right, width, docWidth);
        positionDecided = true;
    }
    // place modal under element if there is enough room
    if (
        !positionDecided &&
        bottomMargin > modalHeight &&
        (preferredPosition === 'auto' || preferredPosition === 'bottom')
    ) {
        // align top of modal with bottom of element being tracked
        result.top = top + height + 20;
        result = alignVeritcally(result, leftMargin, rightMargin, left, right, width, docWidth);
        positionDecided = true;
    }

    // if modal doesnt fit anywhere put modal in the middle of the tracked element
    if (!positionDecided) {
        result.top = top + height / 3;
        result.left = left + 10 + width / 2 - result.width / 2;
    }

    // make sticky on the page so it doesn't scroll out of view
    if (result.top < 10) result.top = 10;
    if (result.bottom > window.innerHeight) result.bottom = window.innerHeight - 30;
    if (result.left < 10) result.left = 10;
    if (result.right > window.innerWidth) result.right = window.innerWidth - 30;
    return result;
};

export default getModalPosition;
