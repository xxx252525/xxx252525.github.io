export function removeEmptyString(value) {
    return !value ? '' : value.trim().replaceAll(' ', '-');
}
