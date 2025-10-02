// src/BookingForm.test.jsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "./BookingForm";


// the tests pretends o open your bookingform on a blankpage
function renderBookingForm(overrides = {}) {
    const props = {
        dateOptions: [
            { iso: "2025-10-01", label: "Wed, Oct 1" },
            { iso: "2025-10-02", label: "Thu, Oct 2" },
        ],
        selectedDate: "2025-10-01",
        availableTimes: ["17:00", "17:30"],
        time: "17:00",
        onDateChange: jest.fn(),
        onTimeChange: jest.fn(),
        onSubmitBooking: jest.fn(),
        ...overrides,
    };
    render(<BookingForm {...props} />);
    return props;
}

// expects to find the heading and the two labels
test("renders the Booking Form heading", () => {
    renderBookingForm();
    expect(
        screen.getByRole("heading", { name: /booking form/i })
    ).toBeInTheDocument();
});

// expects to render the date and time labels
test("renders Date and Time labels", () => {
    renderBookingForm();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
});
