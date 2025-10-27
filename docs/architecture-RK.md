# Architectural Layout – Rajveer Kaur

## Overview
This document describes the custom architecture I implemented in the Fashion Items Project, following the Hook → Service → Repository pattern.  
The design separates presentation, business logic, and data storage for maintainability, reusability, and clarity.

Specifically, I implemented:
- CommentRepository (repository layer)
- CommentService (service layer)
- useComments (custom hook for comment management)
- useInteractions (custom hook to track interactions on the Landing Page and Customer Reviews)

---

## 1. CommentRepository

### What does it do?
CommentRepository manages the storage of comment data, including adding, updating, deleting, and fetching comments from a local test dataset.

### Logic and Separation of Concerns
- Handles only data access — it does not perform validation or manage UI state.  
- Keeps comment-related data management completely separate from UI or business logic.  
- Ensures that services and hooks do not manipulate raw data directly, supporting the Single Responsibility Principle.

### Where is it used?
- CommentService uses the repository to perform all CRUD operations on comments.  
- Indirectly used in Body.tsx through the service and hook.

---

## 2. CommentService

### What does it do?
CommentService provides the business logic for comment management, such as validating the length of comments before adding them and handling updates and deletions.

### Logic and Separation of Concerns
- Contains business rules (like comment validation) and delegates storage tasks to CommentRepository.  
- Separates UI concerns (handled by components/hooks) from data handling.  
- Any component or hook using this service can safely rely on validated, clean data, improving maintainability.

### Where is it used?
- Invoked in useComments to provide CRUD operations for comments.  
- Used in Body.tsx indirectly via the hook.

---

## 3. useComments Hook

### What does it do?
useComments manages comment state for React components. It provides:
- comments – the current list of comments  
- addComment – function to add a comment  
- updateComment – function to edit a comment  
- deleteComment – function to remove a comment  

### Logic and Separation of Concerns
- Handles React state management and UI updates, not raw data or validation.  
- Delegates all data operations and validation to CommentService.  
- Prevents prop drilling by providing a single, reusable interface to components for comment management.

### Where is it used?
- Body.tsx – manages and displays comments on the main page.

---

## 4. useInteractions Hook

### What does it do?
useInteractions tracks user interactions, such as:
- Total reviews submitted on the Customer Reviews page  
- Total actions on the Landing Page

It provides counts and setter functions to update them dynamically.

### Logic and Separation of Concerns
- Only handles interaction tracking, separate from comment management or other business logic.  
- Can be reused in any component needing to track interactions, without duplicating code.  
- Supports state sharing between pages using React state and hooks.

### Where is it used?
- LandingPage.tsx – counts interactions and updates UI.  
- CustomerReviews.tsx – counts total reviews submitted.

---

## Conclusion
This architecture meets the Sprint 3 requirements:
- Separates data, business, and presentation layers.  
- Makes logic reusable across multiple components.  
- Ensures that state shared across pages is managed through hooks and services, reducing prop drilling.  
- Prepares the project for easier maintenance and scaling in future sprints.
