import { render, screen, waitFor } from "@testing-library/react";
import Day23 from "./Day23";

// Mock fetch globally
global.fetch = jest.fn();

describe("Day23 Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders loading initially", () => {
    render(<Day23 />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders user list after fetching", async () => {
    const mockUsers = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" }
    ];

    // Mock fetch response
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockUsers)
    });

    render(<Day23 />);

    // Wait until the list items appear
    const items = await waitFor(() => screen.getAllByRole("listitem"));

    expect(items).toHaveLength(2);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
  });

  test("handles fetch error gracefully", async () => {
    fetch.mockRejectedValueOnce(new Error("Failed to fetch"));

    render(<Day23 />);

    // Still should show heading but no list items
    await waitFor(() => expect(screen.getByText("User List")).toBeInTheDocument());
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
