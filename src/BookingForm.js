import React, { useRef, useState } from "react";

/**
 * Inline validation per field; on invalid submit we notify the parent
 * so it can show a warning card below the form.
 */
export default function BookingForm({
    dateOptions,
    selectedDate,
    availableTimes,
    time,
    onDateChange,
    onTimeChange,
    onSubmitBooking,
    wasFetched = false,
    onInvalidSubmit, // NEW (optional)
}) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [errors, setErrors] = useState({ fullName: "", email: "", phone: "" });

    const fullNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    // validators
    function validateFullName(value) {
        const v = value.trim();
        if (!v) return "Full name is required.";
        if (v.length < 2) return "Please enter at least 2 characters.";
        return "";
    }
    function validateEmailValue(value) {
        const v = value.trim();
        if (!v) return "Email is required.";
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(v)) return "Please enter a valid email address.";
        return "";
    }
    function validatePhoneValue(value) {
        const v = value.trim();
        if (!v) return "Phone is required.";
        const re = /^\+?[0-9\s\-()]{7,}$/;
        if (!re.test(v)) return "Please enter a valid phone number.";
        return "";
    }

    function validateAll() {
        const fullNameErr = validateFullName(fullName);
        const emailErr = validateEmailValue(email);
        const phoneErr = validatePhoneValue(phone);
        const next = { fullName: fullNameErr, email: emailErr, phone: phoneErr };
        setErrors(next);

        if (fullNameErr && fullNameRef.current) fullNameRef.current.focus();
        else if (emailErr && emailRef.current) emailRef.current.focus();
        else if (phoneErr && phoneRef.current) phoneRef.current.focus();

        return !fullNameErr && !emailErr && !phoneErr;
    }

    function handleSubmit(e) {
        e.preventDefault();

        // If invalid, show field errors *and* ask parent to show the warning card.
        if (!validateAll() || !time) {
            if (onInvalidSubmit) {
                onInvalidSubmit("You need to fill in the form first.");
            }
            return;
        }

        onSubmitBooking({ fullName, email, phone, message });

        // Reset personal info (keep date/time)
        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setErrors({ fullName: "", email: "", phone: "" });
    }

    function handleBlur(field) {
        if (field === "fullName") {
            setErrors((p) => ({ ...p, fullName: validateFullName(fullName) }));
        } else if (field === "email") {
            setErrors((p) => ({ ...p, email: validateEmailValue(email) }));
        } else if (field === "phone") {
            setErrors((p) => ({ ...p, phone: validatePhoneValue(phone) }));
        }
    }

    return (
        <form className="footer-form" onSubmit={handleSubmit} noValidate>
            <h2>Booking Form</h2>

            <div className="form-row">
                <div className="field">
                    <input
                        ref={fullNameRef}
                        id="fullName"
                        name="fullName"
                        placeholder="Full Name"
                        autoComplete="name"
                        value={fullName}
                        onChange={(e) => {
                            setFullName(e.target.value);
                            if (errors.fullName) setErrors((p) => ({ ...p, fullName: "" }));
                        }}
                        onBlur={() => handleBlur("fullName")}
                        required
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    />
                    {errors.fullName && (
                        <p id="fullName-error" className="error-text" role="alert">
                            {errors.fullName}
                        </p>
                    )}
                </div>

                <div className="field">
                    <input
                        ref={emailRef}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your E-mail"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((p) => ({ ...p, email: "" }));
                        }}
                        onBlur={() => handleBlur("email")}
                        required
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                        <p id="email-error" className="error-text" role="alert">
                            {errors.email}
                        </p>
                    )}
                </div>

                <div className="field">
                    <input
                        ref={phoneRef}
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Your Phone"
                        autoComplete="tel"
                        inputMode="tel"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone) setErrors((p) => ({ ...p, phone: "" }));
                        }}
                        onBlur={() => handleBlur("phone")}
                        required
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                        <p id="phone-error" className="error-text" role="alert">
                            {errors.phone}
                        </p>
                    )}
                </div>
            </div>

            <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Anything we should know?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <fieldset className="datetime-group">
                <legend className="group-title">Choose your booking date &amp; time</legend>

                <div className="datetime-grid">
                    <div className="field">
                        <label htmlFor="date">Date</label>
                        <select
                            id="date"
                            name="date"
                            value={selectedDate}
                            onChange={(e) => onDateChange(e.target.value)}
                            required
                        >
                            {dateOptions.map((d) => (
                                <option key={d.iso} value={d.iso}>
                                    {d.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="field">
                        <label htmlFor="time">Time</label>
                        <select
                            id="time"
                            name="time"
                            value={time}
                            onChange={(e) => onTimeChange(e.target.value)}
                            required
                            disabled={!availableTimes.length}
                        >
                            {availableTimes.length ? (
                                availableTimes.map((t) => (
                                    <option key={t} value={t}>
                                        {t}
                                    </option>
                                ))
                            ) : (
                                <option value="">
                                    {wasFetched ? "Fully booked for this date" : "Loading times…"}
                                </option>
                            )}
                        </select>
                    </div>
                </div>
            </fieldset>

            {/* Keep the button clickable unless there are literally no times */}
            <button type="submit" disabled={!availableTimes.length}>
                Book
            </button>
        </form>
    );
}
