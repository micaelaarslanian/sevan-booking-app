import { useLocation } from "react-router-dom";

export default function ConfirmedBooking() {
    const { state } = useLocation();
    const date = state?.date;
    const time = state?.time;

    return (
        <div className="confirmation success" aria-live="polite" role="status">
            <h3 className="confirmation-title">Booking Confirmed</h3>
            <p className="confirmation-text">
                {date && time ? (
                    <>You are booked for <strong>{date}</strong> <strong>{time}</strong>.</>
                ) : (
                    "Your booking is confirmed."
                )}
            </p>
        </div>
    );
}
