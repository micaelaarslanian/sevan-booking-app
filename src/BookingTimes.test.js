import { initializeTimes, updateTimes } from "./BookingSection";

// Mock the global fetchAPI and submitAPI functions
beforeEach(() => {
    window.fetchAPI = jest.fn();
    window.submitAPI = jest.fn().mockReturnValue(true);
});

//  Clean up mocks after each test
afterEach(() => {
    delete window.fetchAPI;
    delete window.submitAPI;
});

// Test the initializeTimes function
test("initializeTimes uses API for today", () => {
    window.fetchAPI.mockReturnValue(["17:00", "17:30"]);

    const times = initializeTimes();

    expect(window.fetchAPI).toHaveBeenCalledTimes(1);
    expect(window.fetchAPI.mock.calls[0][0]).toBeInstanceOf(Date);
    expect(times).toEqual(["17:00", "17:30"]);
});

// Test the updateTimes function for SET_DATE action
test("updateTimes uses API for selected date", () => {
    window.fetchAPI.mockReturnValue(["18:00", "18:30"]);   // this test's return

    const times = updateTimes(["x"], { type: "SET_DATE", date: "2025-10-02" });

    expect(window.fetchAPI).toHaveBeenCalledTimes(1);
    expect(window.fetchAPI.mock.calls[0][0]).toBeInstanceOf(Date);
    expect(times).toEqual(["18:00", "18:30"]);
});

// Test that updateTimes returns same state for unknown action
test("unknown action returns same state reference", () => {
    const state = ["17:00", "17:30"];
    const out = updateTimes(state, { type: "NOOP" });
    expect(out).toBe(state);
});
