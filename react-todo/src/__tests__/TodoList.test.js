import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText("Enter a new todo"), {
    target: { value: "New Todo" },
  });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");

  fireEvent.click(todo); // click the span
  const parentLi = todo.closest("li"); // get the <li> that has the style

  expect(parentLi).toHaveStyle("text-decoration: line-through");
});


test("deletes a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  const deleteButton = todo.nextSibling;
  fireEvent.click(deleteButton);
  
  // query again after deletion
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
