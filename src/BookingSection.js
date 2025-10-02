import { useEffect, useMemo, useReducer, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import BookingForm from "./BookingForm";

/** Helpers */

// Local "YYYY-MM-DD" (safer than toISOString().slice(0,10))
function toLocalISODate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
}

// Build next N days for the Date <select>
function buildDateOptions(days = 5) {
    const today = new Date();
    const list = [];
    for (let i = 0; i < days; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        list.push({
            iso: toLocalISODate(d),
            label: d.toLocaleDateString(undefined, {
                weekday: "short",
                month: "short",
                day: "numeric",
            }),
        });
    }
    return list;
}

// BookingSection.js – API wrappers
export function getAvailableTimes(dateObj) {
    if (typeof window !== "undefined" && typeof window.fetchAPI === "function") {
        return window.fetchAPI(dateObj) || [];
    }
    return [];
}

export function submitBooking(formData) {
    if (typeof window !== "undefined" && typeof window.submitAPI === "function") {
        return window.submitAPI(formData);
    }
    return false;
}

/** Reducer bits (exported for unit tests) */
export function initializeTimes() {
    return getAvailableTimes(new Date());
}

export function updateTimes(state, action) {
    switch (action.type) {
        case "SET_DATE": {
            const dateObj = new Date(`${action.date}T00:00`);
            return getAvailableTimes(dateObj);
        }
        default:
            return state;
    }
}

export default function BookingSection() {
    const navigate = useNavigate();

    // Date options (computed once)
    const dateOptions = useMemo(() => buildDateOptions(5), []);

    // Selected date/time
    const [selectedDate, setSelectedDate] = useState(dateOptions[0].iso);

    // Available times via reducer (API-backed)
    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        undefined,
        initializeTimes
    );

    const [time, setTime] = useState(availableTimes[0] || "");

    // Track booked slots locally to hide already-chosen times
    // Shape: { "YYYY-MM-DD": ["17:00", "17:30"] }
    const [bookings, setBookings] = useState({});

    // For empty-state copy (“Loading…” vs “Fully booked…”)
    const [hasFetchedTimes, setHasFetchedTimes] = useState(false);

    function handleDateChange(newDate) {
        setSelectedDate(newDate);
        dispatch({ type: "SET_DATE", date: newDate });
        setHasFetchedTimes(true);
    }

    // Derived: hide times already booked for the selected date
    const bookedSet = useMemo(
        () => new Set(bookings[selectedDate] || []),
        [bookings, selectedDate]
    );

    const timesForSelectedDate = useMemo(
        () => availableTimes.filter((t) => !bookedSet.has(t)),
        [availableTimes, bookedSet]
    );

    // Keep `time` valid when options change
    useEffect(() => {
        if (!timesForSelectedDate.includes(time)) {
            setTime(timesForSelectedDate[0] || "");
        }
    }, [timesForSelectedDate, time]);

    // On mount, trigger initial fetch (covers race with API script)
    useEffect(() => {
        dispatch({ type: "SET_DATE", date: selectedDate });
        setHasFetchedTimes(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Submit: call API, mark booked to remove from dropdown, then navigate to confirmation
    function handleSubmitBooking({ fullName, email, phone, message }) {
        if (!selectedDate || !time) return;

        const date = selectedDate;
        const t = time;

        const success = submitBooking({ fullName, email, phone, message, date, time: t });
        if (success) {
            // Remove it from the dropdown via local "booked" filter
            setBookings((prev) => {
                const list = new Set(prev[date] || []);
                list.add(t);
                return { ...prev, [date]: Array.from(list) };
            });

            // Navigate to nested /confirmed and pass the booking details
            navigate("confirmed", { state: { date, time: t } });
        }
    }

    return (
        <section className="booking-section">
            <BookingForm
                dateOptions={dateOptions}
                selectedDate={selectedDate}
                availableTimes={timesForSelectedDate}
                time={time}
                onDateChange={handleDateChange}
                onTimeChange={setTime}
                onSubmitBooking={handleSubmitBooking}
                wasFetched={hasFetchedTimes}
            />

            {/* Nested route renders here, right below the dropdown */}
            <Outlet />
        </section>
    );
}
