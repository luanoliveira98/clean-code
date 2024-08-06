// Wrong
function button() {
    const isButtonDisabled = true;

    return (
        <button disabled={isButtonDisabled}>
            <span></span>
            {isButtonDisabled ? 'Loading' : 'Send'}
        </button>
    )
}

// Right
function button() {
    const isFormSubmitting = true;

    return (
        <button disabled={isFormSubmitting}>
            <span></span>
            {isFormSubmitting ? 'Loading' : 'Send'}
        </button>
    )
}