export function ValidateUrl(control) {
    if (!control.value.startsWith('https') || !control.value.includes('.io')) {
        return { validUrl: true };
    }
    return null;
}
//# sourceMappingURL=validators.js.map