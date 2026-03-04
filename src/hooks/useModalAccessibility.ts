import { useEffect } from 'react';

/**
 * Hook to handle modal accessibility:
 * 1. Closes modal on 'Escape' key press.
 * 2. Closes modal on browser/mobile 'Back' button press.
 * 
 * @param isOpen - Whether the modal is currently open
 * @param onClose - Function to call to close the modal
 */
export function useModalAccessibility(isOpen: boolean, onClose: () => void) {
    useEffect(() => {
        if (!isOpen) return;

        // Handle Escape key
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        // Handle Back button
        const handlePopState = () => {
            onClose();
        };

        // Push a dummy state to history so "Back" button has something to pop
        // and doesn't navigate away from the page
        window.history.pushState({ modalOpen: true }, '');

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('popstate', handlePopState);

            // If the modal is closed by other means (e.g., clicking a close button),
            // we should remove the dummy state from history if it's still there
            if (window.history.state?.modalOpen) {
                window.history.back();
            }
        };
    }, [isOpen, onClose]);
}
