import { useLocation } from "react-router-dom";

export default function ConfirmedBooking() {
    const { state } = useLocation();
    const status = state?.status || "success";
    const date = state?.date;
    const time = state?.time;

    const isWarn = status === "warn";

    return (
        <div
            className={`confirmation ${isWarn ? "warn" : "success"}`}
            aria-live="polite"
            role="status"
        >
            <h3 className="confirmation-title">
                {isWarn ? "Action required" : "Booking Confirmed"}
            </h3>

            <p className="confirmation-text">
                {isWarn
                    ? state?.message || "You need to fill in the form first."
                    : date && time
                        ? <>You are booked for <strong>{date}</strong> <strong>{time}</strong>.</>
                        : "Your booking is confirmed."}
            </p>
        </div>
    );
}
